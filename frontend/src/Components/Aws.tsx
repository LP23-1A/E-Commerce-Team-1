"use client";
import { useState } from "react";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "AKIAZQ3DNMJITNXDWQNE",
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY ||
      "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",
  },
});
async function getSignedUrlForUpload(): Promise<{
  uploadUrl: string;
  objectUrl: string;
}> {
  try {
    const key = uuidv4();
    const signedUrl = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: "team3-ecommerce",
        Key: key,
        ACL: "public-read",
      }),
      {
        expiresIn: 60 * 60,
      }
    );
    const objectUrl = `https://team3-ecommerce.s3.ap-southeast-1.amazonaws.com/${key}`;
    return {
      uploadUrl: signedUrl,
      objectUrl: objectUrl,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default function UploadComponent() {
  const [uploadedUrl, setUploadedUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      const { uploadUrl, objectUrl } = await getSignedUrlForUpload();
      await fetch(uploadUrl, {
        method: "PUT",
        body: selectedFile,
        headers: {
          "Content-Type": selectedFile.type,
        },
      });
      setUploadedUrl(objectUrl);
      console.log("Object uploaded successfully:", objectUrl);
    } catch (error) {
      console.error("Error uploading object:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
      {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}
    </div>
  );
}

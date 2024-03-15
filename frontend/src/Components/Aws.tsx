"use client";
import { useState } from "react";
import getSignedUrlForUpload from "@/app/api/upload-image/route";

export default function UploadComponent() {
  const [uploadedUrl, setUploadedUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadError("");

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
      setUploadError("Error uploading object. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploadError && <div style={{ color: "red" }}>{uploadError}</div>}
      {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}
    </div>
  );
}

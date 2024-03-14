import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";

const s3 = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "AKIAZQ3DNMJITNXDWQNE",
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY ||
      "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",
  },
});

export async function GET(request: Request) {
  console.log(s3);

  try {
    const key = v4();
    const sign = await getSignedUrl(
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

    return Response.json({
      uploadUrls: sign,
      objectUrl: `https://ecommerce-team-1.s3.ap-southeast-1.amazonaws.com/${key}`,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      error,
    });
  }
}

// import AWS from "aws-sdk";
// import { v4 } from "uuid";
// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// AWS.config.correctClockSkew = true;
// const s3 = new S3Client({
//   region: "ap-southeast-1",
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
//   },
// });

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const count = url.searchParams.get("count");

//   if (!count) {
//     return Response.json(
//       { message: "Missing count parameter" },
//       { status: 400 }
//     );
//   }

//   const keys = Array.from({ length: Number(count) }, () => v4());

//   const urls = await Promise.all(
//     keys.map((key) =>
//       getSignedUrl(
//         s3,
//         new PutObjectCommand({
//           Bucket: "test",
//           Key: key,
//           ACL: "public-read",
//         }),
//         {
//           expiresIn: 60 * 60,
//         }
//       )
//     )
//   );

//   return Response.json({
//     uploadUrls: urls,
//     accessUrls: keys.map((key) => process.env.PUB_URL + key),
//   });
// }
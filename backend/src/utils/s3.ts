import AWS, { Credentials } from "aws-sdk";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

AWS.config.correctClockSkew = true;
const s3 = new AWS.S3();

const UploadFile = (fileName: string, bucketName: string): void => {
  const fileContent: Buffer = fs.readFileSync(fileName);

  const params: AWS.S3.Types.PutObjectRequest = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileContent,
  };

  s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
    if (err) {
      console.error("Error uploading file:", err);
    } else {
      console.log(`File uploaded successfully. ${data.Location}`);
    }
  });
};

UploadFile("Avatar.png", "ecommerce-team-1");
export { UploadFile };

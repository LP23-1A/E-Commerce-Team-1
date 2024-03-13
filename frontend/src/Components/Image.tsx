// import React, { ChangeEvent, useState } from "react";
// import AWS from "aws-sdk";

// // Initialize AWS SDK with correctClockSkew option
// AWS.config.correctClockSkew = true;

// // Load AWS credentials from the default profile in the AWS CLI configuration file


// // Create an S3 instance
// const s3 = new AWS.S3();

// const S3ImageUploader: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState<boolean>(false);
//   const [uploadResult, setUploadResult] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // Handler for file input change
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFile(event.target.files[0]);
//     }
//   };

//   // Handler for file upload
//   const handleUpload = async () => {
//     if (!file) {
//       setError("Please select a file.");
//       return;
//     }

//     setUploading(true);
//     setError(null);

//     try {
//       // Define parameters for S3 upload
//       const fileName = file.name;
//       const fileContent = file;
//       const params = {
//         Bucket: "ecommerce-team-1", // Replace with your S3 bucket name
//         Key: fileName,
//         Body: fileContent,
//       };

//       // Upload file to S3 bucket
//       const data = await s3.upload(params).promise();
//       setUploadResult(data.Location); // Set upload result
//     } catch (err) {
//       setError(`Error uploading file: ${err.message}`); // Set error message
//     } finally {
//       setUploading(false); // Reset uploading state
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       {/* File input field */}
//       <input type="file" onChange={handleChange} className="mb-4" />

//       {/* Upload button */}
//       <button
//         onClick={handleUpload}
//         disabled={uploading}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         {uploading ? "Uploading..." : "Upload Image"}
//       </button>

//       {/* Error message */}
//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       {/* Upload result */}
//       {uploadResult && (
//         <p className="text-green-500 mt-2">
//           File uploaded successfully. URL: {uploadResult}
//         </p>
//       )}
//     </div>
//   );
// };

// export default S3ImageUploader;

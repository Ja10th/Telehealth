import * as sdk from "node-appwrite";

const {
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_BUCKET_PUBLIC_ID,
  NEXT_PUBLIC_ENDPOINT,
} = process.env;

console.log("Project ID: ", process.env.NEXT_PUBLIC_PROJECT_ID);

const client = new sdk.Client()
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!) // Your project ID
  .setKey(process.env.NEXT_PUBLIC_API_KEY!); // Your API key

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

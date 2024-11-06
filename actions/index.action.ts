const queriesCollectionId =
  process.env.NEXT_PUBLIC_APPWRITE_QUERY_COLLECTION_ID || "";
const enrollmentColelctionId =
  process.env.NEXT_PUBLIC_APPWRITE_ENROLLMENT_COLLECTION_ID || "";
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
import { databases, ID } from "@/lib/appwrite";

export const createQuery = async (data: any) => {
  try {
    return await databases
      .createDocument(databaseId, queriesCollectionId, ID.unique(), data)
      .then((res) => {
        console.log(res);

        return res;
      });
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const createEnrollment = async (data: any) => {
  try {
    return await databases
      .createDocument(databaseId, enrollmentColelctionId, ID.unique(), data)
      .then((res) => {
        console.log(res);

        return res;
      });
  } catch (error) {
    return error;
  }
};

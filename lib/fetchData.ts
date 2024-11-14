import { databases } from "@/lib/appwrite";

export const getData = async () => {
  return await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_DATA_COLLECTION_ID || "",
  );
};

export const getFeaturesData = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_FEATURES_COLLECTION_ID || "",
    )
    .then((res) => res);
};
export const getTestimonialData = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_TESTIMONIAL_COLLECTION_ID || "",
    )
    .then((res) => res);
};
export const getStatsData = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_STATS_COLLECTION_ID || "",
    )
    .then((res) => res);
};
export const getRelatedCourseData = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_RELATEDCOURSE_COLLECTION_ID || "",
    )
    .then((res) => res);
};
export const getRelatedTestSeries = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_RELATEDTESTSERIES_COLLECTION_ID || "",
    )
    .then((res) => res);
};
export const getRelatedBooks = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_RELATEDBOOKS_COLLECTION_ID || "",
    )
    .then((res) => res);
};
export const getSlider = async () => {
  return await databases
    .listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_SLIDER_COLLECTION_ID || "",
    )
    .then((res) => res);
};

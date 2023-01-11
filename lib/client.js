import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "10zmt4v4",
    dataset: "production",
    apiVersion: "2023-01-10",
    useCdn: false
});
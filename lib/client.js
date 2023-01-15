import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
    projectId: "10zmt4v4",
    dataset: "production",
    apiVersion: "2023-01-10",
    useCdn: false,
    token: process.env.SANITY_TOKEN

});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
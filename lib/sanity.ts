import { createClient } from '@sanity/client';

// Create and export the Sanity client
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Environment variable
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // If you're using an API token
  useCdn: process.env.NODE_ENV === 'production', // Using CDN for production builds
});

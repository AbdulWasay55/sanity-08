import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

// Debug the environment variables
console.log('Sanity Project ID:', projectId);
console.log('Sanity Dataset:', dataset);
console.log('Sanity API Version:', apiVersion);

// Ensure required environment variables are set
if (!projectId || !dataset || !apiVersion) {
  throw new Error('Missing required Sanity environment variables');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

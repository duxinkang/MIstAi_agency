import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set to false in mutating calls or ISR-sensitive paths
  perspective: "published",
});

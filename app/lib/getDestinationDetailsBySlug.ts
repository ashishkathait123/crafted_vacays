import { getAllDestinations } from './getAllDestinations';

export async function getDestinationDetailsBySlug(slug: string) {
  const all = await getAllDestinations();
  return all.find((d) => d.parent === slug.toLowerCase());
}

import DestinationDetails from "@/app/components/Destination/DestinationDetails";

// Correct interface for PageProps
interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = params;

  const res = await fetch(`https://craftedvacays.com/wp-json/wp/v2/pages?slug=${slug}`);
  const data = await res.json();
  const destination = data?.[0]; // Get the first destination if available

  return <DestinationDetails parentName={slug} destination={destination} />;
}

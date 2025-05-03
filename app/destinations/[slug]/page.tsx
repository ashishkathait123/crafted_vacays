import DestinationDetails from "@/app/components/Destination/DestinationDetails";



export default async function Page({ params }) {
  const res = await fetch(`https://craftedvacays.com/wp-json/wp/v2/pages?slug=${params.slug}`);
  const data = await res.json();
  const destination = data?.[0]; // Get the first destination if available

  return <DestinationDetails parentName={params.slug} destination={destination} />;
}

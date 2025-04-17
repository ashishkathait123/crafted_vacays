// app/destination/[slug]/page.tsx

import DestinationDetails from '@/app/components/Destination/DestinationDetails';
interface PageProps {
  params: { slug: string };
}

const DestinationPage = ({ params }: PageProps) => {
  return <DestinationDetails parentName={params.slug} />;
};

export default DestinationPage;

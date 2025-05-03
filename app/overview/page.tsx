// app/overview/[slug]/page.tsx
import { TourOverview } from "@/app/components/Destination/DestinationOverview";

type Props = {
  params: {
    slug: string;
  };
};

// The Page Component is now a Server Component
export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <main>
      <TourOverview slug={slug} />
    </main>
  );
}

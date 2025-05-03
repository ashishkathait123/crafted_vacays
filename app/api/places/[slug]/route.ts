//app/api/places/[slug]/route.ts

import { NextRequest, NextResponse } from 'next/server';

const placesData: Record<string, any> = {
  andaman: {
    name: 'Andaman',
    description: 'Explore the beautiful beaches of Andaman.',
    imageUrl: '/images/andaman.png',
    additionalImages: ['/images/d1.jpg', '/images/andaman1.png'],
    additionalDescription: 'An Andaman tour offers a diverse range of experiences, from relaxing on pristine beaches to exploring lush forests and vibrant marine life.',
    mapEmbedCode: '1m14!1m12!1m3!1d121914.86196405679!2d74.07886878452959!3d40.72084424392851',
  },
  goa: {
    name: 'Goa',
    description: 'The perfect destination for relaxation and fun.',
    imageUrl: '/images/d2.jpg',
    additionalImages: ['/images/n1.jpg', '/images/n2.jpg'],
    additionalDescription: 'Experience the vibrant culture, beaches, and nightlife of Goa.',
    mapEmbedCode: '1m14!1m12!1m3!1d121914.86196405679!2d74.07886878452959!3d40.72084424392851',
  },
};

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = await context.params;  // Await the params here

  const place = placesData[slug];

  if (place) {
    return NextResponse.json(place);
  } else {
    return NextResponse.json({ message: 'Place not found' }, { status: 404 });
  }
}

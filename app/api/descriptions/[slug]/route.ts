// app/api/descriptions/[slug]/route.ts

import { NextRequest, NextResponse } from 'next/server';

const descriptionData: Record<string, any> = {
    thailand: {
      title: 'Thailand: The Best Destination Asia Pacific Awaits',
      quote: {
        text: '“One of the dreams on my wish list is to spend more time in Thailand.”',
        author: 'Kevin Kwan',
      },
      paragraphs: [
        'Thailand is the heart of Southeast Asia. A land of magic and wonder, it is the perfect vacation destination, catering to solo adventurers, families with kids, and even honeymoon couples.',
        'Nestled on the Indo-Chinese Peninsula, this country is a treasure trove of rich history, culture, and traditions, offering many unique experiences that more than one visit is needed to grasp fully. From its vibrant art scene to its lively entertainment, Thailand will captivate you with its beauty.',
      ],
      expandedParagraphs: [
        'If Thailand is on your to-go bucket list, you have found your best travel partner for planning your unforgettable trip to Thailand. We provide the best Thailand tour package at a very affordable price. We have designed travel itineraries to ensure that you don’t miss out on any highlights that the country has to offer.',
        'With destinations like Phuket, Krabi, Koh Samui, Bangkok, Pattaya, Chiang Mai, and Chiang Rai, we help you uncover the best of Thailand through custom-tailored tour packages suited to your preferences and budget.',
      ],
      whatsappNumber: '918192812557',
      destinationName: 'Thailand',
    },
    goa: {
      title: 'Goa: Sun, Sand & Serenity on India’s Coastline',
      quote: {
        text: '“Goa is not just a destination, it’s a vibe.”',
        author: 'Unknown',
      },
      paragraphs: [
        'Goa, India’s smallest state, is a coastal paradise known for its pristine beaches, vibrant nightlife, and rich Portuguese heritage. It’s where relaxation meets adventure.',
        'Whether you’re into beach parties, water sports, or just soaking in the sunset with a chilled drink, Goa has something for every traveler.',
      ],
      expandedParagraphs: [
        'Our Goa tour packages are thoughtfully crafted to offer a blend of leisure and exploration. Visit iconic spots like Baga Beach, Fort Aguada, Anjuna Flea Market, and the charming churches of Old Goa.',
        'From luxury resorts to cozy beach huts, and spice plantations to waterfall treks—experience the magic of Goa your way.',
      ],
      whatsappNumber: '918192812557',
      destinationName: 'Goa',
    },
    andaman: {
      title: 'Andaman: A Tropical Paradise of Azure Waters',
      quote: {
        text: '“Heaven is a little closer in a place like Andaman.”',
        author: 'Unknown',
      },
      paragraphs: [
        'The Andaman Islands are India’s hidden gem, offering turquoise waters, white sand beaches, and lush greenery untouched by time.',
        'Ideal for nature lovers, honeymooners, and diving enthusiasts, Andaman offers an escape into a peaceful and exotic world.',
      ],
      expandedParagraphs: [
        'Our Andaman tour packages cover the best of Port Blair, Havelock Island, and Neil Island. Enjoy underwater adventures like snorkeling, scuba diving, and sea walking.',
        'Visit the famous Cellular Jail, explore vibrant coral reefs, and relax on stunning beaches like Radhanagar and Kalapathar.',
      ],
      whatsappNumber: '918192812557',
      destinationName: 'Andaman',
    },
    kerala: {
      title: 'Kerala: God’s Own Country – A Symphony of Nature',
      quote: {
        text: '“In Kerala, nature whispers, and the soul listens.”',
        author: 'Unknown',
      },
      paragraphs: [
        'Kerala, nestled along the Malabar Coast, is a tropical symphony of backwaters, hill stations, and lush landscapes.',
        'Whether you’re sailing through Alleppey’s houseboats or exploring the misty hills of Munnar, Kerala is an immersive journey through nature’s finest.',
      ],
      expandedParagraphs: [
        'Experience the culture through traditional Kathakali performances, Ayurvedic wellness, and authentic Kerala cuisine. Our Kerala packages balance relaxation and exploration.',
        'From wildlife in Thekkady to the calm backwaters of Kumarakom and cultural richness of Kochi, your journey through Kerala will be as serene as it is soulful.',
      ],
      whatsappNumber: '918192812557',
      destinationName: 'Kerala',
    },
  };
  

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  const content = descriptionData[slug];

  if (content) {
    return NextResponse.json(content);
  } else {
    return NextResponse.json({ message: 'Description not found' }, { status: 404 });
  }
}

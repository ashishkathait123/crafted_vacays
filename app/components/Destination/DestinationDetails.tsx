'use client';

import React, { useEffect, useState, useMemo } from 'react';
import TopRecommendedSection from '../../destinations/TopRecommendedSection';
import { useDestination } from '../../destinations/DestinationContext';
import TourPackageCard from '@/app/components/tour/TourPackageCard';
import SidebarFilter from '../Filter/SidebarFilter';

// Dummy Data (replace this with real API fetching)
const dummyDestinations = [
  {
    slug: 'thailand',
    title: 'Thailand– Island of the Gods',
    introParagraph: 'Thailand is a beautiful island paradise with pristine beaches, vibrant culture, and incredible natural landscapes.',
    heroImage: '/images/h2.jpg',
    highlights: ['Beautiful beaches', 'Vibrant temples', 'Surfing & yoga retreats', 'Rice terraces'],
    videoSection: {
      videoUrl: '/videos/thailand.mp4',
      videoThumbnail: '/images/n1.jpg',
    },
    testimonialSection: {
      heading: 'Traveler Reviews',
      description: 'Hear from those who have explored Thailand with us!',
      testimonials: [
        {
          name: 'Emma Watson',
          text: 'An unforgettable experience! The tour was perfectly planned.',
          image: '/images/n2.jpg',
        },
        {
          name: 'John Doe',
          text: 'Great guides, wonderful locations, and smooth bookings.',
          image: '/images/n1.jpg',
        },
      ],
    },
    recommended: [
      { title: 'Ubud Monkey Forest', image: '/images/d3.jpg' },
      { title: 'Kuta Beach Sunset', image: '/images/d3.jpg' },
      { title: 'Kuta Beach Sunset', image: '/images/n2.jpg' },
      { title: 'Kuta Beach Sunset', image: '/images/n1.jpg' },
      { title: 'Kuta Beach Sunset', image: '/images/n4.jpg' },
    ],
    packages: [
      {
        id: 1,
        title: '7-Day Thailand Discovery',
        language: 'English',
        durationLabel: '7 Days',
        rating: 4.5,
        specials: ['Family Friendly', 'Adventure'],
        price: 999,
        thumbnail: '/images/n1.jpg',
      },
      {
        id: 2,
        title: 'Thailand Honeymoon Escape',
        language: 'French',
        durationLabel: '5 Days',
        rating: 5,
        specials: ['Romantic', 'Luxury'],
        price: 1399,
        thumbnail: '/images/n1.jpg,/images/d1.jpg',
      },
    ],
  },
];

type DestinationType = typeof dummyDestinations[number];

interface DestinationDetailsProps {
  destinationList?: DestinationType[];
  parentName?: string;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({
  destinationList = dummyDestinations,
  parentName = 'Thailand',
}) => {
  const { setDestinationName } = useDestination();

  const [filters, setFilters] = useState({
    language: [] as string[],
    duration: [] as string[],
    rating: [] as number[],
    specials: [] as string[],
  });

  useEffect(() => {
    setDestinationName(parentName);
    // fetchDestinationData(); // Uncomment when API is ready
  }, [parentName]);

  // const fetchDestinationData = async () => {
  //   try {
  //     // const response = await fetch(`/api/destinations/${parentName}`);
  //     // const data = await response.json();
  //     // setDestinations(data);
  //   } catch (error) {
  //     console.error('Failed to fetch destination details:', error);
  //   }
  // };

  return (
    <div className="text-gray-800 dark:text-white">
      <div className="py-8 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-4">
          Explore Destinations in {parentName.charAt(0).toUpperCase() + parentName.slice(1)}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find curated experiences, packages, highlights, and recommendations in each location.
        </p>
      </div>

      {destinationList.map((destination, idx) => {
        const mainTitle = destination.title.split('–')[0].trim();

        const filteredPackages = useMemo(() => {
          return destination.packages.filter((pkg) => {
            const matchesLanguage =
              filters.language.length === 0 || filters.language.includes(pkg.language);
            const matchesDuration =
              filters.duration.length === 0 || filters.duration.includes(pkg.durationLabel);
            const matchesRating =
              filters.rating.length === 0 || filters.rating.includes(Math.round(pkg.rating));
            const matchesSpecials =
              filters.specials.length === 0 ||
              filters.specials.every((s) => pkg.specials?.includes(s));

            return matchesLanguage && matchesDuration && matchesRating && matchesSpecials;
          });
        }, [destination.packages, filters]);

        return (
          <div key={idx}>
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden mb-8">
              <img
                src={destination.heroImage}
                className="w-full h-full object-cover"
                alt={destination.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{destination.title}</h2>
              </div>
            </div>

            {/* Intro Paragraph */}
            <section className="py-8 px-4 md:px-16 max-w-6xl mx-auto">
              <p className="text-lg">{destination.introParagraph}</p>
            </section>

            {/* Highlights */}
            <section className="bg-gray-100 dark:bg-gray-900 py-10">
              <div className="max-w-6xl mx-auto px-4 md:px-16">
                <h3 className="text-2xl font-semibold mb-4">Why Visit {mainTitle}?</h3>
                <ul className="list-disc ml-6 space-y-2">
                  {destination.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Packages & Filters */}
            <section className="py-10 px-4 md:px-16 max-w-7xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Tour Packages in {mainTitle}</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                  <SidebarFilter filters={filters} onFilterChange={setFilters} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg) => (
                      <TourPackageCard key={pkg.id} packageData={pkg} />
                    ))
                  ) : (
                    <p className="col-span-full text-lg text-center">
                      No packages match your filters.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section className="relative py-12 bg-black text-white text-center">
              <h3 className="text-2xl mb-4">Experience {mainTitle} in Motion</h3>
              <a href={destination.videoSection.videoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={destination.videoSection.videoThumbnail}
                  alt="Watch Video"
                  className="mx-auto rounded-lg shadow-lg hover:opacity-90 transition"
                />
              </a>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-100 dark:bg-gray-900 py-10 px-4 md:px-16">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                  {destination.testimonialSection.heading}
                </h3>
                <p className="mb-8">{destination.testimonialSection.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {destination.testimonialSection.testimonials.map((review, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                      <p className="italic mb-4">“{review.text}”</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <span className="font-semibold">{review.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Top Recommended Section */}
            <TopRecommendedSection destination={mainTitle} recommended={destination.recommended} />
          </div>
        );
      })}
    </div>
  );
};

export default DestinationDetails;

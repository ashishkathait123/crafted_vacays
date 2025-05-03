// app/data/dummyData.ts

export const tourOverview = {
    title: "Majestic Mountains Tour",
    description: "Embark on an unforgettable adventure through the breathtaking peaks of the Himalayan mountains. Explore scenic landscapes, visit historic villages, and experience local culture.",
    imageUrl: "/images/n3.jpg",
    buttonText: "Book Now",
  };
  
  export const tourAmenities = [
    {
      icon: "hotel", // You can use icon names or actual React Icons
      title: "Accommodation",
      location:"Bali",
      description: "Stay in comfortable and luxurious hotels.",
    },
    {
      icon: "bicycle",
      title: "Adventure Activities",
      location:"Bali",
      description: "Enjoy thrilling activities like hiking, cycling, and zip-lining.",
    },
    {
      icon: "plane",
      title: "Air Travel",
      description: "Flights to and from the destination are included.",
    },
    {
      icon: "utensils",
      title: "Meals Included",
      description: "Delicious meals, including local cuisine, are provided during the trip.",
    },
  ];
  
  export const includedItems = [
    "Hotel Stay",
    "Daily Meals",
    "Transportation",
    "Guided Tour",
  ];
  
  export const excludedItems = [
    "Personal Expenses",
    "Travel Insurance",
    "Optional Activities",
  ];
  
  export const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & City Tour",
      description:
        "Arrive at the city and enjoy a city tour visiting historical landmarks and cultural sites.",
    },
    {
      day: "Day 2",
      title: "Nature & Adventure",
      description:
        "Explore the nearby nature reserve, hike scenic trails, and enjoy thrilling adventure activities.",
    },
    {
      day: "Day 3",
      title: "Cultural Immersion",
      description:
        "Immerse yourself in the local culture by visiting museums, markets, and traditional events.",
    },
    {
      day: "Day 4",
      title: "Departure",
      description: "After breakfast, head to the airport for your return flight.",
    },
  ];
  
  export const relatedTours = [
    {
      title: "Mountain Trekking",
      description: "Enjoy a thrilling trek to the highest peaks.",
      imageUrl: "/images/d1.jpg",
      link: "/overview",
    },
    {
      title: "Jungle Safari",
      description: "Experience the wildlife up close with a thrilling safari adventure.",
      imageUrl: "/images/related-tour2.jpg",
      link: "/tour/jungle-safari",
    },
    {
      title: "Beach Getaway",
      description: "Relax on the sandy beaches and indulge in water sports.",
      imageUrl: "/images/related-tour3.jpg",
      link: "/tour/beach-getaway",
    },
  ];
  
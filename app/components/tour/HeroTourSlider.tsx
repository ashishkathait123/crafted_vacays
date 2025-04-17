import React from "react";
import { Container } from "@mui/material";
import TourPackageCard from "@/app/components/tour/TourPackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { useCurrency } from "../CurrencyContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const tourPackages = [
  {
    title: "Tropical Paradise",
    duration: "7N/8D",
    itinerary: "3N Bali → 2N Gili Islands → 2N Ubud",
    tags: ["Beach", "Luxury"],
    hotels: 5,
    activities: 8,
    transfers: 6,
    originalPrice: 12000, 
    discountedPrice: 9500,
    defaultRating: "4",
    images: ["/images/n2.jpg"]
  },
  {
    title: "Mountain Escape",
    duration: "5N/6D",
    itinerary: "2N Kathmandu → 3N Everest Base Camp",
    tags: ["Adventure", "Hiking"],
    hotels: 3,
    activities: 5,
    transfers: 4,
    originalPrice: 12000,
    discountedPrice: 9500,
    defaultRating: "5",
    images: ["/images/d2.jpg"]
  },
  {
    title: "European Dream",
    duration: "10N/11D",
    itinerary: "3N Paris → 3N Rome → 4N Amsterdam",
    tags: ["Culture", "Luxury"],
    hotels: 5,
    activities: 10,
    transfers: 8,
    originalPrice: 25000,
    discountedPrice: 22000,
    defaultRating: "5",
    images: ["/images/n2.jpg", "/images/d2.jpg"]
  }
];

const TourPackage = () => {
  const { convertPrice, currencySymbol } = useCurrency();

  return (
    <Container sx={{ mt: 4, position: "relative" }}>
      <div className="foggy-effect mb-6">
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
        >
          {tourPackages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <TourPackageCard
                packageData={{
                  ...pkg,
                  originalPrice: `${currencySymbol}${convertPrice(pkg.originalPrice).toFixed(2)}`,
                  discountedPrice: `${currencySymbol}${convertPrice(pkg.discountedPrice).toFixed(2)}`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default TourPackage;

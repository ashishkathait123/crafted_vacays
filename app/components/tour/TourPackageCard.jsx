"use client";

import React, { useState, useEffect } from "react";
import { useCurrency } from "../CurrencyContext";
import {
  Box,
  Chip,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const TourPackageCard = ({ packageData }) => {
  const { convertPrice, currencySymbol } = useCurrency();
  const [selectedHotel, setSelectedHotel] = useState("3");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const images =
    Array.isArray(packageData.images) && packageData.images.length
      ? packageData.images
      : ["/images/bg.jpg"];

  // Auto Image Change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Calculate Price Based on Hotel Type
  const calculatePrice = () => {
    let basePrice = parseFloat(packageData.discountedPrice) || 0;

    if (selectedHotel === "4") return convertPrice(Math.round(basePrice * 1.2));
    if (selectedHotel === "5") return convertPrice(Math.round(basePrice * 1.5));

    return convertPrice(basePrice);
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        width: "100%",
        maxWidth: 400,
        height: 450,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 3,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out, transform 0.5s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        cursor: "pointer",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Navigation Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor:
                index === currentImageIndex ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </Box>

      {/* Top Section */}
      <Box sx={{ position: "relative", zIndex: 2, mb: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {(packageData.tags || []).map((tag, index) => (
            <Chip
              key={index}
              icon={<LocalOfferIcon sx={{ color: "white" }} />}
              label={`#${tag}`}
              sx={{
                bgcolor: "rgba(255,255,255,0.3)",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            />
          ))}
        </Box>
        <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
          {packageData.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <AccessTimeIcon fontSize="small" /> {packageData.duration}
        </Typography>
      </Box>

      {/* Hotel Type Selection */}
      <Box
        sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 2 }}
      >
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {packageData.itinerary}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
          Hotel Type
        </Typography>
        <RadioGroup
          row
          name="hotelRating"
          value={selectedHotel}
          onChange={(e) => setSelectedHotel(e.target.value)}
          sx={{ justifyContent: "center" }}
        >
          {["3", "4", "5"].map((rating, index) => (
            <FormControlLabel
              key={index}
              value={rating}
              control={<Radio sx={{ color: "white" }} />}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <HotelIcon fontSize="small" />
                  <Typography sx={{ color: "white", fontSize: "12px" }}>
                    {rating} Star
                  </Typography>
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 2 }}>
        <Typography
          variant="body2"
          sx={{ textDecoration: "line-through", opacity: 0.7 }}
        >
          {currencySymbol}{" "}
          {convertPrice(parseFloat(packageData.originalPrice) || 0) || "N/A"}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {currencySymbol} {calculatePrice()}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.8 }}>
          Approx Price without flights
        </Typography>
      </Box>

      {/* CTA Button */}
      <Button
        variant="contained"
        color="warning"
        sx={{
          width: "100%",
          borderRadius: "20px",
          position: "relative",
          zIndex: 2,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Plan Now
      </Button>
    </Box>
  );
};

export default TourPackageCard;

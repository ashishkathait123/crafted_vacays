'use client';
import React from 'react';

interface EnquiryBlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

const EnquiryBlock: React.FC<EnquiryBlockProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="enquiry-block items-center px-4 grid grid-cols-1 sm:gap-4 md:grid-cols-8 bg-[#c84d28c7] rounded-xl overflow-hidden">
      {/* Left Section */}
      <div className="lg:px-8 col-span-1 md:col-span-4">
        <div className="enquiry-info pt-6 pb-0 md:py-14 gap-2 flex flex-col items-start">
          <h2 className="text-white text-3xl font-bold">{title}</h2>
          <p className="text-white text-lg">{description}</p>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="button button-white flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              <span>{buttonText}</span>
            </button>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="enquiry-picture col-span-1 md:col-span-4">
        <img
          alt={imageAlt}
          loading="lazy"
          width="3480"
          height="2732"
          decoding="async"
          className="cta-image w-full h-auto object-cover"
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default EnquiryBlock;

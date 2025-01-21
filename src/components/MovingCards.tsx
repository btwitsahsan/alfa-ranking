'use client'
import React from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote: "Alfa Ranking helped us revamp our website and the results were phenomenal. Our online presence has never been stronger.",
    name: "John Doe",
    title: "CEO, Tech Innovators"
  },
  {
    quote: "The team at Alfa Ranking is extremely talented and professional. Their graphic design work truly captured our brand’s essence.",
    name: "Sarah Collins",
    title: "Marketing Manager, Creative Co."
  },
  {
    quote: "We’ve seen a significant boost in traffic and conversions thanks to their SEO services. Highly recommend their expertise!",
    name: "Mike Anderson",
    title: "Founder, Ecomfy"
  },
  {
    quote: "Their digital marketing strategies are top-notch. We’ve been able to reach new audiences and grow our brand significantly.",
    name: "Jessica Brown",
    title: "CMO, Bright Horizons"
  },
  {
    quote: "The UI/UX design for our app was beyond expectations. Our customers love the improved experience.",
    name: "David Lee",
    title: "Product Manager, Appify"
  },
  {
    quote: "Partnering with Alfa Ranking was the best decision we made for our business. Their dedication and results speak volumes.",
    name: "Emma Johnson",
    title: "Owner, Bloom Boutique"
  }
];


const MovingCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">
      Melody of Achievement: Voices Behind Our Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCards;

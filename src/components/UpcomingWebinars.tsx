'use client'
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
 
const webinars = [
  {
    title: "Maximizing SEO Strategies for 2025",
    description: "Join us for an in-depth session on the latest SEO techniques and trends that will help your business rank higher and drive more traffic.",
    slug: "maximizing-seo-strategies-2025",
    isFeatured: true
  },
  {
    title: "Effective Digital Marketing in a Post-Pandemic World",
    description: "Learn how to adapt your digital marketing strategy to the ever-changing landscape of a post-pandemic world and stay ahead of the competition.",
    slug: "effective-digital-marketing-post-pandemic",
    isFeatured: true
  },
  {
    title: "Building Responsive Websites for All Devices",
    description: "This webinar will teach you how to design and build websites that provide an optimal user experience on both desktop and mobile devices.",
    slug: "building-responsive-websites",
    isFeatured: false
  },
  {
    title: "Graphic Design Principles for Business Branding",
    description: "Get insights into the foundational principles of graphic design and how they can help strengthen your business’s brand identity.",
    slug: "graphic-design-principles-branding",
    isFeatured: true
  },
  {
    title: "E-commerce Success: Building a Profitable Online Store",
    description: "Join our experts as they share strategies and tools for building and running a successful e-commerce platform that drives sales and customer engagement.",
    slug: "ecommerce-success-building-online-store",
    isFeatured: false
  },
  {
    title: "The Future of Web Development: Trends and Technologies",
    description: "Stay ahead of the curve with this webinar, where we explore emerging trends and technologies in web development and what they mean for your business.",
    slug: "future-of-web-development-trends",
    isFeatured: true
  }
];

  
  
const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Boost Your Skills with Expert Insights</p>
        </div>
        <div className="mt-10">
        <HoverEffect items={webinars.map((webinar)=>(
            {
                title: webinar.title,
                description: webinar.description,
                link: webinar.slug
            }

        ))} />
        </div>
        <div className="mt-10 text-center">
        <Link
          href={"/courses"}
          className="BTN px-4 py-2 bg-teal-600 hover:bg-teal-600 after:bg-slate-100 hover:text-teal-600"
        >
          View All Courses
        </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;

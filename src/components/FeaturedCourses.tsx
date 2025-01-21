'use client'
import Link from "next/link";
import React from "react";
import servicesData from "../data/services.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: string,
    image: boolean,
}
const FeaturedCourses = () => {
  const featuredServices = servicesData.services.filter(
    (service: any) => service.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase" id="services">
            FEATURED SERVICES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredServices.map((service: any) => (
            <div className="flex justify-center" key={service.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 text-center">
                {/* <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                /> */}
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {service.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">
                  {service.description}
                </p>
                <Link className="BTN" href={`/courses/${service.slug}`}>Learn More</Link>
                {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {`$${course.price}`}
                  </span>
                </button> */}
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="BTN px-4 py-2 bg-teal-600 hover:bg-teal-600 after:bg-slate-100 hover:text-teal-600"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;

'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: "Ahsan Munir",
    designation: "Senior Web Developer",
    image: "/images/instructors/am1.jpg" // Use the absolute path relative to the public folder
  },
  {
    id: 2,
    name: "Ahmad",
    designation: "Lead Graphic Designer",
    image: "/images/instructors/am2.jpg" // Same here
  },
  {
    id: 3,
    name: "Raja Ali",
    designation: "SEO Specialist",
    image: "/images/instructors/am3.jpg" // And here
  }
];

  

const Instructors = () => {
  return (
    <div className='relative h-[30rem] overflow-hidden flex flex-col items-center justify-center' id='aboutUs'>
        <WavyBackground
        colors={['#14b8a6', '#1f2937', '#1f2937']}
        waveWidth={60}
        speed="fast"
        blur={12}
        backgroundFill="rgba(0, 0, 0, 1)" 
        className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Expert Instructors</h2>
            <p className='text-base md:text-lg text-white text-center mb-4'>Get to know the passionate professionals shaping your path to success in web development, design, SEO, and digital marketing.</p>
        </WavyBackground>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors}/>
        </div>
    </div>
  )
}

export default Instructors
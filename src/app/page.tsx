import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <>
      <main className="bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <MovingCards />
        <UpcomingWebinars />
        <Instructors />
      </main>
    </>
  );
}

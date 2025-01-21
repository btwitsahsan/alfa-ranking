import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
// import ScrollContent from "@/components/ScrollContent";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import '@fortawesome/fontawesome-free/css/all.css';


export default function Home() {
  return (
    <>
    <main className="bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    {/* <ScrollContent/> */}
    <MovingCards/>
    <UpcomingWebinars/>
    <Instructors/>
    
    </main>
    </>
  );
}

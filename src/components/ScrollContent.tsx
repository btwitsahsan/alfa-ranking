
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
      {
        title: "Expert Instructors",
        description: "Learn from industry professionals with years of experience in their fields, ensuring top-quality education."
      },
      {
        title: "Comprehensive Curriculum",
        description: "Our courses are designed to cover every aspect of the subject, giving you in-depth knowledge and practical skills."
      },
      {
        title: "Flexible Learning",
        description: "Access courses anytime, anywhere, and learn at your own pace with our user-friendly platform."
      },
      {
        title: "Proven Success",
        description: "Join thousands of satisfied students who have successfully achieved their goals with our courses."
      }
    ]
  
const ScrollContent = () => {
  return (
    <div>
        <StickyScroll content={content} />
    </div>
  )
}

export default ScrollContent
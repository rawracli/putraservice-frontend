import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./pages/home/sections/Hero.jsx";
import PricingBanner from "./pages/home/sections/PricingBanner.jsx";
import AboutSection from "./pages/home/sections/AboutSection.jsx";
import WhyChooseUs from "./pages/home/sections/WhyChooseUs.jsx";
import Guarantee from "./pages/home/sections/Guarantee.jsx";
import TrustedClients from "./pages/home/sections/TrustedClients.jsx";
import ServiceSection from "./pages/home/sections/ServiceSection.jsx";
import Testimonial from "./pages/home/sections/Testimonial.jsx";
import DocumentationSection from "./pages/home/sections/DocumentationSection.jsx";
import FAQSection from "./pages/home/sections/FAQSection.jsx";
import CTASection from "./pages/home/sections/CTASection.jsx";
import Comments from "./pages/home/sections/Comments.jsx";
import ReviewController from "./controllers/ReviewController.js";

function App() {
  const [testimonials, setTestimonials] = useState([]);

  // Ambil data review dari API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await ReviewController.show(); // Kita perlu tambahkan fungsi show di controller frontend

        let filledTestimonials = [...res];
        const len = filledTestimonials.length;

        if (len > 0 && len < 12) {
          while (filledTestimonials.length < 12) {
            filledTestimonials.push(res[filledTestimonials.length % len]);
          }
        }

        setTestimonials(filledTestimonials);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <Hero data={testimonials} />
      <PricingBanner />
      <AboutSection />
      <WhyChooseUs />
      <Guarantee />
      <TrustedClients />
      <ServiceSection />
      <Testimonial data={testimonials} />
      <DocumentationSection />
      <FAQSection />
      <CTASection />
      <Comments />
    </>
  );
}

export default App;

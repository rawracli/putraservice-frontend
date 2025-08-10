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

function App() {
  return (
    <>
      <Hero/>
      <PricingBanner/>
      <AboutSection/>
      <WhyChooseUs/>
      <Guarantee/>
      <TrustedClients/>
      <ServiceSection/>
      <Testimonial/>
      <DocumentationSection/>
      <FAQSection/>
      <CTASection/>
    </>
  );
}

export default App;

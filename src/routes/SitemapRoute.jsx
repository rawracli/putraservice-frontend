import { Routes, Route } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";
import Documentation from "../pages/documentation/Documentation";

const SitemapRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/tentang-kami" element={<About />} />
    <Route path="/kontak" element={<Contact />} />
    <Route path="/layanan" element={<Service />} />
    <Route path="/dokumentasi" element={<Documentation />} />
  </Routes>
);

export default SitemapRoutes;
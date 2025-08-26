import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";
import Documentation from "../pages/documentation/Documentation";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/comments" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/documentation" element={<Documentation />} />
    </Routes>
  );
}

export default AppRoute;

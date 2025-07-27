import { Route, Routes } from "react-router-dom";
import App from "../App"
import About from "../pages/static/About"
import Contact from "../pages/static/Contact"
import Service from "../pages/static/Service"
import Documentation from "../pages/dynamic/Documentation"

function AppRoute() {
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/documentation" element={<Documentation />} />
        </Routes>
    )
}

export default AppRoute;
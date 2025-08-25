import {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App"
const About = lazy(() => import("../pages/about/About"))
const Contact = lazy(() => import("../pages/contact/Contact"))
const Service = lazy(() => import("../pages/service/Service"))
const Documentation = lazy(() => import("../pages/documentation/Documentation"))

function AppRoute() {
    return(
        <Suspense fallback={ <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#730B00] rounded-full animate-spin"></div>
    </div>}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/comments" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/documentation" element={<Documentation />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoute;
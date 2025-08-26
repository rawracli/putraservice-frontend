import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "Home | PutraService",
            "/about": "Tentang | PutraService",
            "/contact": "Kontak | PutraService",
            "/documentation": "Dokumentasi | PutraService",
            "/service": "Layanan | PutraService",
        };

        document.title = titles[location.pathname] || "PutraService";
    }, [location]);

    return null;
};

export default PageTitle;
import { Link, NavLink } from "react-router-dom";
import DropDown from "../assets/Logo/dropdown.png";
import Logo from "../assets/Logo/logo.svg";
import { useEffect, useState } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };
  return (
    <div
      className={`z-20 backdrop- fixed w-full flex items-center justify-center transition-all duration-300 font-semibold ${
        isVisible ? "translate-y-0" : "-translate-y-[110%]"
      } ${isOnTop ? "text-white from-black/18 to-[#9C9C9C]/18 bg-gradient-to-r h-23" : "bg-white h-19 shadow-sm shadow-white"}`}
    >
      <div className="flex items-center justify-center w-full mx-22">
        <div className="w-full h-full flex items-center">
          <img src={Logo} alt="Logo" className="w-16 " />
          <h2 className="font-bold text-xl ml-3">PUTRA SERVICE</h2>
        </div>
        <div className="flex w-full h-full gap-8 text-sm items-center ml-11 justify-center ">
          <NavLink
            to="/"
            onClick= {() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "border-[#A42619] border-b-2 relative"
                : "relative group"
            }
          >
            Home
            <div className="absolute border-b-2 w-0 group-hover:w-full ease-out duration-100 border-red-600 transition-all"></div>
          </NavLink>
          <NavLink
            to="/about"
            onClick= {() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "border-[#A42619] border-b-2 relative"
                : "relative group"
            }
          >
            Tentang
            <div className="absolute border-b-2 w-0 group-hover:w-full ease-out duration-100 border-red-600 transition-all"></div>
          </NavLink>
          <NavLink
            to="/service"
            onClick= {() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "border-[#A42619] border-b-2 relative"
                : "relative group"
            }
          >
            Layanan
            <div className="absolute border-b-2 w-0 group-hover:w-full ease-out duration-100 border-red-600 transition-all"></div>
          </NavLink>
          <div
            className="flex flex-col relative group"
            onClick={handleDropdown}
          >
            <div className="py-4 flex items-center">
              <button>Lainnya</button>
              <img src={DropDown} alt="" className="w-3 ml-2 mt-1" />
            </div>
            <div className="invisible absolute group-hover:visible flex hover:scale-100 transition-all top-12 left-0 px-3 pb-2">
              <div
                className={`flex flex-col divide-y-[1.5px] shadow-md ${isOnTop ? "divide-white" : "divide-black"}`}
                id="dropdown"
              >
                <Link to="/contact" onClick= {() => window.scrollTo(0, 0)} className={`py-2.5 px-4  transition-all ${isOnTop ? "hover:bg-black/30" : "bg-[#FFFBFB] hover:bg-gray-100"}`}>
                 Kontak
                </Link>
                <Link to="/documentation" onClick= {() => window.scrollTo(0, 0)} className={`py-2.5 px-4  transition-all ${isOnTop ? "hover:bg-black/30" : "bg-[#FFFBFB] hover:bg-gray-100"}`}>
                  Dokumentasi
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <Link className="bg-[#A30F00] text-white hover:bg-[#730B00] transition-all py-2 px-5 rounded-lg active:bg-[#600000]">
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

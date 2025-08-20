import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDown from "../assets/Logo/dropdown.webp";
import Logo from "../assets/Logo/logo.svg";
import useScrollBehaviour from "../hooks/useScrollBehaviour";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, isOnTop } = useScrollBehaviour();

  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };

  useEffect(() => {
    if (!isVisible) {
      setIsOpen(false);
    }
  }, [isVisible]);

  return (
    <>
      <nav className="relative w-full">
        <div
          className={`z-40 fixed w-full flex items-center justify-center transition-all duration-300 font-semibold ${
            isVisible ? "translate-y-0" : "-translate-y-[110%]"
          } ${
            isOnTop
              ? ` ${
                  isOpen
                    ? "bg-white h-17 md:h-19 shadow-sm shadow-white"
                    : "text-white from-black/18 to-[#9C9C9C]/18 bg-gradient-to-r h-19 md:h-23"
                }`
              : "bg-white h-17 md:h-19 shadow-sm shadow-white"
          }`}
        >
          <div className="flex items-center justify-center w-full mx-4 sm:mx-7 md:mx-11 lg:mx-16">
            <div className="w-full h-full flex items-center">
              <img src={Logo} alt="Logo" className="w-15 " />
              <h2 className="font-semibold text-lg ml-3">PUTRA SERVICE</h2>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none ${
                  isOnTop
                    ? `${isOpen ? "text-black" : "text-white"}`
                    : "text-black"
                } relative`}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
                  {/* Top line */}
                  <span
                    className={`block h-1 w-6 bg-current rounded-full transform transition-all duration-200 ease-in-out ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  {/* Middle line */}
                  <span
                    className={`block h-1 w-6 bg-current rounded-full transform transition-all duration-200 ease-in-out my-1 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  {/* Bottom line */}
                  <span
                    className={`block h-1 w-6 bg-current rounded-full transform transition-all duration-200 ease-in-out ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
            <div className="hidden md:flex w-full h-full gap-8 lg:gap-10 text-sm items-center ml-11 justify-center">
              <NavLink
                to="/"
                onClick={() => window.scrollTo(0, 0)}
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
                onClick={() => window.scrollTo(0, 0)}
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
                onClick={() => window.scrollTo(0, 0)}
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
                    className={`flex flex-col divide-y-[1.5px] shadow-md ${
                      isOnTop ? "divide-white" : "divide-black"
                    }`}
                    id="dropdown"
                  >
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo(0, 0)}
                      className={`py-2.5 px-4  transition-all ${
                        isOnTop
                          ? "hover:bg-black/30"
                          : "bg-[#FFFBFB] hover:bg-gray-100"
                      }`}
                    >
                      Kontak
                    </Link>
                    <Link
                      to="/documentation"
                      onClick={() => window.scrollTo(0, 0)}
                      className={`py-2.5 px-4  transition-all ${
                        isOnTop
                          ? "hover:bg-black/30"
                          : "bg-[#FFFBFB] hover:bg-gray-100"
                      }`}
                    >
                      Dokumentasi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full hidden lg:flex items-center justify-end">
              <a href="https://wa.me/6281333330073"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-[#A30F00] text-white hover:bg-[#730B00] transition-all py-2 px-5 rounded-lg active:bg-[#600000]">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed z-20">
            <div
              className="fixed top-[68px] left-0 w-full bg-white shadow-lg z-20 px-6 py-4 animate-slide-down md:hidden"
            >
              {["", "about", "service", "contact", "documentation"].map(
                (value, index) => (
                  <NavLink
                    key={index}
                    to={`/${value}`}
                    className="block text-gray-800 hover:text-[#A42619] py-2 pt-4 border-b border-gray-200 transform transition-all duration-200 hover:translate-x-1"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {
                      ["Home", "Tentang", "Layanan", "Kontak", "Dokumentasi"][
                        index
                      ]
                    }
                  </NavLink>
                )
              )}
              <div className="pt-4">
                <Link
                  className="block w-full text-center bg-[#A30F00] text-white hover:bg-[#730B00] transition-all py-3 px-5 rounded-lg active:bg-[#600000] transform hover:scale-105 duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Pesan Sekarang
                </Link>
              </div>
            </div>
            <div
              className="fixed z-10 bg-black/40 h-full w-full"
              onClick={() => setIsOpen(false)}
            ></div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import DropDown from "../assets/dropdown.png";
import Logo from "../assets/logo.svg";

function navbar() {
  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };
  return (
    <div className="fixed w-full flex items-center justify-center h-23 from-black/18 to-[#9C9C9C]/18 bg-gradient-to-r text-white font-semibold">
      <div className="flex items-center justify-center w-full mx-22">
        <div className="w-full h-full flex items-center">
          <img src={Logo} alt="Logo" className="w-16 " />
          <h2 className="font-bold text-xl ml-3">PUTRA SERVICE</h2>
        </div>
        <div className="flex w-full h-full gap-8 text-sm items-center ml-11 justify-center ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-[#A42619] border-b-2 relative" : "relative group"
            }
          >
            Home
            <div className="absolute border-b-2 w-0 group-hover:w-full ease-out duration-100 border-red-600 transition-all"></div>
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "border-[#A42619] border-b-2 relative" : "relative group"}>
            Tentang
            <div className="absolute border-b-2 w-0 group-hover:w-full ease-out duration-100 border-red-600 transition-all"></div>
          </NavLink>
          <NavLink to="/service" className={({isActive}) => isActive ? "border-[#A42619] border-b-2 relative" : "relative group"}>
            Layanan
            <div className="absolute border-b-2 w-0 group-hover:w-full ease-out duration-100 border-red-600 transition-all"></div>
          </NavLink>
          <div className="flex relative group" onClick={handleDropdown}>
            <div className="py-4 flex items-center">
              <button>Lainnya</button>
              <img src={DropDown} alt="" className="w-3 ml-2 mt-1" />
            </div>
            <div className="invisible absolute group-hover:visible flex hover:scale-100 transition-all top-12 left-0 px-3 pb-2">
              <div
                className="divide-y-[1.5px] divide-white shadow-md"
                id="dropdown"
              >
                <div className="py-2.5 px-4 bg-black/30 hover:bg-black/50 transition-all">
                  <Link to="/contact">Kontak</Link>
                </div>
                <div className="py-2.5 px-4 bg-black/30 hover:bg-black/50 transition-all">
                  <Link to="/documentation">Dokumentasi</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <Link className="bg-[#A30F00] hover:bg-[#730B00] transition-all py-2 px-5 rounded-lg active:bg-[#600000]">
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

export default navbar;

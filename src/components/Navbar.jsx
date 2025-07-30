import { Link } from "react-router-dom";
import DropDown from "../assets/dropdown.png";
import Logo from "../assets/logo.svg";

function navbar() {
    const handleDropdown = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("hidden");
    };
  return (
    <div className="fixed w-full flex h-23 from-black/18 to-[#9C9C9C]/18 bg-gradient-to-r items-center justify-center text-white font-semibold">
      <div className="w-full h-full flex items-center ml-15">
        <img src={Logo} alt="Logo" className="w-16 " />
        <h2 className="font-bold text-xl ml-3">PUTRA SERVICE</h2>
      </div>
      <div className="flex w-full h-full gap-8 text-md items-center justify-center">
        <Link to="/">Home</Link>
        <Link to="/about">Tentang</Link>
        <Link to="/service">Layanan</Link>
        <div className="flex relative group" onClick={handleDropdown}>
          <div className="py-3 flex items-center">
            <button>Lainnya</button>
            <img src={DropDown} alt="" className="w-3 ml-2 mt-1" />
          </div>
          <div
            className="hidden absolute group-hover:flex hover:flex flex-col  
            divide-y-[1.5px] divide-white top-12 left-0 shadow-md" id="dropdown"
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
      <div className="w-full h-full flex items-center justify-end mr-15">
        <Link className="bg-[#A30F00] hover:bg-[#730B00] transition-all py-2 px-5 rounded-lg">Pesan Sekarang</Link>
      </div>
    </div>
  );
}

export default navbar;

import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import X from "../assets/x.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col min-h-113 text-white bg-[#0A0A0A]">
      <div className="flex w-full pl-16 pr-56 pt-25 pb-10">
        <div className="w-49 mr-35">
          <img src={Logo} alt="logo" className="w-35" />
          <p className="text-[0.75rem] leading-[0.885rem] pt-3.5 text-[#DBDBDB]">
            Putra Service adalah jasa service AC berpengalaman dengan teknisi
            ahli dan layanan bergaransi. Kami mengutamakan profesionalisme,
            tanggung jawab, dan kepuasan pelanggan.
          </p>
        </div>
        <div className="flex flex-1 pt-3.5">
          <nav className="flex flex-1 gap-14">
            <div>
              <h2 className="font-bold text-[1.35rem] leading-7 mb-2.5">Navigasi</h2>
              <ul className="gap-2 flex flex-col text-[#DBDBDB]">
                <li><Link to="/home" className="">Home</Link></li>
                <li><Link to="/about" className="">Tentang</Link></li>
                <li><Link to="/service" className="">Layanan</Link></li>
                <li><Link to="/documentation" className="">Dokumentasi</Link></li>
                <li><Link to="/contact" className="">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-[1.35rem] leading-7 mb-2.5">Layanan</h2>
              <ul className="gap-2 flex flex-col text-[#DBDBDB]">
                <li><Link to="/" className="">Service AC</Link></li>
                <li><Link to="/" className="">Pembersihan AC</Link></li>
                <li><Link to="/" className="">Penggantian Suku Cadang AC</Link></li>
                <li><Link to="/" className="">Instalasi AC</Link></li>
              </ul>
            </div>
          </nav>
          <div className="w-49">
            <h2 className="font-bold text-[1.35rem] leading-7">Lokasi</h2>
            <address>
              <p className="text-[0.75rem] leading-[0.885rem] pt-3.5 w-60 text-[#DBDBDB]">
                Perumahan Prima Mulia Residen (Blok B3, No 19) , Jalan Nagrak,
                Lebak Muncang, Cikujang, Kec. Gunung Guruh, Kabupaten Sukabumi,
                Jawa Barat 43156
              </p>
            </address>
            <div className="flex w-33.5 mt-4 ml-2">
              <a href="" rel="nofollow" className="mr-4">
                <img src={Facebook} alt="Facebook" srcset="" />
              </a>
              <a href="" rel="nofollow" className="mr-4">
                <img src={Instagram} alt="Instagram" srcset="" />
              </a>
              <a href="" rel="nofollow" className="mr-3.5">
                <img src={X} alt="X" srcset="" />
              </a>
              <a href="" rel="nofollow" className="mr-4">
                <img src={Whatsapp} alt="Whatsapp" srcset="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end flex-1 pb-7 pl-5"><p>© Copyright 2025 <span className="font-semibold">PUTRA SERVICE</span>. All Rights Reserved</p></div>
    </footer>
  );
}

export default Footer;

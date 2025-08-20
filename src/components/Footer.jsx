import Logo from "../assets/Logo/logo.svg";
import Facebook from "../assets/Logo/facebook.svg";
import Instagram from "../assets/Logo/instagram.svg";
import Whatsapp from "../assets/Logo/whatsapp.svg";
import X from "../assets/Logo/x.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative flex flex-col overflow-hidden min-h-[100svh] sm:min-h-140 lg:min-h-113 text-white bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute flex inset-0">
        <div className="absolute w-27 h-57 rotate-[50deg] sm:rotate-[36deg] bg-[#1F1F1F] -top-15 sm:-top-5 lg:top-0 -right-16 sm:-right-14 lg:-right-11"></div>
        <div className="absolute w-29 h-57 rotate-[50deg] sm:rotate-[36deg] bg-[#282828] top-27 sm:top-49 lg:top-54 -right-18 sm:-right-16 lg:-right-14"></div>
        <div className="absolute w-25 h-65 rotate-[-50deg] sm:rotate-[-36deg] bg-[#282828] -bottom-38 sm:-bottom-13 sm:-left-18"></div>
      </div>

      {/* Foreground */}
      <div className="relative flex w-full max-w-[1200px] mx-auto pl-6 sm:pl-10 md:pl-13 lg:pl-16 pr-11 sm:pr-40 md:pr-50 lg:pr-50 xl:pr-56 pt-9 sm:pt-12 lg:pt-25 pb-10">
        <div className="flex flex-row flex-1 pt-3.5 items-center lg:items-start">
          <div className="w-49 hidden sm:block">
            <img src={Logo} alt="logo" className="w-35" />
            <p className="text-[0.75rem] leading-[0.885rem] pt-3.5 text-[#DBDBDB]">
              Putra Service adalah jasa service AC berpengalaman dengan teknisi
              ahli dan layanan bergaransi. Kami mengutamakan profesionalisme,
              tanggung jawab, dan kepuasan pelanggan.
            </p>
          </div>

          <div className="flex flex-col sm:pl-19 flex-1 gap-9 lg:pl-3">
            <div className="max-w-90 sm:w-49 sm:hidden">
            <img src={Logo} alt="logo" className="w-45" />
            <p className="text-base sm:text-[0.75rem] leading-5 sm:leading-[0.885rem] pt-3.5 text-[#DBDBDB]">
              Putra Service adalah jasa service AC berpengalaman dengan teknisi
              ahli dan layanan bergaransi. Kami mengutamakan profesionalisme,
              tanggung jawab, dan kepuasan pelanggan.
            </p>
          </div>
            <nav className="flex lg:justify-center flex-1 gap-14">
              <div className="">
                <h2 className="font-bold text-[1.35rem] leading-7 mb-2.5">
                  Navigasi
                </h2>
                <ul className="gap-1 flex flex-col text-[#DBDBDB]">
                  <li>
                    <Link to="/home" className="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="">
                      Tentang
                    </Link>
                  </li>
                  <li>
                    <Link to="/service" className="">
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation" className="">
                      Dokumentasi
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <h2 className="font-bold text-[1.35rem] leading-7 mb-2.5">
                  Layanan
                </h2>
                <ul className="gap-1 flex flex-col text-[#DBDBDB]">
                  <li>
                    <Link to="/" className="">
                      Service AC
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Pembersihan AC
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-nowrap">
                      Bongkar & Pasang AC
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className="hidden md:block lg:hidden">
              <div className="">
                <h2 className="font-bold text-[1.35rem] leading-7 mb-2.5">
                  Layanan
                </h2>
                <ul className="gap-1 flex flex-col text-[#DBDBDB]">
                  <li>
                    <Link to="/" className="">
                      Service AC
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="">
                      Pembersihan AC
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-nowrap">
                      Bongkar & Pasang AC
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="md:hidden max-w-90 sm:w-50 lg:ml-10">
            <h2 className="font-bold text-[1.35rem] leading-7">Lokasi</h2>
            <address>
              <p className="text-base sm:text-[0.75rem] leading-5 sm:leading-[0.885rem] pt-3.5 text-[#DBDBDB]">
                Perumahan Prima Mulia Residen (Blok B3, No 19) , Jalan Nagrak,
                Lebak Muncang, Cikujang, Kec. Gunung Guruh, Kabupaten Sukabumi,
                Jawa Barat 43156
              </p>
            </address>
            <div className="flex w-39 mt-4 ml-2">
              <a href="" rel="nofollow" className="mr-4">
                <img src={Facebook} alt="Facebook" srcSet="" />
              </a>
              <a href="" rel="nofollow" className="mr-4">
                <img src={Instagram} alt="Instagram" srcSet="" />
              </a>
              <a href="" rel="nofollow" className="mr-3.5">
                <img src={X} alt="X" srcSet="" />
              </a>
              <a href="" rel="nofollow" className="mr-4">
                <img src={Whatsapp} alt="Whatsapp" srcSet="" />
              </a>
            </div>
          </div>
          </div>

          <div className="hidden md:block w-49 lg:ml-10">
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
                <img src={Facebook} alt="Facebook" srcSet="" />
              </a>
              <a href="" rel="nofollow" className="mr-4">
                <img src={Instagram} alt="Instagram" srcSet="" />
              </a>
              <a href="" rel="nofollow" className="mr-3.5">
                <img src={X} alt="X" srcSet="" />
              </a>
              <a href="" rel="nofollow" className="mr-4">
                <img src={Whatsapp} alt="Whatsapp" srcSet="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-center sm:text-start relative items-end justify-center flex-1 font-inter pt-7 sm:pt-0 pb-16 sm:pb-7 px-4 sm:pl-5">
        <p>
          © Copyright 2025 <span className="font-semibold">PUTRA SERVICE</span>.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

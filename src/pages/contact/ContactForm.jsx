import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import email from "../../assets/Contact/email.webp";
import telephone from "../../assets/Contact/telephone.webp";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
  // 🔹 State untuk input form
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  // 🔹 Ref untuk animasi
  const formRef = useRef(null);

  // 🔹 GSAP animasi fade up
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%", // animasi mulai saat 85% elemen masuk viewport
        },
      }
    );
  }, []);

  // 🔹 Fungsi kirim ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const nomor = "6281333330073";
    const text = `Halo, nama saya ${nama}.%0A${pesan}`;
    const url = `https://wa.me/${nomor}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative lg:h-[500px] md:h-[800px] h-[800px]">
      <div className="absolute h-full lg:w-[942px] sm:w-[600px] w-full bottom-0 transform -translate-x-1/2 left-1/2 right-1/2">
        <div className="max-sm:max-w-85 mx-auto -mt-20 z-20 relative">
          <div
            ref={formRef} // ✅ target animasi GSAP
            className="bg-white shadow-xl rounded flex"
          >
            {/* 🔹 Bagian Form */}
            <div className="p-8 sm:p-10 max-sm:w-full">
              <h2 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold">
                Kirimkan pertanyaan mu
              </h2>
              <br />
              <form className="flex flex-col lg:w-110 sm:w-130 w-full" onSubmit={handleSubmit}>
                <div className="mt-1">
                  <label>Nama</label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)} // update state
                    onMouseOver={(e) =>
                      e.target.setCustomValidity(
                        "Harap isi data ini sebelum submit!"
                      )
                    }
                    onMouseOut={(e) => e.target.setCustomValidity("")}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Harap isi data ini!")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    className="shadow placeholder:text-[12px] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none mt-1 focus:shadow-outline"
                    placeholder="Masukan Nama Mu"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label>Pesan</label>
                  <div className="w-full h-30 mt-1 border-1 border-black rounded-[10px] flex flex-wrap items-start">
                    <textarea
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)} // update state
                      onMouseOver={(e) =>
                        e.target.setCustomValidity(
                          "Harap isi data ini sebelum submit!"
                        )
                      }
                      onMouseOut={(e) => e.target.setCustomValidity("")}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Pesan tidak boleh kosong!")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      className="w-full h-[75%] p-3 outline-none resize-none text-[15px] placeholder:text-[12px]"
                      placeholder="Tulis pesan"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-white cursor-pointer font-medium text-red-700 mt-5 border-2 border-red-700 py-2 rounded-lg hover:bg-red-800 hover:text-white sm:ml-75 transition"
                >
                  Kirim pesan
                </button>
              </form>
            </div>

            {/* 🔹 Bagian Informasi Kontak (Desktop) */}
            <div className="hidden lg:block bg-[#A20000] min-h-full w-120 ">
              <div className="mx-10 my-10 ">
                <h2 className="text-2xl font-semibold text-white">
                  Informasi Kontak
                </h2>
                <p className="mb-4 text-[#D3D3D3]">
                  Berikut ini adalah kontak kami yang bisa dihubungi
                </p>
                <hr className="border-white mb-4 " />
                <br />
                <div className="">
                  <div className="flex my-2 items-center">
                    <img src={telephone} alt="" className="w-8 h-8 mr-2" />
                    <p className="mb-1 text-white ">
                      <a href="https://wa.me/6281333330073">
                        0813 - 3333 - 0073
                      </a>
                    </p>
                  </div>
                  <div className="flex my-2 items-center">
                    <img src={email} alt="" className="w-7 pl-1 mr-3" />
                    <p className="mb-1 text-white">
                      <a
                        href="mailto:pianseptiana@yahoo.com"
                      >
                        pianseptiana@yahoo.com
                      </a>
                    </p>
                  </div>
                  <div className="flex my-2 items-center gap-2">
                    <FaInstagram className="text-white size-8"/>
                    <p>
                      <a href="https://www.instagram.com/putraservice_/" rel="nofollow" className="  text-white">
                        @putraservice_
                      </a>
                    </p>
                  </div>
                  <div className="flex my-2 items-center gap-2">
                    <FaFacebookF className="text-white size-7"/>
                    <p>
                      <a href="https://www.facebook.com/pisnseptiana/" rel="nofollow" className="  text-white">
                        @pisnseptiana
                      </a>
                    </p>
                  </div>
                  <div className="flex my-2 items-center gap-2">
                    <FaXTwitter className="text-white size-7"/>
                    <p>
                      <a href="https://x.com/putra_service73" rel="nofollow" className="  text-white">
                        @putra_service73
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Versi Mobile Informasi Kontak */}
          <div className="lg:hidden block bg-[#A20000] h-fit lg:w-140 rounded-b-lg shadow-xl">
            <div className="mx-10 py-10">
              <h2 className="text-3xl font-semibold text-white text-center mb-2">
                Informasi Kontak
              </h2>
              <p className="mb-4 text-[#D3D3D3] text-center text-lg">
                Berikut ini adalah kontak kami yang bisa dihubungi
              </p>
              <hr className="border-white mb-2 " />
              <br />
              <div className="flex my-2 items-center">
                <img src={telephone} alt="" className="w-8 h-8 mr-2" />
                <p className="mb-1 text-white ">
                  <a href="https://wa.me/6281333330073">
                    0813 - 3333 - 0073
                  </a>
                </p>
              </div>
              <div className="flex my-2 items-center">
                <img src={email} alt="" className="w-7 pl-1 mr-3" />
                <p className="mb-1 text-white">
                  <a
                    href="mailto:pianseptiana@yahoo.com"
                  >
                    admin@putraservice.com
                  </a>
                </p>
              </div>
              <div className="flex my-2 items-center gap-2">
                <FaInstagram className="text-white size-8"/>
                <p>
                  <a href="https://www.instagram.com/putraservice_/" rel="nofollow" className="  text-white">
                    @putraservice_
                  </a>
                </p>
              </div>
              <div className="flex my-2 items-center gap-2">
                <FaFacebookF className="text-white size-7"/>
                <p>
                  <a href="https://www.facebook.com/pisnseptiana/" rel="nofollow" className="  text-white">
                    @pisnseptiana
                  </a>
                </p>
              </div>
              <div className="flex my-2 items-center gap-2">
                <FaXTwitter className="text-white size-7"/>
                <p>
                  <a href="https://x.com/putra_service73" rel="nofollow" className="  text-white">
                    @putra_service73
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

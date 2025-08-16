import React, { useState } from 'react';

import baba from "../../assets/Contact/ant-design_global-outlined.png";
import bobo from "../../assets/Contact/ic_round-email.png";
import baibai from "../../assets/Contact/mdi_telephone.png";

function ContactForm() {
  // 🔹 Tambahan state untuk input form
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  // 🔹 Fungsi kirim ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const nomor = "6283177081078"; // nomor tujuan
    const text = `Halo, nama saya ${nama}.%0A${pesan}`;
    const url = `https://wa.me/${nomor}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative md:h-[500px] sm:h-[800px] h-[800px]">
      <div className="absolute h-full md:w-[942px] sm:w-[600px] w-[600px] bottom-0 transform -translate-x-1/2 left-1/2 right-1/2">
        <div className="max-w-3x1 mx-auto -mt-20 z-20 relative">
          <div className="bg-white shadow-xl rounded flex ml-10">
            
            {/* 🔹 Bagian Form */}
            <div className="p-10">
              <h2 className="sm:text-md text-md md:text-3xl sm:text-2xl text-2xl font-semibold">
                Kirimkan pertanyaan mu
              </h2>
              <br />
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mt-1">
                  <label>Nama</label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)} // update state
                    className="shadow placeholder:text-[12px] appearance-none border rounded md:w-110 sm:w-120 w-120 py-3 px-3 text-gray-700 leading-tight focus:outline-none mt-1 focus:shadow-outline"
                    placeholder="Masukan nama mu"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label>Pesan</label>
                  <div className="w-full h-30 mt-1 border-1 border-black rounded-[10px] flex flex-wrap items-start">
                    <textarea
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)} // update state
                      className="w-full h-[75%] p-3 outline-none resize-none text-[15px]"
                      placeholder="Tulis pesan"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-white font-medium text-red-700 mt-5 border-2 border-red-700 px-6 py-2 rounded-lg hover:bg-red-800 hover:text-white ml-75 transition"
                >
                  Kirim pesan
                </button>
              </form>
            </div>

            {/* 🔹 Bagian Informasi Kontak */}
            <div className="hidden md:block bg-[#A20000] min-h-full w-120 ">
              <div className="mx-10 my-10 ">
                <h2 className="text-2xl font-semibold text-white">
                  Informasi Kontak
                </h2>
                <p className="mb-4 text-[#D3D3D3]">
                  Berikut ini adalah kontak kami yang bisa dihubungi
                </p>
                <hr className="border-white mb-4 " />
                <br />
                <div className="flex my-2">
                  <img src={baibai} alt="" className="w-8 h-8 mr-2" />
                  <p className="mb-2 text-white "> 0813 - 3333 - 0073</p>
                </div>
                <div className="flex my-2">
                  <img src={bobo} alt="" className="w-8 h-8 mr-2" />
                  <p className="mb-2 text-white">
                    <a
                      href="mailto:admin@putraservice.com"
                      className="underline"
                    >
                      admin@putraservice.com
                    </a>
                  </p>
                </div>
                <div className="flex my-2">
                  <img src={baba} alt="" className="w-8 h-8 mr-2" />
                  <p>
                    <a
                      href="https://putraservice.com"
                      className="underline text-white"
                    >
                      https://putraservice.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 🔹 Versi Mobile Informasi Kontak */}
          <div className="md:hidden block bg-[#A20000] h-80 w-140 mx-10 rounded-b-lg shadow-xl">
            <div className="mx-10 py-10">
              <h2 className="text-3xl font-semibold text-white text-center mb-2">
                Informasi Kontak
              </h2>
              <p className="mb-4 text-[#D3D3D3] text-center text-xl">
                Berikut ini adalah kontak kami yang bisa dihubungi
              </p>
              <hr className="border-white mb-2 " />
              <br />
              <div className="flex ">
                <img src={baibai} alt="" className="w-8 h-8 mr-5" />
                <p className="mb-2 text-white font-semibold ">
                  0813 - 3333 - 0073
                </p>
              </div>
              <div className="flex my-2">
                <img src={bobo} alt="" className="w-8 h-8 mr-5" />
                <p className="mb-2 text-white">
                  <a
                    href="mailto:admin@putraservice.com"
                    className="underline text-white font-semibold"
                  >
                    admin@putraservice.com
                  </a>
                </p>
              </div>
              <div className="flex my-2">
                <img src={baba} alt="" className="w-8 h-8 mr-5" />
                <p className="font-inter">
                  <a
                    href="https://putraservice.com"
                    className="text-white font-semibold"
                  >
                    https://putraservice.com
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;

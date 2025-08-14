import React from 'react'

import baba from "../../assets/Contact/ant-design_global-outlined.png";
import bobo from "../../assets/Contact/ic_round-email.png";
import baibai from "../../assets/Contact/mdi_telephone.png";

function ContactForm() {
    return (
        <div className="relative md:h-[500px] sm:h-[800px]">
        <div className="absolute h-full lg:w-[942px] md:w-[500px] sm:w-[600px] bottom-0 transform -translate-x-1/2 left-1/2 right-1/2">
          <div class="max-w-3x1 mx-auto -mt-20 z-20 relative">
            <div class="bg-white shadow-xl rounded flex ml-10 ">
              <div className="p-10">
                <h2 class="sm:text-md md:text-3xl sm:text-2xl font-semibold">Kirimkan pertanyaan mu</h2>
                <br />
                <div className="flex flex-col">
                  <div className="mt-1">
                    <label>Nama</label>
                    <input
                      type="text"
                      class="shadow placeholder:text-[12px] appearance-none border rounded md:w-110 sm:w-120 py-3 px-3 text-gray-700 leading-tight focus:outline-none mt-1 focus:shadow-outline"
                      id="nama"
                      placeholder="Masukan nama mu"
                    />
                  </div>
                  <div className="mt-5">
                    <label>Pesan</label>
                    <div className="w-full h-30 mt-1 border-1 border-black rounded-[10px] flex flex-wrap items-start">
                    <textarea type="text" className="w-full h-[75%] p-3 outline-none resize-none text-[12px]" placeholder="Tulis pesan"></textarea>
                    </div>
                  </div>

                  <button class="bg-white font-medium text-red-700 mt-5 border border-red-700 px-6 py-2 rounded-lg hover:bg-red-800 ml-85">
                    Kirim
                  </button>
                </div>
              </div>
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
                      {" "}
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
                    <p className="mb-2 text-white font-semibold "> 0813 - 3333 - 0073</p>
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
                    <p className='font-inter'>
                      {" "}
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
    )
}

export default ContactForm

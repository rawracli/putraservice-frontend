import photo from "../../assets/Contact/bg.png"
import baba from "../../assets/Contact/ant-design_global-outlined.png"
import bobo from "../../assets/Contact/ic_round-email.png"
import baibai from "../../assets/Contact/mdi_telephone.png"

function Contact() {
  return (
    <div className="contact">
      <div
        className="relative w-full min-h-[430px] bg-no-repeat bg-cover flex items-center bg-gradient-to-b from-[#660708] to-[#BA181B]"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-[#BCBCBC]/40" ></div>
        <div className="absolute h-[381px] w-[942px] bottom-0 transform -translate-x-1/2 left-1/2 right-1/2 translate-y-90">
          <div class="max-w-3x1 mx-auto -mt-20 z-20 relative">
            <div class="bg-white shadow-lg rounded flex ml-10                                                 ">
              <div className="p-10">
                <h2 class="text-2xl font-semibold">Kirimkan pertanyaan mu</h2>
                <br />
                <div className="flex flex-col">
                  <div className="mt-1">
                <label>Nama</label>
                <input
                  type="text"
                  class="shadow placeholder:text-[12px] appearance-none border rounded w-110 py-3 px-3 text-gray-700 leading-tight focus:outline-none mt-1 focus:shadow-outline"
                  id="nama"
                  placeholder="Masukan nama mu"
                />
                </div>
                <div className="mt-5"> 
                <label>Pesan</label>
                <input
                  type="text"
                  class="shadow mt-1 placeholder:text-[12px] appearance-none border rounded w-110 py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pesan"
                  placeholder="Kirim pesan"
                />
                </div>
                
                <button class="bg-white font-medium text-red-700 mt-5 border border-red-700 px-6 py-2 rounded-lg hover:bg-red-800 ml-85">
                  Kirim
                </button>
                </div>
              </div>
              <div className="bg-[#A20000] min-h-full w-120 ">
                <div className="mx-10 my-10 ">
                  <h2 className="text-2xl font-semibold text-white">
                    Informasi Kontak
                  </h2>
                  <p className="mb-4 text-[#D3D3D3]">
                    Berikut ini adalah kontak kami yang bisa dihubungi
                  </p>
                  <hr className="border-white mb-4 " />
                  <br/>
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
          </div>
        </div>
        <h1 className="relative text-white text-[45px] tracking-[0] mx-30 font-medium">
          KONTAK KAMI
        </h1>
        <p>
          <section class="bg-white relative z-10 "></section>
        </p>
      </div>
      <div className="mb-100 "></div>
    </div>
  );
}
export default Contact;
import React from "react";

function CTASection() {
  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Background */}
      <div className="min-h-screen absolute top-0 bottom-0 left-0 right-0">
        <div className="absolute rounded-full border-[#A30F00] border-32 size-[281px] top-15 -left-32"></div>
        <div className="absolute rounded-full border-[#A30F00] border-48 h-[436px] w-[456px] bottom-0 -right-79.5"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
        <div className="flex flex-col h-full">
          <h2 className="text-[#A20000] font-bold text-[4rem] leading-29 tracking-[0.014em]">
            PUTRA SERVICE
          </h2>
          <h4 className="italic text-2xl font-poppins tracking-[0.013em]">
            Siap Melayani Pelanggan Dengan Sepenuh Hati
          </h4>
        </div>

        {/* Tombol CTA */}
        <div className="h-full mt-12 flex items-center justify-center">
          <a
            href="https://wa.me/6281333330073" // ganti dengan nomor admin
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-[#A4161A] font-semibold hover:bg-[#A30F00] active:bg-[#730B00] hover:text-white border-2 border-[#A4161A] transition-all py-3 px-8 rounded-lg"
          >
            Pesan sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTASection;

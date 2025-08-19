import React from "react";

function CTASection() {
  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Background */}
      <div className="min-h-screen absolute top-0 bottom-0 left-0 right-0">
        <div className="absolute rounded-full border-[#A30F00] border-32 size-[281px] -top-30 -left-28 md:top-15 md:-left-32"></div>
        <div className="absolute rounded-full border-[#A30F00] border-33 md:border-48 size-[300px] md:size-[400px] lg:h-[436px] lg:w-[456px] -bottom-30 -right-30 md:-bottom-34 md:-right-50 lg:bottom-0 lg:-right-79.5"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-2">
        <div className=" flex flex-col h-full ">
          <h2 className="text-[#A20000] font-bold text-[clamp(2.45rem,6vw,4rem)] pb-2 tracking-[0.014em]">
            PUTRA SERVICE
          </h2>
          <h4 className="italic text-2xl leading-8 font-poppins tracking-[0.013em]">
            Siap Melayani Pelanggan <br className="md:hidden" />Dengan Sepenuh Hati
          </h4>
        </div>

        {/* Tombol CTA */}
        <div className="h-full mt-12 flex items-center justify-center">
          <a
            href="https://wa.me/6281333330073" // ganti dengan nomor admin
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-[#A4161A] font-semibold hover:bg-[#A30F00] active:bg-[#730B00] hover:text-white border-2 border-[#A4161A] transition-all py-2 px-6 lg:py-3 lg:px-8 rounded-lg"
          >
            Pesan sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTASection;

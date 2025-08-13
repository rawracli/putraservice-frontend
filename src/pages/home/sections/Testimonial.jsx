import React from 'react'
import EmblaCarousel from "../../../components/Home/Testimonial/EmblaCarousel.jsx";
function Testimonial() {
    return (
        <div className="h-fit">
        <div className="h-62 flex flex-col items-center justify-center font-semibold text-center">
          <h3 className="text-[#A4161A] text-[1.3rem] pb-1">Testimoni</h3>
          <h2 className="text-[2.65rem] leading-12">
            Apa Kata Mereka Tentang <br /> Layanan Kami
          </h2>
        </div>
        <EmblaCarousel />
      </div>
    )
}

export default Testimonial

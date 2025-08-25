import React from 'react'

function PricingBanner() {
  return (
    <section className="
      h-[5rem]
      sm:h-[6rem]
      md:h-[8rem]
      lg:h-[10.875rem]
      w-full bg-gradient-to-b from-[#660708] to-[#BA181B] 
      flex items-center justify-center
    ">
      <h2 className="
        text-white 
        font-bold 
        px-2 text-center
        text-[1.1rem]
        sm:text-[1.5rem]
        md:text-[2rem]
        lg:text-5xl
      ">
        HARGA MULAI DARI 75.000 !!
      </h2>
    </section>
  )
}


export default PricingBanner

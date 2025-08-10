import React from 'react'

function Hero({title, backgroundImage, children}) {
    return (
        <div
        className="relative flex items-center w-full bg-no-repeat bg-cover min-h-104"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="z-10 text-white text-[45px] tracking-[0] ml-20 pt-10 font-bold">
          {title}
        </h1>
        {children}
      </div>
    )
}

export default Hero

import React from "react";
import Lanyard from "../../../components/Home/Guarantee/Lanyard";

function Guarantee() {
  return (
    <div className="relative flex min-h-[95vh] items-center justify-center font-semibold overflow-hidden font-inter">
      <h2 className="text-[7.5rem] tracking-[0.016em] pr-3">BERGARANSI</h2>
      <div className="relative flex items-center">
        <h5 className="text-[#A20000] shadow-black drop-shadow-md text-shadow-[5px_2.5px_2px_rgba(0,_0,_0,_0.21)] text-xl pt-25">
          Selama
        </h5>
        <h3 className="absolute leading-70 left-10 -bottom-30 text-[#A20000] text-[21rem] tracking-[-0.07em] text-shadow-[20px_10px_4px_rgba(0,_0,_0,_0.21)]">
          1<sup className="text-[4rem] text-shadow-none -top-57 ">*</sup>
        </h3>
      </div>
      <h4 className="pl-28 pt-15 text-6xl">Bulan</h4>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={34} />
    </div>
  );
}

export default Guarantee;

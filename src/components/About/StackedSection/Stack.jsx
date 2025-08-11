import React from "react";

function Stack({title, description, number}) {
  return (
    <li
      className="sticky top-0"
      style={{
        paddingTop: `calc(var(--index) * var(--cardTopPadding))`,
      }}
    >
      <div
        className="card-body box-border bg-[#F6E6E6] shadow-[0_0_30px_rgba(0,0,0,0.3)] flex transition-all duration-500"
        style={{
          height: `var(--cardHeight)`,
        }}
      >
        <div className="flex-1 px-19 pt-14">
          <h3 className="text-9xl text-[#E5BBBA] pb-7">0{number}</h3>
          <h3 className="font-semibold text-[#660708] text-[2.6rem] pb-7 leading-11">{title}</h3>
          <p className="font-poppins text-[#A20000]">
            {description}
          </p>
        </div>
        <div className="basis-[33.2%] bg-yellow-50"></div>
      </div>
    </li>
  );
}

export default Stack;

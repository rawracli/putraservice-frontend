import React from "react";

function Transition() {
  const colors = [
    "#A20000",
    "#B3181B",
    "#C81C1F",
    "#F53B3F",
    "#FFADAE",
    "#FFDCDC",
  ];
  return (
    <div className="relative flex flex-col items-center overflow-hidden isolate h-104">
      {colors.map((color, index) => {
        const top = index === 0 ? 0 : 14 + (index - 1) * 15
        const z = 50 - index * 10;
        return (
          <div
            className={`w-[130%] absolute h-30 top-14 rounded-b-[200rem_30rem]`}
            style={{zIndex: z, top: `${0.25 * top}rem`,  backgroundColor: color,}}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}

export default Transition;

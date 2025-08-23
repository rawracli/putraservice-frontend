import React, { useMemo } from "react";

function Loading() {
  const heights = useMemo(() => {
    return Array.from({ length: 8 }).map(() =>
      Math.floor(Math.random() * (400 - 300 + 1)) + 200
    );
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
      <div className="flex gap-2.5">
       {Array.from({ length: 4 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col w-full gap-1.5">
            {Array.from({ length: 2 }).map((_, rowIndex) => {
              const index = colIndex * 2 + rowIndex;
              return (
                <div
                  key={rowIndex}
                  className="bg-gray-400 w-full rounded-4xl animate-pulse"
                  style={{
                    height: heights[index] ? `${heights[index]}px` : "300px",
                  }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;

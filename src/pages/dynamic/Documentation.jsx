import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "../../components/Masonry/Masonry";
import bgImage from "../../assets/Pict-Documentation/background-1.jpg";

function Documentation() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/docs`)
      .then((response) => {
        const data = response.data.map((doc) => ({
          id: doc.id.toString(),
          img: `${import.meta.env.VITE_API_URL_IMAGE}/storage/${doc.image}`,
          url: "#",
          height: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
        }));
        setItems(data);
      })
      .catch((error) => console.error("Error fetching docs:", error));
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      <div
        className="relative aspect-[16/5] bg-black/60 bg-no-repeat bg-cover flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-white text-[48px] mx-30 max-md:mx-4 max-md:text-[38.5px] font-semibold">
          DOKUMENTASI
        </h1>
      </div>

      <div className="relative bg-white flex justify-center items-center flex-col mx-40">
        <div className="my-10">
          <div className="flex gap-7 flex-wrap justify-center">
            {["Service AC", "Pembersihan AC", "Pengganti suku cadang AC", "Instalasi AC"].map((btn, idx) => (
              <button
                key={idx}
                className="px-6 py-2 outline-1 outline-[#A30F00] rounded-2xl hover:bg-[#A30F00] hover:text-white"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full mt-10 mb-10">
          {items.length > 0 ? (
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          ) : (
            <p className="text-gray-800 text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Documentation;
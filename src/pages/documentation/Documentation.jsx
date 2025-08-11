import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "../../components/Documentation/Masonry";
import bgImage from "../../assets/Documentation/background-1.jpg";
import Hero from "../../components/Hero";

function Documentation() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/docs`);
        const data = response.data.map((doc) => ({
          id: doc.id.toString(),
          img: `${import.meta.env.VITE_API_URL_IMAGE}/storage/${doc.image}`,
          url: "#",
          height: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
        }));
        setItems(data);
      } catch (error) {
        console.error("Error fetching docs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      <Hero title={"DOKUMENTASI"} backgroundImage={bgImage} children={
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-[#BCBCBC]/40"></div>
      }/>

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

        <div className="w-full mt-10 mb-10 flex justify-center items-center">
          {isLoading ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-[#A30F00] rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-700">Loading data...</p>
            </div>
          ) : items.length > 0 ? (
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
            <p className="text-gray-800 text-center">Tidak ada data dokumentasi.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Documentation;
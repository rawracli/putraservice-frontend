import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Masonry from "../../components/Documentation/Masonry";
import bgImage from "../../assets/Documentation/background-1.webp";
import Hero from "../../components/Hero";

const categories = ["serviceAC", "pembersihanAC", "bongkarPasangAC"];
function Documentation() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  // default (index 0)
  const currentCategory = searchParams.get("category") || "serviceAC";
  const currentIndex = categories.indexOf(currentCategory);
  const displayIndex = currentIndex !== -1 ? currentIndex : 0;

  const handleCategoryChange = (category) => {
    setSearchParams({ category });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/docs`
        );
        const data = response.data.map((doc) => ({
          id: doc.id.toString(),
          img: `${import.meta.env.VITE_API_URL_IMAGE}/storage/${doc.image}`,
          category: (doc.category_id - 1).toString(),
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
      <Hero
        title={"DOKUMENTASI"}
        backgroundImage={bgImage}
        backgroundPosition={"center"}
        children={
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-[#BCBCBC]/40"></div>
        }
      />

      <div className="relative bg-white flex justify-center items-center flex-col w-full">
        <div className={`py-10 bg-gradient-to-b from-[#A8A8A8]/50 to-[#FFFFFF]/10 sticky transition-all duration-300 w-full`}>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-7">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer px-6 py-2 text-[0.7rem] min-w-[12rem] sm:text-[0.8rem] md:text-[0.9rem] border-1 border-[#A30F00] rounded-full text-[#A30F00] transition font-semibold hover:bg-[#A30F00] hover:text-white ${
                 currentCategory == category
                    ? "bg-[#730B00] text-white shadow-lg"
                    : "bg-white" 
                }`}
              >
                {category
                  .replace(/(?!^)(?<!A)([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full mt-10 mb-10 flex justify-center items-center px-3 sm:px-9 md:px-12 lg:px-19">
          {isLoading ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-[#A30F00] rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-700">Loading data...</p>
            </div>
          ) : items.length > 0 ? (
            <Masonry
              items={items.filter((item) => item.category == displayIndex)}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={1.05}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          ) : (
            <p className="text-gray-800 text-center">
              Tidak ada data dokumentasi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Documentation;

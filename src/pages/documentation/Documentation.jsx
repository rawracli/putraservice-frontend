import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Masonry from "../../components/Documentation/Masonry";
import bgImage from "../../assets/Documentation/background-1.webp";
import Hero from "../../components/Hero";
import Loading from "../../components/Documentation/Loading";

function Documentation() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [docsLimit, setDocsLimit] = useState(30); // di-set setelah response dari API
  const [message, setMessage] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  // state tambahan untuk ID kategori yang siap
  const [currentCategoryId, setCurrentCategoryId] = useState(undefined);

  // ambil categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );
        setCategories(res.data || []);

        // set currentCategoryId jika ada category di URL
        const found = res.data.find((c) => c.name === currentCategory);
        setCurrentCategoryId(found ? found.id : undefined);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // update currentCategoryId jika user ganti kategori
  useEffect(() => {
    const found = categories.find((c) => c.name === currentCategory);
    setCurrentCategoryId(found ? found.id : undefined);
  }, [currentCategory, categories]);

  // loadDocs tidak tergantung items/hasMore/isLoading di dependency
  const loadDocs = useCallback(
    async (opts = {}) => {
      if (!hasMore && !opts.force) return;
      if (isLoading) return;
      if (currentCategoryId === undefined && currentCategory !== "") return; // tunggu kategori siap

      setIsLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/docs`, {
          params: {
            category_id: currentCategoryId,
            offset: opts.reset ? 0 : offset,
          },
        });

        const resData = res.data || {};
        const newDocs = (resData.data || []).map((doc) => ({
          id: doc.id.toString(),
          img: `${import.meta.env.VITE_API_URL_IMAGE}/storage/${doc.image}`,
          category: doc.category_id ? doc.category_id.toString() : null,
          title: doc.title,
          description: doc.description,
          url: "#",
          height: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
        }));

        const limitFromServer = resData.limit ?? docsLimit;
        const totalFromServer = resData.total ?? 0;

        setDocsLimit(limitFromServer);

        if (opts.reset) {
          setItems(newDocs);
          setOffset(limitFromServer);
        } else {
          setItems((prev) => [...prev, ...newDocs]);
          setOffset((prev) => prev + limitFromServer);
        }

        const prevCount = opts.reset ? 0 : offset;
        const loadedCount = prevCount + newDocs.length;

        setHasMore(
          !(newDocs.length < limitFromServer || loadedCount >= totalFromServer)
        );

      } catch (err) {
        console.error("Error loading docs:", err);
      } finally {
        setMessage("");
        setIsLoading(false);
      }
    },
    [currentCategoryId, offset, hasMore, docsLimit]
  );

  // trigger loadDocs saat kategori siap / berubah
  useEffect(() => {
    setItems([]);
    setOffset(0);
    setHasMore(true);
    loadDocs({ reset: true, force: true });
    console.log("loadDocs triggered")
  }, [currentCategoryId]);

  // infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 600
      ) {
        loadDocs();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadDocs, isLoading, hasMore]);

  const handleCategoryChange = (categoryName) => {
    setSearchParams(categoryName ? { category: categoryName } : {});
  };

  const clickOnLoad = () => {
    setMessage("Tunggu, content sedang Loading...")
  }

  return (
    <div className="mx-auto">
      <Hero
        title={"DOKUMENTASI"}
        backgroundImage={bgImage}
        backgroundPosition={"60% center"}
        children={
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#BCBCBC]/40"></div>
        }
      />

      <div className="relative bg-white flex justify-center items-center flex-col w-full">
        <div className="flex justify-center py-10 bg-gradient-to-b from-[#A8A8A8]/50 to-[#FFFFFF]/10 sticky transition-all duration-300 w-full">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-7">
            <button
              key="all"
              onClick={!isLoading ? (() => handleCategoryChange("")) : (clickOnLoad)}
              className={`px-6 py-2 text-[0.7rem] min-w-[12rem] sm:text-[0.8rem] md:text-[0.9rem] border-1 border-[#A30F00] rounded-full text-[#A30F00] transition font-semibold ${
                currentCategory === ""
                  ? "bg-[#730B00] text-white shadow-lg"
                  : "bg-white"
              } ${isLoading ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#A30F00] hover:text-white"}`}
            >
              Semua
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={!isLoading ? (() => handleCategoryChange(category.name)) : (clickOnLoad)}
                className={`px-6 py-2 text-[0.7rem] min-w-[12rem] sm:text-[0.8rem] md:text-[0.9rem] border-1 border-[#A30F00] rounded-full text-[#A30F00] transition font-semibold ${
                  currentCategory === category.name
                    ? "bg-[#730B00] text-white shadow-lg"
                    : "bg-white"
                } ${isLoading ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#A30F00] hover:text-white"}`}
              >
                {category.name.split("-").map(word => word.toLowerCase() === "ac" ? "AC" : word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
          </div>
          <p className="absolute bottom-0 max-sm:text-sm">{message}</p>
        </div>
        
        <div className="w-full max-w-[1600px] mt-10 mb-10 px-3 sm:px-9 md:px-12 lg:px-19">
          <div className="w-full flex justify-center items-center">
            {items.length > 0 ? (
              <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={1.05}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            ) : isLoading ? (
              <Loading/>
            ) : null}
          </div>

          {/* indikator loading batch berikutnya */}
          {isLoading && items.length > 0 && (
            <Loading/>
          )}
          {/* jika habis */}
          {!hasMore && items.length > 0 && (
            <div className="py-10 text-center text-gray-500">
              Semua dokumen telah dimuat.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Documentation;

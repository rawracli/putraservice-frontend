// import { useState } from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import Banner from "./assets/banner.jpg";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <div
        className="min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex pt-25 pl-20 pr-16 min-h-screen">
          <div className="w-full h-full flex flex-col pt-19 text-white">
            <h1 className="text-7xl font-semibold tracking-wider leading-21">
              SERVICE AC SUKABUMI
            </h1>
            <p className="pt-3 leading-5">
              Kami adalah tim profesional yang menyediakan jasa service AC untuk
              memenuhi kebutuhan pendinginan udara di rumah, kantor, dan tempat
              lainnya. Dengan pengalaman dan keahlian yang luas, kami menawarkan
              layanan service AC yang cepat, efektif, dan harga yang kompetitif.
            </p>
            <Link
              className="w-fit bg-[#A30F00] hover:bg-[#730B00] transition-all py-2.5 px-13 rounded-lg mt-9"
              to="/service"
            >
              Layanan
            </Link>
          </div>
          <div className="w-full justify-end flex items-end mb-12">
            <Review starsStyle={{ height: "30px", width: "32px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

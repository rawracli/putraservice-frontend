import React from "react";
import pp from "../../../assets/About/pp.webp";
import Photo1 from "../../../assets/About/Photo1.webp";
import Photo2 from "../../../assets/About/Photo2.webp";
import Photo3 from "../../../assets/About/Photo3.webp";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Content() {
  return (
    <section className="py-9 px-5 sm:px-9 xl:p-25 bg-gradient-to-b from-[#660708] to-[#A20000]">
      <div className="flex flex-col md:flex-row items-center min-h-screen lg:gap-13 lg:pl-21 pt-10 overflow-hidden">
        <div className="flex relative gap-4 w-80 lg:w-129 h-109">
          <div className="flex-1 h-fit self-center">
            <img
              src={Photo1}
              alt=""
              className="rounded-2xl w-50 sm:w-65 lg:w-full lg:h-full object-cover"
            />
          </div>
          <div className="absolute left-25 -top-10 lg:left-0 lg:top-0 lg:relative flex flex-col flex-1 gap-4">
            <div className="flex-1 md:w-60 lg:w-full ">
              <img
                src={Photo2}
                alt=""
                className="rounded-2xl size-full object-cover"
              />
            </div>
            <div className="hidden lg:block flex-1">
              <img
                src={Photo3}
                alt=""
                className="rounded-2xl size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:self-start lg:self-center md:pr-2 lg:pt-0 xl:pr-5 text-white">
          <h2 className="font-semibold text-[30px] pt-0 sm:pt-12 pb-6 md:pt-18 lg:pt-0 md:pb-0 md:text-[45px] md:pl-14 lg:pl-0 text-center md:text-start">Sejarah Kami</h2>
          <p className="md:text-balance text-[#D6D6D6] lg:pt-2 leading-loose md:leading-normal px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="w-full self-center max-w-100 h-60 py-9 px-10 md:hidden">
              <img
                src={Photo3}
                alt=""
                className="rounded-2xl size-full object-cover"
              />
            </div>
        </div>
      </div>

      <div className="min-h-[80svh]">
        <div className="flex flex-col-reverse md:flex-row gap-2 lg:gap-10 h-full lg:pl-21 pt-10">
          <div className="flex-1 md:pr-5 text-white">
            <h2 className="font-semibold hidden md:block text-[30px] lg:text-[45px] pt-6">
              Pendiri Putra Service
            </h2>
            <p className="md:text-balance text-[#D6D6D6] pt-9 lg:pt-2 leading-loose md:leading-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start mr-2 lg:mr-10 xl:mr-20">
          <div className="h-full md:w-82 flex items-center flex-col bg-[#660708] rounded-3xl px-12 py-10">
            {/* <div className="bg-white rounded-full h-59 w-52"></div> */}
            <img src={pp} alt="" className="max-h-59" />
            <div className="flex flex-col items-center flex-1 gap-2 pt-4">
              <h3 className="text-2 text-[#FF0005]">Asep Pian Septiana</h3>
              <h3 className="px-2 border-b-2 text-white font-bold border-[#BCBCBC]">
                Owner
              </h3>
              <div className="flex justify-center gap-2 p-3 text-white">
                <FaInstagram />
                <FaFacebookF />
                <FaXTwitter />
              </div>
            </div>
          </div>
          </div>

          <h2 className="text-white py-10 text-center md:hidden font-semibold text-[30px] lg:text-[45px] pt-6">
              Pendiri Putra Service
            </h2>
        </div>
      </div>
    </section>
  );
}

export default Content;

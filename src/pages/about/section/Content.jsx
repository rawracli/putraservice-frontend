import React from 'react'
import pp from "../../../assets/About/pp.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Content() {
    return (
        <div className="p-25 bg-gradient-to-b from-[#660708] to-[#A20000]">
        <div className="flex items-center min-h-screen">
          <div className="flex h-109 gap-13 pl-21">
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 w-129">
              <div className="row-span-2 bg-red-600"></div>
              <div className="bg-blue-600"></div>
              <div className="bg-yellow-600"></div>
            </div>
            <div className="flex-1 pr-5 text-white">
              <h2 className="font-semibold text-[45px] pt-6">Sejarah Kami</h2>
              <p className="text-balance text-[#D6D6D6] pt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-[80vh]">
          <div className="flex gap-10 h-109 pl-41">
            <div className="flex-1 pr-5 text-white">
              <h2 className="font-semibold text-[45px] pt-6">
                Pendiri Putra Service
              </h2>
              <p className="text-balance text-[#D6D6D6] pt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="h-full w-82 mr-20 flex items-center flex-col bg-[#660708] rounded-3xl px-12 py-10">
              {/* <div className="bg-white rounded-full h-59 w-52"></div> */}
              <img src={pp} alt="" className="h-59" />
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
        </div>
      </div>
    )
}

export default Content

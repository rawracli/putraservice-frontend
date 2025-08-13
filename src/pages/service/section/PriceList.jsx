import React from "react";
import asterisk from "../../../assets/Logo/asterisk.svg";
import DropDown from "../../../components/DropDown";

function PriceList({ listTable, name }) {
  return (
    <div className="mb-8 md:mb-14 mx-4 md:mx-8 lg:mx-16 xl:mx-40 bg-white">
      <h2 className="text-center font-semibold text-[clamp(2rem,4vh+1rem,2.8rem)] leading-[calc(2/2.8)] pt-3 pb-5">
        Daftar Harga
      </h2>
      <div className="w-full sm:w-2/3 lg:w-1/2 ml-2 mb-5">
        <p className="font-bold text-sm">Catatan :</p>
        {Array.from([
          "Harga Sewaktu-Waktu Bisa Berubah Sesuai Kondisi Di Lapangan/Hasil Survei Dan Harga Spare Part Dari Pabrik",
          "Kejujuran Kunci Utama kami",
        ]).map((value, index) => (
          <p
            className="flex font-semibold gap-2 text-[#5B5B5B] text-xs"
            key={index}
          >
            <img src={asterisk} alt="*" className="size-4" />
            {value}
          </p>
        ))}
      </div>
      <div className="space-y-1">
        {listTable.map((value, index) => (
          <DropDown
            key={index}
            name={name}
            open={index === 0}
            styleTitle={{
              backgroundColor: "#660708",
              paddingLeft: window.innerWidth < 768 ? "20px" : "50px",
            }}
            styleContent={{ backgroundColor: "#000000", color: "#FFFFFF" }}
            title={value.title} 
            content={
              <div className="w-full">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full ">
                    <thead className="font-semibold text-sm md:text-lg lg:text-[1.3rem]">
                      <tr className="border-b border-gray-700">
                        {value.table.thead.map((header, idx) => (
                          <th key={idx} className="p-2 md:p-3 text-left whitespace-nowrap">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm lg:text-lg">
                      {value.table.tbody.map((row, rowIdx) => (
                        <tr key={rowIdx} className="border-b border-gray-800">
                          {row.map((item, itemIdx) => (
                            <td key={itemIdx} className="p-2 md:p-3 whitespace-nowrap">
                              {item}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default PriceList;

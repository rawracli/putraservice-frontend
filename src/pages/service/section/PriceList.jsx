import React from "react";
import asterisk from "../../../assets/Logo/asterisk.svg";
import DropDown from "../../../components/DropDown";

function PriceList({ listTable }) {
  return (
    <div className="mb-14 mx-40 bg-white">
      <h2 className="text-center font-semibold text-[2.8rem] leading-[calc(2/2.8)] pt-3 pb-5">
        Daftar Harga
      </h2>
      <div className="w-1/2 ml-2 mb-5">
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
      <div>
        {listTable.map((value) => (
          <DropDown
            styleTitle={{
              backgroundColor: "#660708",
              fontSize: "1.2rem",
              paddingLeft: "50px",
            }}
            name={"price list"}
            styleContent={{ backgroundColor: "#000000", color: "#FFFFFF" }}
            title={value.title}
            open={"false"}
            content={
              <div className="px-7 pb-2">
                <table className="w-full">
                  <thead className="text-[1.3rem] font-semibold [&_th]:p-2">
                    <tr>
                      <th></th>
                      {value.table.thead.map((value) => (
                        <th>{value}</th>
                      ))}
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="font-inter [&_td]:p-2 [&_td]:text-lg">
                    {value.table.tbody.map((row) => (
                      <tr>
                        <td></td>
                        {row.map((item) => (
                          <td>{item}</td>
                        ))}
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default PriceList;

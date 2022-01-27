import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getPelajaran } from "../../redux/actions/pelajaran";
import { useSelector, useDispatch } from "react-redux";
import ScrollToTop from "../../utils/scrollTop";

const PackageDetail = (props) => {
  const idPaket = window.location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const pelajaranData = useSelector((state) =>
    state.pelajaran.data.filter((item) => item.idMenu._id === idPaket)
  );

  React.useEffect(() => {
    dispatch(getPelajaran());
  }, []);

  //const [pelajaran, setPelajaran] = useState([]);
  const [idJenis, setIdJenis] = useState([]);
  const [jenisPelajaran, setJenisPelajaran] = useState([]);

  //console.log("ada", apiUrl + "menuProo");

  const fetchJenis = async (id) => {
    setJenisPelajaran([]);
    try {
      await axios.get("https://server.proo.co.id/api/pelajaran").then((res) => {
        setJenisPelajaran(res.data.filter((i) => i.nama === id));
      });
    } catch (err) {
      console.log(`err`, err);
    }
  };

  const defaultJenis = async () => {
    try {
      await axios.get("https://server.proo.co.id/api/pelajaran").then((res) => {
        setJenisPelajaran(res.data);
      });
    } catch (err) {
      console.log(`err`, err);
    }
  };

  console.log("idPaket", idPaket);
  console.log(`idJenis`, idJenis);
  console.log(`jenisPelajaran`, jenisPelajaran);

  function shorten(text, max) {
    return text && text.length > max
      ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
      : text;
  }

  return (
    <div className="mt-10 mb-5 md:container items-center" id="paket">
      <div className="headerku">
        <div className="text-center">
          <p className="text-2xl font-extrabold">Pilih Jenis Pembelajaran</p>

          <center>
            <div className="menu-pelajaran mt-5  d-flex justify-content-evenly px-10 font-bold bg-slate-100 shadow-md py-3 rounded-md w-auto md:w-5/6">
              {/* <button
                className="hover:rounded-md hover:bg-green-500 px-5 py-2 hover:text-white font-bold"
                onClick={() => {
                  setIdJenis("All");
                }}
              >
                All
              </button> */}
              {pelajaranData.length === 0 ? (
                <div className="loader"></div>
              ) : (
                pelajaranData.map((item) => (
                  <button
                    key={item._id}
                    className="hover:rounded-md hover:bg-green-500 px-5 py-2 hover:text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-500 focus:bg-green-500 focus:ring-green-500 focus:text-white focus:rounded-md md:mx-5 "
                    onClick={() => {
                      //alert(item.idMenu._id);
                      fetchJenis(item.nama);
                    }}
                  >
                    {item.nama}
                  </button>
                ))
              )}

              {/*<button className="text-gray-700 font-bold">
                Bahasa Mandarin
              </button>
              <button className="text-gray-700 font-bold">
                Bahasa Inggris
              </button>{" "}
              */}
            </div>
          </center>
        </div>
      </div>
      <div className="card-body md:mt-10 mt-5 text-white">
        {/*  className="flex xl:flex-row md:flex-row flex-col items-center md:justify-items-evenly mx-auto xl:justify-evenly md:justify-evenly " */}
        <div className="row justify-evenly container mx-auto">
          {jenisPelajaran.length === 0 ? (
            <div className="bg-orange-300 px-5 py-8 rounded-lg text-center mx-auto">
              <center>
                <i className="fas fa-exclamation-circle fa-2xl mb-8"></i>
              </center>
              Silahkan Pilih Pelajaran
            </div>
          ) : (
            jenisPelajaran.map((jenis) => (
              <>
                {jenis.subPelajaran.map((sub) =>
                  sub.paket.map((paket) => (
                    <div className="max-w-xs flex flex-col justify-items-center mb-5 bg-gradient-to-b from-yellow-200 via-orange-300 to-orange-400 rounded-md shadow-md pt-5 h-auto">
                      <center className="px-5">
                        <p className="text-3xl font-extrabold title mb-3">
                          {sub.nama}
                        </p>
                        <p className="text-xl font-regular title mb-3 -mt-3 ">
                          ({paket.nama})
                        </p>
                        <hr className="w-25" />
                        <img src="/assets/sit.png" alt="" />
                        <div className="price grid justify-items-center">
                          <div className="">
                            <p className="text-8xl font-extrabold text-green-500">
                              30
                            </p>
                          </div>
                          <div className="currency-tag -mt-24 ml-24">
                            <p className="text-2xl font-extrabold text-white bg-yellow-300 rounded-full pl-1 pr-1">
                              rb
                            </p>
                          </div>
                        </div>
                        <p className="">/pertemuan</p>
                        <hr className="w-25 mt-3" />
                        <div className="desc mt-3 text-white">
                          <p>
                            <strong>{paket.deskripsi}</strong>
                          </p>
                          <strong>{shorten(sub.keterangan, 30)}</strong>
                        </div>
                        <button
                          //onClick={() => detailButton(item._id)}
                          //query={{ id: item._id }}
                          type="button"
                          className="flex text-white mt-5 mb-5 hover:text-white hover:-translate-y-3 items-center justify-center w-1/2 p-3 font-extrabold tracking-wide rounded-md bg-green-400 shadow-md"
                        >
                          Pesan
                        </button>
                      </center>
                    </div>
                  ))
                )}
              </>
            ))
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default PackageDetail;

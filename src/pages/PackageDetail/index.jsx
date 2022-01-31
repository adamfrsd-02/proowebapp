import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { getPelajaran } from "../../redux/actions/pelajaran";
import { useSelector, useDispatch } from "react-redux";
import ScrollToTop from "../../utils/scrollTop";
import getMobileOS from "../../utils/checkOS";
import shorten from "../../utils/shorten";

const PackageDetail = (props) => {
  //const idPaket = window.location.pathname.split("/")[2];
  const location = useLocation();
  const { pelajaran } = location.state;

  //console.log("location.state", pelajaran);

  const dispatch = useDispatch();
  // const pelajaranData = useSelector((state) =>
  //   state.pelajaran.data.filter((item) => item.idMenu._id === idPaket)
  // );

  // React.useEffect(() => {
  //   dispatch(getPelajaran());
  // }, []);

  //const [pelajaran, setPelajaran] = useState([]);
  const [idJenis, setIdJenis] = useState(pelajaran[0].nama);
  const [jenisPelajaran, setJenisPelajaran] = useState(
    pelajaran.filter((i) => i.nama === idJenis)
  );

  //console.log("ada", apiUrl + "menuProo");

  const fetchJenis = async (id) => {
    setIdJenis(id);
    setJenisPelajaran(pelajaran.filter((i) => i.nama === id));
  };

  //console.log("idPaket", idPaket);
  // console.log(`idJenis`, idJenis);
  // console.log(`jenisPelajaran`, jenisPelajaran);

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
              {pelajaran.length === 0 ? (
                <div className="loader"></div>
              ) : (
                pelajaran.map((item) => (
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
            <div className="bg-orange-300 px-5 py-8 rounded-lg text-center mx-auto md:w-1/2">
              <center>
                <i className="fas fa-spinner fa-5x mb-8 fa-spin"></i>
              </center>
              <p className="text-xl font-bold">
                Silahkan Pilih Pelajaran Terlebih Dahulu !
              </p>
            </div>
          ) : (
            jenisPelajaran.map((jenis) => (
              <>
                {jenis.subPelajaran.map((sub) =>
                  sub.paket.map((paket) =>
                    paket.pertemuan.map((pertemuan) => (
                      <div
                        className="max-w-xs flex flex-col justify-items-center mb-5 bg-gradient-to-b from-yellow-200 via-orange-300 to-orange-400 rounded-md shadow-md pt-5 h-auto"
                        key={pertemuan.idSubPelajaran}
                      >
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
                                {pertemuan.harga.split(".", 1)[0]}
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
                            onClick={() => getMobileOS()}
                          >
                            Pesan
                          </button>
                        </center>
                      </div>
                    ))
                  )
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

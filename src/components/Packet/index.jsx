import React from "react";
import { motion } from "framer-motion";
import { getPaket } from "../../redux/actions/paket";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Packet = () => {
  const dispatch = useDispatch();
  const menuPaket = useSelector((state) => state.paket.data);
  console.log("menuPaket", menuPaket);
  React.useEffect(() => {
    dispatch(getPaket());
  }, []);

  function shorten(text, max) {
    return text && text.length > max
      ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
      : text;
  }

  if (!menuPaket || menuPaket.length === 0)
    return (
      <p className="text-center font-bold text-lg" id="product">
        Paket Sedang Proses Loading !
      </p>
    );

  return (
    <div className="-mt-20 md:-mt-52">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f0f2f9"
          fill-opacity="1"
          d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,213.3C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#f0f2f9] text-[#1f2d3d] pb-32">
        <div
          className="header-text text-center md:-mt-6 -mt-2 space-y-3"
          id="product"
        >
          <p className="font-black text-2xl">Pilihan Paket Proo</p>
          <p className="font-regular text-xl">
            Pilih paket pembelajaran <br />
            yang sesuai denganmu
          </p>
        </div>
        <div className="body-content mt-10">
          <div className="container px-5">
            <div className="row">
              {menuPaket.length > 0 &&
                menuPaket.map((item) => (
                  <div className="md:col-4 mb-5" key={item._id}>
                    {/* <div className="img-container -ml-20">
                    <img src="/assets/amanbg.png" alt="" />
                    <img
                      src="/assets/aman.png"
                      className="-mt-40 ml-36"
                      alt=""
                    />
                  </div> */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="card rounded-2xl px-5 py-3 space-y-3 pb-6 pt-5 shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(66.12deg, rgba(255, 255, 255, 0.9) 54.63%, rgba(0, 188, 241, 0.9) 112.85%), url(${item.image})`,
                        backgroundPosition: "10% 70%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "400px",
                      }}
                    >
                      <div className="ribbon float-right -mr-6">
                        <img
                          src="/assets/ribbon.png"
                          className=" mt-2"
                          alt=""
                        />
                        <p className="-mt-7 ml-10 text-white font-bold text-md">
                          #BestDeal
                        </p>
                      </div>
                      <div className="head-desc">
                        <div className="text">
                          <p className="text-[#1f2d3d] font-extrabold text-xl  w-1/5">
                            {item.nama}
                          </p>
                          <p className="text-[#1f2d3d] text-sm font-light">
                            {shorten(item.deskripsi, 65)}
                          </p>
                        </div>
                      </div>
                      <div className="body-desc flex flex-row justify-between">
                        <div className="text">
                          <p className="text-[#FDE047] text-lg font-black">
                            Mulai dari Rp 30.000
                          </p>
                          <p className="text-[#FFBB54] text-xl font-black">
                            1 Pertemuan
                          </p>
                        </div>
                        <div className="btn">
                          <Link to={"/detail-paket/" + item._id}>
                            <motion.button
                              className="px-10 py-2 rounded-lg bg-[#FFBB54] text-white font-bold mt-3"
                              whileHover={{ scaleX: 1.1 }}
                              whileTap={{
                                scale: 0.2,
                              }}
                            >
                              Detail
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="footer-content mt-10">
          <center>
            <button className="bg-[#1f2d3d] text-white px-10 py-3 text-lg font-bold rounded-md">
              Selengkapnya
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Packet;

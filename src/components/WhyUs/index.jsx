import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import getMobileOS from "../../utils/checkOS";

const WhyUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="-mt-20 md:-mt-52">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2d3d"
          fill-opacity="1"
          d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,138.7C672,128,768,128,864,154.7C960,181,1056,235,1152,218.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#1f2d3d] text-white pb-28">
        <div
          className="header-text text-center md:-mt-6 -mt-2 space-y-3"
          id="about"
        >
          <p className="font-black text-2xl">Kenapa Harus Proo ?</p>
          <p className="font-regular text-xl">
            Sebagai layanan guru privat masa kini. <br />
            Proo memiliki beberapa keunggulan.
          </p>
        </div>
        <div className="body-content mt-10">
          <div className="container">
            <div className="row">
              <div className="md:col-4 mb-5">
                <center>
                  <div className="img-container -ml-20">
                    <img src="/assets/amanbg.png" alt="" />
                    <motion.img
                      src="/assets/aman.png"
                      className="-mt-40 ml-36"
                      alt=""
                      whileHover={{ scaleY: 1.2 }}
                      whileTap={{
                        scale: 0.2,
                      }}
                    />
                  </div>
                  <div className="text-content mt-3 text-center">
                    <p className="text-white font-extrabold text-xl">
                      Guru Friendly
                    </p>
                    <p className="text-white font-light">
                      Guru yang masih muda, <br /> mampu menyesuaikan <br />{" "}
                      berbagai kalangan.
                    </p>
                  </div>
                </center>
              </div>
              <div className="md:col-4 mb-5">
                <center>
                  <div className="img-container -ml-28">
                    <img src="/assets/rumahbg.png" alt="" />
                    <motion.img
                      src="/assets/rumah.png"
                      className="-mt-40 ml-36"
                      alt=""
                      whileHover={{ scaleX: 0.8 }}
                      whileTap={{
                        scale: 0.2,
                      }}
                    />
                  </div>
                  <div className="text-content mt-3 text-center">
                    <p className="text-white font-extrabold text-xl">
                      Guru ke Rumah
                    </p>
                    <p className="text-white font-light">
                      Guru pengajar datang <br />
                      langsung ke rumah.
                    </p>
                  </div>
                </center>
              </div>
              <div className="md:col-4 mb-5">
                <center>
                  <div className="img-container -ml-28">
                    <img src="/assets/verifbg.png" alt="" />
                    <motion.img
                      src="/assets/verif.png"
                      className="-mt-40 ml-36"
                      alt=""
                      whileHover={{ scaleY: 1.2 }}
                      whileTap={{
                        scale: 0.2,
                      }}
                    />
                  </div>
                  <div className="text-content mt-4 text-center">
                    <p className="text-white font-extrabold text-xl">
                      Guru Terverifikasi
                    </p>
                    <p className="text-white font-light">
                      Guru yang mengajar <br /> sudah terverifikasi aman <br />{" "}
                      dan berkompeten oleh Tim Proo.
                    </p>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content mt-10">
          <center>
            <button
              className="bg-white text-[#1f2d3d] px-10 py-3 text-lg font-black rounded-md"
              onClick={() => getMobileOS()}
            >
              Coba Sekarang
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

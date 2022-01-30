import React from "react";
import getMobileOS from "../../utils/checkOS";

const Jumbotron = () => {
  return (
    <section className="bg-[#F0F2F9] " id="home">
      <div className="flex flex-col justify-center p-4 lg:-mt-12 lg:px-28 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-3xl font-extrabold text-[#1B252F] leading-none sm:text-3xl">
            Proo - Cari Guru Privatmu !
          </p>
          <p className="mt-6 mb-8 text-[#1B252F] text-xl sm:mb-12">
            Platform penyedia layanan guru privat, <br />
            Guru datang langsung ke rumah.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              className="px-8 py-3 text-lg font-bold rounded bg-green-500 text-white hover:cursor-pointer"
              onClick={() => getMobileOS()}
            >
              Coba Sekarang
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-green-500 space-x-4"
            >
              <i className="fas fa-play"></i>{" "}
              <span>
                <a href="https://www.youtube.com/watch?v=nL87m6dqd-Q">
                  Lihat Demo
                </a>
              </span>
            </a>
          </div>
          {/* <hr className="mt-5" />
          <div className="download mt-5">
            <p className="text-center mb-5 font-bold text-[#1B252F]">
              Download sekarang !
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start md:-ml-3">
              <img src="/assets/ps.png" alt="" onClick={() => getMobileOS()} />
              <img src="/assets/is.png" alt="" onClick={() => getMobileOS()} />
            </div>
          </div> */}
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0  sm:-mt-15">
          <img
            src="/assets/header.png"
            alt=""
            className="object-contain h-full  sm:-mt-15"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;

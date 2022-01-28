import React from "react";

const DownloadNow = () => {
  return (
    <center>
      <div className="bg-white -mt-16 w-2/3 my-auto h-auto rounded-xl py-6 pb-14 px-10 shadow-lg">
        <div className="md:row">
          <div className="col">
            <img src="/assets/down.png" className="w-auto" alt="" />
          </div>
          <div className="col text-left space-y-2 md:-ml-10 my-auto lg:mt-32">
            <p className="leading-relaxed text-3xl font-extrabold text-[#1F2D3D]">
              Download Proo Apps Sekarang Juga !
            </p>
            <p className="text-lg font-light md:pr-20">
              Dan dapatkan berbagai promo, penawaran serta layanan yang pasti
              bakal ngebantu kamu belajar.
            </p>
            <div className="button-cta">
              <div className="flex flex-col space-y-4 mt-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start md:-ml-3">
                <img src="/assets/ps.png" className="h-14" alt="" />
                <img src="/assets/is.png" className="h-14" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default DownloadNow;

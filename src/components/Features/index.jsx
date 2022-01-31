import React from "react";

const Features = () => {
  return (
    <div className="-mt-20 md:-mt-26" id="feature">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2d3d"
          fillOpacity="1"
          d="M0,0L60,32C120,64,240,128,360,144C480,160,600,128,720,122.7C840,117,960,139,1080,133.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#1f2d3d] text-white pb-32 md:-mt-20">
        <div className="header-text text-center md:-mt-6 -mt-2 space-y-3">
          <p className="font-black text-2xl">Fitur Proo</p>
          <p className="font-regular text-xl">
            Selain memberikan layanan Guru Privat. <br />
            Proo memiliki fitur lainnya.
          </p>
        </div>
        <div className="body-content mt-10">
          <div className="container">
            <div className="md:row space-y-3 md:space-y-0">
              <div className="col">
                <center>
                  <div className="bg-gradient-to-bl from-[#FFC164] to-[#FED867DE] py-16 space-y-5 px-10 my-auto rounded-md">
                    <div className="content items-start">
                      <img src="/assets/bimbel.png" className="h-16" alt="" />
                      <p className="text-xl font-bold mt-6">Proo Bimbel</p>
                    </div>
                    <div className="text-desc">
                      <p className="text-center">
                        Sebagai layanan Guru Privat kekinian. Tentunya Proo
                        punya fitur yang Proo juga untuk membantu belajar.
                      </p>
                    </div>
                  </div>
                </center>
              </div>
              <div className="col">
                <center>
                  <div className="bg-gradient-to-bl from-[#FFC164] to-[#FED867DE] py-16 space-y-5 px-10 my-auto rounded-md">
                    <div className="content items-start">
                      <img src="/assets/bahasa.png" className="h-16" alt="" />
                      <p className="text-xl font-bold mt-6">Proo Bahasa</p>
                    </div>
                    <div className="text-desc">
                      <p className="text-center">
                        Sebagai layanan belajar privat. Proo menyediakan bimbel
                        bahasa untuk menambah kemampuan berbahasa.
                      </p>
                    </div>
                  </div>
                </center>
              </div>

              <div className="col">
                <center>
                  <div className="bg-gradient-to-bl from-[#FFC164] to-[#FED867DE] py-16 space-y-5 px-10 my-auto rounded-md">
                    <div className="content items-start">
                      <img src="/assets/e-quran.png" className="h-16" alt="" />
                      <p className="text-xl font-bold mt-6">Proo e-Qur'an</p>
                    </div>
                    <div className="text-desc">
                      <p className="text-center">
                        Sebagai layanan mengaji privat. Proo menyediakan
                        Al-Qur’an digital untuk fitur penunjangnya.
                      </p>
                    </div>
                  </div>
                </center>
              </div>
              <div className="col">
                <center>
                  <div className="bg-gradient-to-bl from-[#FFC164] to-[#FED867DE] py-16 space-y-5 px-10 my-auto rounded-md">
                    <div className="content items-start">
                      <img src="/assets/mengaji.png" className="h-16" alt="" />
                      <p className="text-xl font-bold mt-6">Proo Mengaji</p>
                    </div>
                    <div className="text-desc">
                      <p className="text-center">
                        Untuk membantu pembelajaran Al-Qur’an. Proo menyediakan
                        layanan ngaji privat Al-Qur’an.
                      </p>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

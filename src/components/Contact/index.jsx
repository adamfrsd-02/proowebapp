import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper mt-16" id="contact">
      <div className="card-headers mb-5 text-center">
        <p className="text-3xl font-extrabold title mb-3">Ada Pertanyaan ?</p>
        <p className="description text-gray-500">
          Untuk pertanyaan lebih lanjut, silahkan hubungi kami. <br /> Atau
          langsung datang ke kantor kami.
        </p>
      </div>
      <div className="card-body">
        <div className="container flex flex-col justify-center p-4 lg:-mt-12 lg:px-28 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-2xl font-extrabold leading-none sm:text-2xl">
              Alamat Lengkap
            </p>
            <p className="mt-3 mb-8 text-xl sm:mb-12">
              Rumah Tahfidz Ar-Rayyan Sadai, Bengkong, <br /> Batam, Indonesia
            </p>
            <div className="detail-address flex flex-col space-y-7">
              <span className="flex flex-row">
                <img className="mr-5" src="assets/pin2.png" alt="" />
                <p className="mt-2">Bengkong Nusantara 2 Blok D No 8</p>
              </span>
              <span className="flex flex-row">
                <img className="mr-5 w-9" src="assets/message.png" alt="" />
                <p className="mt-2">admin@proo.co.id</p>
              </span>
              <span className="flex flex-row">
                <img className="mr-5 w-10" src="assets/info.png" alt="" />
                <p className="mt-2">www.proo.co.id</p>
              </span>
            </div>
          </div>
          <div className="flex bg-white flex-col p-6 pl-14 pr-14 lg:max-w-md xl:max-w-lg lg:text-left rounded-2xl shadow-md space-y-10 lg:w-2/3">
            <form action="" method="post">
              <div className="col-span-full sm:col-span-3">
                <label for="nama" className="text-sm mb-2">
                  Nama *
                </label>
                <input
                  id="nama"
                  type="text"
                  placeholder="masukkan data . . ."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-100 p-2 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3 mt-3">
                <label for="email" className="text-sm mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="masukkan email . . ."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-100 p-2 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3 mt-3 mb-8">
                <label for="pesan" className="text-sm mb-2">
                  Pesan *
                </label>
                <textarea
                  id="pesan"
                  type="text"
                  placeholder="masukkan pertanyaan . . ."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-100 p-2 focus:ring-violet-400 border-gray-700 text-gray-900 h-32"
                  maxLength="200"
                />
              </div>
              <a
                href="#"
                className="shadow-lg px-12 py-2 text-lg font-bold rounded bg-green-500 text-white float-right"
              >
                Kirim
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

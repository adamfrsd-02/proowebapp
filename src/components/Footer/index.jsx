import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import getMobileOS from "../../utils/checkOS";
import "../../utils/data";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
const Footer = () => {
  const navigation = useNavigate();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handlePrivacy = () => {
    navigation("/privacy_policy");
  };
  return (
    <div className="-mt-2 md:-mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFBB54"
          fillOpacity="1"
          d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,128C672,107,768,53,864,53.3C960,53,1056,107,1152,133.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#FFBB54] text-white">
        <div className="header-text md:-mt-16 md:mb-20 -mt-2 space-y-3">
          <div className="container">
            <div className="row  text-center md:text-left">
              <div className="col space-y-5">
                <p className="text-2xl font-bold">Presented by Proo Team</p>
                <div className="desc">
                  <p className="">
                    Proo Apps menyediakan berbagai layanan private belajar
                    dengan sistem Guru yang datang ke rumah murid. Mulai dari
                    Calistung, Mengaji, hingga Bahasa Asing.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start md:-ml-3">
                  <img
                    src="/assets/ps.png"
                    onClick={() => getMobileOS()}
                    className="h-14"
                    alt=""
                  />
                  <img
                    src="/assets/is.png"
                    onClick={() => getMobileOS()}
                    className="h-14"
                    alt=""
                  />
                </div>
              </div>
              <div className="col space-y-5">
                <div className="space-y-5 md:ml-24">
                  <p className="text-2xl font-bold">Layanan</p>
                  <ul className="space-y-4">
                    <li>
                      <a href="#product" className="hover:dark:text-green-400">
                        Proo Mengaji
                      </a>
                    </li>
                    <li>
                      <a href="#product" className="hover:dark:text-green-400">
                        Proo Bahasa
                      </a>
                    </li>
                    <li>
                      <a href="#product" className="hover:dark:text-green-400">
                        Proo Bimbel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col space-y-5">
                <p className="text-2xl font-bold">Bantuan</p>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=nL87m6dqd-Q"
                      className="hover:dark:text-green-400"
                    >
                      Penggunaan Aplikasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=jX_zZ39cUio"
                      className="hover:dark:text-green-400"
                    >
                      Ingin Menjadi Guru ?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=nL87m6dqd-Q"
                      className="hover:dark:text-green-400"
                    >
                      Ingin Menjadi Murid ?
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="hover:dark:text-green-400">
                      Frequently Asked Question
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-ku bg-[#FAB244] mt-5">
          <div className="container">
            <div className="grid justify-center py-4 lg:justify-between">
              <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                <span className="font-bold">
                  Proo ©2021. Created with{" "}
                  <i className="fas fa-heart text-lg text-rose-500"></i> by Proo
                  Fullstack Developer &nbsp; &nbsp; &nbsp; |
                </span>
                <a onClick={handlePrivacy} className="hover:cursor-pointer">
                  <span>Privacy policy</span>
                </a>
                <a href="/terms_of_service">
                  <span>Terms of service</span>
                </a>
              </div>
              <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                <a
                  href="https://www.youtube.com/channel/UCK5GuYWRSbznXLla8Hjr8wA"
                  title="Youtube"
                  className="flex items-center justify-center w-10 h-10 rounded-full "
                >
                  <i className="fab fa-youtube text-red-500 fa-2xl"></i>
                </a>
                {/* <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center w-10 h-10 rounded-full "
                >
                  <i className="fab fa-facebook text-blue-500 fa-2xl"></i>
                </a> */}
                <a
                  href="https://www.instagram.com/proo__id"
                  title="Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                >
                  <i className="fab fa-instagram text-violet-500 fa-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

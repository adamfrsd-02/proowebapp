import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import getMobileOS from "../../utils/checkOS";

const Footer = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="-mt-2 md:-mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFBB54"
          fill-opacity="1"
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
                      <a href="#" className="hover:dark:text-green-400">
                        Proo Mengaji
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:dark:text-green-400">
                        Proo Bahasa
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:dark:text-green-400">
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
                    <a href="#" className="hover:dark:text-green-400">
                      Penggunaan Aplikasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:dark:text-green-400">
                      Ingin Menjadi Guru ?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:dark:text-green-400">
                      Ingin Menjadi Murid ?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:dark:text-green-400">
                      Frequently Asked Question
                    </a>
                  </li>
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
                <a onClick={() => openModal()}>
                  <span>Privacy policy</span>
                </a>
                <a href="#">
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="h-10 px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-extrabold mb-2 leading-6 text-center text-gray-900"
                >
                  Privacy & Policy
                </Dialog.Title>
                <hr />
                <Dialog.Description className="mt-5 text-justify">
                  <p>
                    <b>PT. Asia Proo Teknologi</b> built the Proo app as a Free
                    app. This SERVICE is provided by{" "}
                    <b>PT. Asia Proo Teknologi</b> at no cost and is intended
                    for use as is.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    This page is used to inform visitors regarding our policies
                    with the collection, use, and disclosure of Personal
                    Information if anyone decided to use our Service.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    If you choose to use our Service, then you agree to the
                    collection and use of information in relation to this
                    policy. The Personal Information that we collect is used for
                    providing and improving the Service. We will not use or
                    share your information with anyone except as described in
                    this Privacy Policy.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    The terms used in this Privacy Policy have the same meanings
                    as in our Terms and Conditions, which is accessible at Proo
                    unless otherwise defined in this Privacy Policy.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Information Collection and Use**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    For a better experience, while using our Service, we may
                    require you to provide us with certain personally
                    identifiable information. The information that we request
                    will be retained by us and used as described in this privacy
                    policy.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    The app does use third party services that may collect
                    information used to identify you.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Link to privacy policy of third party service providers used
                    by the app
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    *&nbsp; &nbsp;[Google Play
                    Services](https://www.google.com/policies/privacy/)
                  </p>
                  <p>
                    *&nbsp; &nbsp;[Google Analytics for
                    Firebase](https://firebase.google.com/policies/analytics)
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Log Data**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We want to inform you that whenever you use our Service, in
                    a case of an error in the app we collect data and
                    information (through third party products) on your phone
                    called Log Data. This Log Data may include information such
                    as your device Internet Protocol (&#8220;IP&#8221;) address,
                    device name, operating system version, the configuration of
                    the app when utilizing our Service, the time and date of
                    your use of the Service, and other statistics.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Cookies**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are
                    sent to your browser from the websites that you visit and
                    are stored on your device's internal memory.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    This Service does not use these &#8220;cookies&#8221;
                    explicitly. However, the app may use third party code and
                    libraries that use &#8220;cookies&#8221; to collect
                    information and improve their services. You have the option
                    to either accept or refuse these cookies and know when a
                    cookie is being sent to your device. If you choose to refuse
                    our cookies, you may not be able to use some portions of
                    this Service.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Service Providers**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We may employ third-party companies and individuals due to
                    the following reasons:
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>*&nbsp; &nbsp;To facilitate our Service;</p>
                  <p>*&nbsp; &nbsp;To provide the Service on our behalf;</p>
                  <p>*&nbsp; &nbsp;To perform Service-related services; or</p>
                  <p>
                    *&nbsp; &nbsp;To assist us in analyzing how our Service is
                    used.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We want to inform users of this Service that these third
                    parties have access to your Personal Information. The reason
                    is to perform the tasks assigned to them on our behalf.
                    However, they are obligated not to disclose or use the
                    information for any other purpose.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Security**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We value your trust in providing us your Personal
                    Information, thus we are striving to use commercially
                    acceptable means of protecting it. But remember that no
                    method of transmission over the internet, or method of
                    electronic storage is 100% secure and reliable, and we
                    cannot guarantee its absolute security.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Links to Other Sites**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    This Service may contain links to other sites. If you click
                    on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by us.
                    Therefore, we strongly advise you to review the Privacy
                    Policy of these websites. We have no control over and assume
                    no responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Children&#8217;s Privacy**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    These Services do not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from children under 13 years of age. In the case we discover
                    that a child under 13 has provided us with personal
                    information, we immediately delete this from our servers. If
                    you are a parent or guardian and you are aware that your
                    child has provided us with personal information, please
                    contact us so that we will be able to do necessary actions.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>**Changes to This Privacy Policy**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We may update our Privacy Policy from time to time. Thus,
                    you are advised to review this page periodically for any
                    changes. We will notify you of any changes by posting the
                    new Privacy Policy on this page.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>This policy is effective as of 2021-11-06</p>
                  <p>
                    <br />
                  </p>
                  <p>**Contact Us**</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to contact us at {""}
                    <a
                      href="mailto:proo.official20@gmail.com"
                      className="text-green-500"
                    >
                      proo.official20@gmail.com
                    </a>
                    .
                  </p>
                </Dialog.Description>
                <hr className="mt-4" />
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Footer;

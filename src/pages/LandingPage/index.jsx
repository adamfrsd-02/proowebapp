import React from "react";
import Contact from "../../components/Contact";
import DownloadNow from "../../components/DownloadNow";
import Features from "../../components/Features";
import Jumbotron from "../../components/Jumbotron";
import Packet from "../../components/Packet";
import WhyUs from "../../components/WhyUs";

const LandingPage = () => {
  return (
    <>
      <Jumbotron />
      <WhyUs />
      <Packet />
      <Features />
      <DownloadNow />
      <Contact />
    </>
  );
};

export default LandingPage;

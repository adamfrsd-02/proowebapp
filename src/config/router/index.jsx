import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { BrowserHistory, HashHistory, History } from "history";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { LandingPage, PackageDetail } from "../../pages";
import { getPaket } from "../../redux/actions/paket";
import { getPelajaran } from "../../redux/actions/pelajaran";
import { AnimatePresence } from "framer-motion";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TOS from "../../pages/TOS";

const Routing = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPaket());
    dispatch(getPelajaran());
  }, []);
  return (
    <AnimatePresence>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/detail-paket/:menuId" element={<PackageDetail />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_of_service" element={<TOS />} />
        </Routes>
        <Footer />
      </Router>
    </AnimatePresence>
  );
};

export default Routing;

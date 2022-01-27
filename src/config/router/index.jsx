import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
  useLocation,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { LandingPage, PackageDetail } from "../../pages";
import { getPaket } from "../../redux/actions/paket";
import { getPelajaran } from "../../redux/actions/pelajaran";

const Routing = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPaket());
    dispatch(getPelajaran());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/detail-paket/:menuId" exact element={<PackageDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;

import React, { useEffect } from "react";

// import { useDispatch } from "react-redux";
// import { initial } from "../store/user-store";

import Banner from "../components/Banner";
import BrowseByPlanet from "../components/BrowseByPlanet";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import Footer from "../components/Footer";

const LandingPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initial());
  // }, [dispatch]);

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
  };
  return (
    <div style={style.container}>
      <Banner />
      <Category1 />
      <BrowseByPlanet />
      <Category2 />
      <Footer />
    </div>
  );
};

export default LandingPage;

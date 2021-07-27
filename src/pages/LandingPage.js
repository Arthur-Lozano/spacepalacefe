import React from "react";
import Banner from "../components/Banner";
import BrowseByPlanet from "../components/BrowseByPlanet";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";


import Header from "../components/Header";
import Footer from "../components/Footer";

const landingpage = () => {
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
      <Header />
      <Banner />
      <Category1 />
      <BrowseByPlanet />
      <Category2 />
      <Footer />
    </div>

  );
};

export default landingpage;

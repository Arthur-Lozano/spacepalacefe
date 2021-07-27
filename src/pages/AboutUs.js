import React from "react";
import Banner from "../components/AboutBanner";
import Bio from "../components/AboutBio";

import Header from "../components/Header";
import Footer from "../components/Footer";

const aboutus = () => {
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
      <Bio />
      <Footer />
    </div>

  );
};

export default aboutus;
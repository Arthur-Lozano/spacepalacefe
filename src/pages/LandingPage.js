import React, { useEffect } from "react";

import Banner from "../components/Banner";
import BrowseByPlanet from "../components/BrowseByPlanet";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";

const LandingPage = () => {
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
    </div>
  );
};

export default LandingPage;

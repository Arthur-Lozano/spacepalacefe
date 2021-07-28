import React from "react";
import AboutBanner from "../components/AboutBanner";
import Bio from "../components/AboutBio";

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
      <AboutBanner />
      <Bio />
    </div>
  );
};
export default aboutus;
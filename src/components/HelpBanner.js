import React from "react";
import banner from "../assets/space5.jpg";
const HelpBanner = () => {
  const style = {
    container: {
      width: "100%",
      display: "flex",
      fontFamily: "'Condiment', cursive, sans-serif",
      color: "white",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      background: `no-repeat center url(${banner})`,
      backgroundSize: "cover",
      fontSize: "6em",
      textShadow: "3px 3px #333333",
      marginBottom: "50px",
    },
  };
  return (
    <div style={style.container}>
      <h2> Help & FAQs </h2>
    </div>
  );
};
export default HelpBanner;
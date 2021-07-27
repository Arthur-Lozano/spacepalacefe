import React from "react";
import banner from "../assets/space6.jpg";


const Banner = () => {

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
    },
  };

  return (
    <div style={style.container}>
      <h2> About Us </h2>
    </div>
  );
};

export default Banner;
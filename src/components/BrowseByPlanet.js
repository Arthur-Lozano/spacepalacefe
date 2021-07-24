import React from "react";

const BrowseByPlanet = () => {
  const style = {
    container: {
      width: "80vw",
      display: "flex",
      fontFamily: "'Barlow', sans-serif",
      color: "white",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundSize: "cover",
      fontSize: "2em",
      borderTop: "1px solid black",
      padding: "10px",
      letterSpacing: "2px",
    },
    venus: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "15%",
      height: "200px",
      backgroundColor: "#E69111",
    },
    mars: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "15%",
      height: "200px",
      backgroundColor: "#B3040D",
    },
    saturn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "15%",
      height: "200px",
      backgroundColor: "#742D02",
    },
    pluto: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "15%",
      height: "200px",
      backgroundColor: "#32C4F3",
    },
    header: {
      fontFamily: "'Barlow', sans-serif",
      textSpacing: "2px",
      letterSpacing: "2px",
    },
  };

  return (
    <>
      <h2 style={style.header}>BROWSE BY PLANETS</h2>
      <div style={style.container}>
        <div style={style.venus}>
          <h3>VENUS</h3>
        </div>
        <div style={style.mars}>
          <h3>MARS</h3>
        </div>
        <div style={style.saturn}>
          <h3>SATURN</h3>
        </div>
        <div style={style.pluto}>
          <h3>PLUTO</h3>
        </div>
      </div>
    </>
  );
};

export default BrowseByPlanet;

import React from "react";
import capsule from "../assets/space2.jpg";
import tools from "../assets/space1.jpg";
import robots from "../assets/space5.jpg";
import starship from "../assets/space7.jpg";
import chart from "../assets/space4.jpg";
import security from "../assets/space6.jpg";

const Category2 = () => {
  const style = {
    container: {
      width: "100vw",
      display: "flex",
      fontFamily: "'Barlow', sans-serif",
      color: "black",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      fontSize: "2em",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      width: "80vw",
      borderBottom: "1px solid black",
      letterSpacing: "2px",
    },
    catContainer: {
      marginTop: "20px",
      width: "100vw",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "stretch",
      // border: "2px solid black",
    },
    catCard: {
      boxSizing: "border-box",
      display: "flex",
      width: "30%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontSize: ".7em",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "300px",
      cursor: "pointer",
    },
    subTitle: {
      fontFamily: "'Condiment', cursive, sans-serif",
      fontSize: ".8em",
    },
  };
  return (
    <div style={style.container}>
      <div style={style.header}>
        <h3>CATEGORIES</h3>
      </div>
      <div style={style.catContainer}>
        <div style={style.catCard}>
          <img style={style.image} src={capsule} alt='suit' />
          <h4>Capsules And Habitats</h4>
          <p style={style.subTitle}>
            Keep a roof over your head, no matter how far from home you are!
          </p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={tools} alt='suit' />
          <h4>Tools And Equipment</h4>
          <p style={style.subTitle}>Things break, be ready to fix them!</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={robots} alt='suit' />
          <h4>Robots and Drones</h4>
          <p style={style.subTitle}>Why do all the work yourself?</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={starship} alt='suit' />
          <h4>Starships And Rockets</h4>
          <p style={style.subTitle}>Don't let it be a one-way trip!</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={chart} alt='suit' />
          <h4>Charts, Maps, Navigation</h4>
          <p style={style.subTitle}> Uncharted territory? Don't get lost!</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={security} alt='suit' />
          <h4>Security and Survival</h4>
          <p style={style.subTitle}>Ensure you don't die!</p>
        </div>
      </div>
    </div>
  );
};

export default Category2;

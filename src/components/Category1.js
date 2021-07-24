import React from "react";
import suit from "../assets/space7.jpg";

const Category1 = () => {
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
      width: "35%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontSize: ".7em",
    },
    image: {
      width: "100%",
      height: "400px",
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
          <img style={style.image} src={suit} alt='suit' />
          <h4>SUITS AND PROTECTIVE GEAR</h4>
          <p style={style.subTitle}>You're survival is our priority!</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={suit} alt='suit' />
          <h4>SUITS AND PROTECTIVE GEAR</h4>
          <p style={style.subTitle}>You're survival is our priority!</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={suit} alt='suit' />
          <h4>SUITS AND PROTECTIVE GEAR</h4>
          <p style={style.subTitle}>You're survival is our priority!</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={suit} alt='suit' />
          <h4>SUITS AND PROTECTIVE GEAR</h4>
          <p style={style.subTitle}>You're survival is our priority!</p>
        </div>
      </div>
    </div>
  );
};

export default Category1;

import React from "react";
import arthur from "../assets/arthur.jpg";
import mark from "../assets/mark.jpg";
import nassir from "../assets/nassir.jpg";
import ryan from "../assets/ryan.jpg";

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
      width: "75%",
      height: "400px",
      marginTop: "25px",
    },
    subTitle: {
      fontFamily: "'Barlow', sans-serif",
      fontSize: ".8em",
    },
  };
  return (
    <div style={style.container}>
      <div style={style.header}>
        <h3>THE TEAM</h3>
      </div>
      <div style={style.catContainer}>
        <div style={style.catCard}>
          <img style={style.image} src={arthur} alt='arthur' />
          <h4>ARTHUR LOZANO</h4>
          <p style={style.subTitle}>Moved from Germany to Seattle, Originally from Chicago</p>
          <p style={style.subTitle}>Retried from United States Air Force</p>
          <p style={style.subTitle}>Master's Degree w/Focus on WebDev</p>
          <p style={style.subTitle}>Excited for Journey Ahead in Coding</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={mark} alt='mark' />
          <h4>MARK DUENAS</h4>
          <p style={style.subTitle}>United States Navy Veteran</p>
          <p style={style.subTitle}>Software Developer</p>
          <p style={style.subTitle}>From San Diego, CA</p>
          <p style={style.subTitle}>Coffee Lover</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={nassir} alt='nassir' />
          <h4>NASSIR ABEGAZ</h4>
          <p style={style.subTitle}>Originally from Ethiopia</p>
          <p style={style.subTitle}>Background in Construction Supervision / Contract Admin</p>
          <p style={style.subTitle}>Competence in JavaScript, HTML and CSS</p>
          <p style={style.subTitle}>Inspired to Help Others Through Softward Development</p>
        </div>
        <div style={style.catCard}>
          <img style={style.image} src={ryan} alt='ryan' />
          <h4>RYAN TIPPER</h4>
          <p style={style.subTitle}>Software Engineer</p>
          <p style={style.subTitle}>Front End and UX/UI Development</p>
          <p style={style.subTitle}>Childrens Author</p>
          <p style={style.subTitle}>25 Years of Baseball</p>
        </div>
      </div>
    </div>
  );
};
export default Category1;

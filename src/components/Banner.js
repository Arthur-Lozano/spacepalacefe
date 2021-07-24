import React, { useEffect } from "react";
import banner from "../assets/space18.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Banner = () => {
  useEffect(() => {
    try {
      let response = axios.get();
      let products = response.data;
      console.log(products);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const style = {
    container: {
      width: "100%",
      display: "flex",
      fontFamily: "'Condiment', cursive, sans-serif",
      color: "ivory",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      background: `no-repeat center url(${banner})`,
      backgroundSize: "cover",
      fontSize: "2em",
    },
    btn: {
      width: "5rem",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#F8C51C",
      color: "white",
      letterSpacing: "2px",
      cursor: "pointer",
    },
  };

  return (
    <div style={style.container}>
      <h2> the shop of tomorrow! </h2>
      <button style={style.btn}>
        <Link style={{ textDecoration: "none", color: "inherit" }} to='/login'>
          LOGIN
        </Link>
      </button>
    </div>
  );
};

export default Banner;

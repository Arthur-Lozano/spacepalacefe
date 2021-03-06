import React, { useEffect } from "react";
import banner from "../assets/space18.jpg";

import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "../pages/Login";

const Banner = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);

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
      fontSize: "4em",
      textShadow: "5px 5px #333333",
    },
    btn: {
      width: "5rem",
      padding: "15px",
      borderRadius: "5px",
      border: "none",
      boxShadow: "5px 5px 5px #333333",
      backgroundColor: "#F8C51C",
      color: "white",
      letterSpacing: "2px",
      cursor: "pointer",
    },
  };

  return (
    <div style={style.container}>
      <h2> the shop of tomorrow! </h2>
      {!isLoggedIn ? (
        <Modal btnText='LOGIN' styling={style.btn}>
          <Login />
        </Modal>
      ) : (
        <p>Welcome to the Future {user.firstName.toUpperCase()} </p>
      )}
    </div>
  );
};

export default Banner;

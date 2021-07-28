import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = {
    title: {
      width: "100%",
      display: "flex",
      fontFamily: "'Barlow', sans-serif",
      color: "black",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      marginTop: "5em",
      fontWeight: "bold",

    },
    links: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-between",
      width: "50%",
    },
  };
  return (
    <div style={style.title}>
      <ul style={style.links}>
        <Link style={{ textDecoration: "none" }} to='/contact'>
          CONTACT
        </Link>
        <Link style={{ textDecoration: "none" }} to='/about-us'>
          ABOUT US
        </Link>
        <Link style={{ textDecoration: "none" }} to='/help'>
          HELP
        </Link>
      </ul>
      <p>&copy; Space Palace 2021</p>

    </div>
  );
};

export default Footer;

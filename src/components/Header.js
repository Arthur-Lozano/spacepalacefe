import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    title: {
      width: "100%",
      display: "flex",
      fontFamily: "'Barlow', sans-serif",
      color: "black",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
    },
    links: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-around",
      width: "50%",
      textDecoration: "none",
    },
  };
  return (
    <div style={style.title}>
      <h1>S P A C E &nbsp;&nbsp; P A L A C E</h1>
      <ul style={style.links}>
        <li>
          <Link style={{ textDecoration: "none" }} to='/login'>
            LOGIN
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to='/register'>
            REGISTER
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to='/cart'>
            CART
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

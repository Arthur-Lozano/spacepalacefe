import React from "react";

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
    },
    links: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-around",
      width: "50%",
    },
  };
  return (
    <div style={style.title}>
      <h1>S P A C E &nbsp;&nbsp; P A L A C E</h1>
      <ul style={style.links}>
        <li>LOGIN</li>
        <li>REGISTER</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Header;

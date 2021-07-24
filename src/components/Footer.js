import React from "react";

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
        <li>CONTACT</li>
        <li>ABOUT US</li>
        <li>HELP</li>
      </ul>
      <p>&copy; Space Palace 2021</p>
    </div>
  );
};

export default Footer;

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
      <ul style={style.links}>
        <li>CONTACT</li>
        <li>ABOUT US</li>
        <li>HELP</li>
      </ul>
    </div>
  );
};

export default Footer;

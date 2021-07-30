import React from "react";
import HelpBanner from "../components/HelpBanner";
import HelpBody from "../components/HelpBody";

const help = () => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
  };
  return (
    <div style={style.container}>
      <HelpBanner />
      <HelpBody />
    </div>
  );
};
export default help;
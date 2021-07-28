import React from "react";
import HelpBanner from "../components/HelpBanner";

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
    </div>
  );
};
export default help;
import React from "react";

const Product = (props) => {
  const { id } = props.match.params;

  return <div>Hello from Product </div>;
};

export default Product;

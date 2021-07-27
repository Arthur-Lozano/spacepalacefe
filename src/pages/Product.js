import React, { useEffect, useState } from "react";

import axios from "axios";

// import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../store/product-store";

const Product = (props) => {
  const { id } = props.match.params;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(product);

  const url = `${process.env.REACT_APP_BE_URL + "products/" + id}`;

  const fetchProduct = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const style = {
    container: {
      width: "100%",
      display: "flex",
      fontFamily: "'Condiment', cursive, sans-serif",
      justifyContent: "center",
      alignItems: "center",
      height: "40%",
      fontSize: "1em",
    },
    imageCarousel: {
      width: "50%",
    },
    image: {
      width: "50%",
      height: "50%",
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
      {product.images && (
        <>
          <div style={style.imageCarousel}>
            <img
              style={style.image}
              src={product.images[0]}
              alt={product.name}
            />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>{product.details}</p>
            <p> {product.description}</p>
            <button> Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

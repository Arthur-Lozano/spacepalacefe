import React, { useEffect } from "react";
import Product from "../components/Product";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import useStyles from "./Productpage-style";

import { useSelector, useDispatch } from "react-redux";
import { fetch } from "../store/product-store";
import { add } from "../store/cart-store";

const ProductsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const botany = useSelector((state) => state.products["botany-seeds-fauna"]);
  // const clothing = useSelector((state) => state.products["clothing"]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const renderProducts = () => {
    const listOfProducts = Object.entries(products).map(([key, value]) => {
      if (
        key !== "listOfProducts" &&
        key !== "productDetail" &&
        key !== "survival"
      ) {
        return (
          <>
            <Typography
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: "bold",
                borderBottom: "1px solid black",
                marginBottom: "1em",
              }}
              className={classes.root}
              variant='h5'
              gutterBottom
            >
              {key.toUpperCase()}
            </Typography>
            <Grid
              container
              justify='center'
              spacing={4}
              style={{
                fontFamily: "'Barlow', sans-serif",
                marginBottom: "5em",
              }}
              className={classes.root}
            >
              {value &&
                value.map((product) => (
                  <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} addToCart={addToCart} />
                  </Grid>
                ))}
            </Grid>
          </>
        );
      }
      return "";
    });
    return listOfProducts;
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      {renderProducts()}
    </main>
  );
};

export default ProductsPage;

import React, { useEffect } from "react";
import Product from "../components/Product";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

import useStyles from "./Productpage-style";

import { useSelector, useDispatch } from "react-redux";
import { fetch } from "../store/product-store";
import { add } from "../store/cart-store";

import catImage from "../assets/space21.jpg";

const CategoryPage = (props) => {
  const classes = useStyles();
  const { category } = props.match.params;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products[category]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const renderProducts = () => {
    const listOfProducts =
      products &&
      products.map((item) => (
        <Grid key={item._id} item xs={12} sm={6} md={4} lg={3}>
          <Product product={item} addToCart={addToCart} />
        </Grid>
      ));
    return listOfProducts;
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper
        style={{
          background: `url(${catImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "30vh",
        }}
      ></Paper>
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
        {category.toUpperCase()}
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
        {renderProducts()}
      </Grid>
    </main>
  );
};

export default CategoryPage;

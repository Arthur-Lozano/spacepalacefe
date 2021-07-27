import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

// import { addToCart } from "./account/store/cart.js";
import { useSelector, useDispatch } from "react-redux";
import { fetch } from "../store/product-store";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
  root: {
    width: 325,
    maxHeight: "auto",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  media: {
    height: 150,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.listOfProducts);

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  console.log(products);

  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/* <h2>{products.category.name.toUpperCase()}</h2> */}
      {/* <h2 className='description'>{products.category.description}</h2> */}
      <Grid container space={3}>
        {products &&
          products.map((product, i) => (
            <Grid key={i} item xs={12} sm={6} lg={3}>
              <Card key={i} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.images && product.images[0]}
                    title='Product Picture'
                    // src={product.images && product.images[0]}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                      ${product.price}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                      IN STOCK: {product.inStock}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buttonContainer}>
                  <Button
                    // onClick={() => products.addToCart(product)}
                    size='small'
                    color='primary'
                  >
                    ADD TO CART
                  </Button>
                  <Button size='small' color='primary'>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/product/${product._id}`}
                    >
                      VIEW DETAILS
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cart-store.js";
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';



const Product = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const url = `${process.env.REACT_APP_BE_URL + "products/" + id}`;
  const fetchProduct = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setProduct(response.data);
    setLoading(false);
  };
  const addToCart = () => {
    dispatch(add(product));
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const useStyles = makeStyles({
    container: {
      root: {
        minWidth: 300
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        color: 'red'
      },
      title: {
        fontSize: 14
      },
      pos: {
        marginBottom: 12
      },
      width: "100%",
      display: "flex",
      fontFamily: "'Condiment', cursive, sans-serif",
      justifyContent: "center",
      alignItems: "center",
      height: "40%",
      fontSize: "1em",
    },
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px"
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
    text: {
      verticalAlign: 'top',
    }
  });

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '15vh' }}
      ></Grid>
      <Grid item lg={12} xs={10} sm={10} md={10}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={classes.container}>
              {product.images && (
                <>
                  <div className={classes.imageCarousel}>
                    <img
                      className={classes.image}
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </div>
                  <Typography vairant="h5" component="h2">
                    {/* <Card> */}
                    <Box mr={5} p={5} className={classes.container.bullet} bgcolor='#e2cd6d'>
                      <h3>Product Name: {product.name}</h3><br />
                      <p>Product Details: {product.details}</p>
                      <p>Product Description:  {product.description}</p>
                      <CardActions>
                        <IconButton>
                          <button onClick={addToCart}> Add to Cart</button>
                        </IconButton>
                      </CardActions>
                    </Box>
                    {/* </Card> */}

                  </Typography>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default Product;
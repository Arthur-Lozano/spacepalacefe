import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { add, subtract, removeFromCart } from "../store/cart-store";

import useStyles from "./Cart-style";

const Cart = (props) => {
  const classes = useStyles();
  const { product } = props;

  const dispatch = useDispatch();

  const handleUpdateCartQty = (condition) => {
    if (condition === "+") {
      dispatch(add(product));
    } else {
      dispatch(subtract(product));
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {product.cartQuantity > 0 ? (
        <Card className='cart-item'>
          <CardMedia
            image={product.images[0]}
            alt={product.name}
            className={classes.media}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant='h4'>{product.name}</Typography>
            <Typography variant='h5'>${product.price}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
              <Button
                type='button'
                size='small'
                onClick={() => handleUpdateCartQty("-")}
              >
                -
              </Button>
              <Typography>&nbsp;{product.cartQuantity}&nbsp;</Typography>
              <Button
                type='button'
                size='small'
                onClick={() => handleUpdateCartQty("+")}
              >
                +
              </Button>
            </div>
            <Button
              variant='contained'
              type='button'
              color='secondary'
              onClick={() => handleRemoveFromCart(product._id)}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;

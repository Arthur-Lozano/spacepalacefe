import React, { useEffect } from "react";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./cartpage-styles";

import { clearCart } from "../store/cart-store";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.itemList);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const classes = useStyles();
  const dispatch = useDispatch();

  const renderEmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart,
      <Link className={classes.link} to='/products'>
        start adding some
      </Link>
      !
    </Typography>
  );

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.length > 0 ? (
        <Grid container spacing={3}>
          {cart.map((product) => (
            <Grid item xs={12} sm={4} key={product._id}>
              <Cart product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        renderEmptyCart()
      )}
      <div className={classes.cardDetails}>
        <Typography variant='h4'>Subtotal: {subtotal}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to='/checkout'
            size='large'
            type='button'
            variant='contained'
            color='primary'
          >
            Checkout
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;

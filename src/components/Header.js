import React from "react";
import { IconButton, Badge, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user-store";
import './header.css'
const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const cart = useSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();

  const style = {
    title: {
      width: "100%",
      display: "flex",
      fontFamily: "'Barlow', sans-serif",
      color: "black",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      // position: "fixed",
      // top: 0,
      // background: "ivory",
    },
    links: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-around",
      alignItems: "center",
      width: "50%",
      textDecoration: "none",
    },
    logout: {
      cursor: "pointer",
      color: "red",
    },
  };

  const logoutHandler = () => {
    console.log("Logout");
    dispatch(logout());
  };
  return (
    <div style={style.title}>
      <h1  className="title">S P A C E &nbsp;&nbsp; P A L A C E</h1>
      <ul style={style.links}>
        {!isLoggedIn ? (
          <li>
            <Button component={Link} to='/login'>
              LOGIN
            </Button>
          </li>
        ) : (
          <li>
            <Button component={Link} to='/account'>
              MY ACCOUNT
            </Button>
          </li>
        )}
        {!isLoggedIn ? (
          <li>
            <Button component={Link} to='/register'>
              REGISTER
            </Button>
          </li>
        ) : (
          <li>

            <Button component={Link} to='/user/orders'>

              MY ORDERS
            </Button>
          </li>
        )}
        <li>
          <Button component={Link} to='/products'>
            PRODUCTS
          </Button>
        </li>
        <li>
          <IconButton component={Link} to='/cart'>
            <Badge badgeContent={cart.length} showZero color='error'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

        </li>
        {isLoggedIn && (
          <Button color='secondary' onClick={logoutHandler}>
            LOGOUT
          </Button>
        )}
      </ul>
    </div>
  );
};

export default Header;

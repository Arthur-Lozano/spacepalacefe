import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user-store";
import './header.css'
const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const cart = useSelector((state) => state.cart);
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
            <Link  className="link" style={{ textDecoration: "none" }} to='/login'>
              LOGIN
            </Link>
          </li>
        ) : (
          <li>
            <Link className="link"
              style={{ textDecoration: "none", color: "black" }}
              to='/account'
            >
              MY ACCOUNT
            </Link>
          </li>
        )}
        {!isLoggedIn ? (
          <li>
            <Link className="link" style={{ textDecoration: "none" }} to='/register'>
              REGISTER
            </Link>
          </li>
        ) : (
          <li>
            <Link 
              style={{ textDecoration: "none", color: "black" }}
              to='/user/orders'
            >
              MY ORDERS
            </Link>
          </li>
        )}
        <li>
          <Link className="link" style={{ textDecoration: "none" }} to='/products'>
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link className="link" style={{ textDecoration: "none" }} to='/cart'>
            CART({cart.length})
          </Link>
        </li>
        {isLoggedIn && (
          <li style={style.logout} onClick={logoutHandler}>
            LOGOUT
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;

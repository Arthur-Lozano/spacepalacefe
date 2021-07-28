import React from "react";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((product) => (
        <Cart product={product} />
      ))}
    </div>
  );
};

export default CartPage;

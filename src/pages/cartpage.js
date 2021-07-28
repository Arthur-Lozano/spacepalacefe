import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default CartPage;

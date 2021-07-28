import React from "react";

const Cart = (props) => {
  const { product } = props;

  return (
    <div>
      <div>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.quantity > 0 ? "In Stock" : "Out of Stock"}</p>
        <select name='quantity'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='5+'>5+</option>
        </select>
        <button>Delete</button>
      </div>
      <div>
        <h3>Price</h3>
      </div>
    </div>
  );
};

export default Cart;

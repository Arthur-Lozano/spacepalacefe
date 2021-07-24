// import axios from "axios";



//  initial state 


let initialState = {
  cart: [],
  count: 0,
}
let newCart;


// REducer function //
export default function CartReducer(state = initialState, action) {
  
  // add to cart//

  let { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
    if (!state.cart.includes(payload)) {
        newCart = [...state.cart, payload]
      } else {
        newCart = [...state.cart]
      }
      return { cart: newCart, count:state.count +1  };

    /// remove from cart///
    case "REMOVE_FROM_CART":
    
    let updatedCart = state.cart.filter((item) => {
    if (item.name === payload.name ) {
     return false;
        } else {
          return true
        }
      })

      return { ...state, count:state.count -1, cart: [...updatedCart] }
    default: return state;
  }
}
// Action Creatord

export function addToCart(name) {
  if(name.inStock > 0){
        name.inStock --; 
        
      }
  return {
    
    type: "ADD_TO_CART",
    payload: name,
    

  }
}
// if(name.inStock > 0){
//     name.inStock --; 
//   }



//action create 
export function removeFromCart(name) {
  return {
    type: "REMOVE_FROM_CART",
    payload: name,
  }
}


















'use client'
import logHelper from "./logHelper";

export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};


export const addToCartTest = state => {

  const existing  = (JSON.parse(localStorage.getItem("cart")) !== null) ? JSON.parse(localStorage.getItem("cart")).cartItems : false;
    
  const shoppingCart = [];

  let cart = {"cartItems": shoppingCart}
  
  if(existing) {
      try {
      shoppingCart.push(...existing)
      } catch(err) { console.error('ERROR deserializing cart', err); }
    }
    shoppingCart.push(JSON.parse(state.cartItem));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

export const updateCart = (state) => {
  // // Calculate the items price
  // state.itemsPrice = addDecimals(
  //   state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  // );

  // // Calculate the shipping price
  // state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // // Calculate the tax price
  // state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // // Calculate the total price
  // state.totalPrice = (
  //   Number(state.itemsPrice) +
  //   Number(state.shippingPrice) +
  //   Number(state.taxPrice)
  // ).toFixed(2);

  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};


export const addToCart = (state) => {


  const existItem = state.cartItems.find((x) => x._id === item._id);

  if (existItem) {
    state.cartItems = state.cartItems.map((x) =>
      x._id === existItem._id ? item : x
    );
  } else {
    state.cartItems = [...state.cartItems, item];
  }
  return updateCart(state, item);
}

export const removeFromCart = (state, action) => {
  state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
  return updateCart(state);
}

export const saveShippingAddress = (state, action) => {
  state.shippingAddress = action.payload;
  localStorage.setItem('cart', JSON.stringify(state));
}

export const savePaymentMethod = (state, action) => {
  state.paymentMethod = action.payload;
  localStorage.setItem('cart', JSON.stringify(state));
}

export const clearCartItems = (state, action) => {
  state.cartItems = [];
  localStorage.setItem('cart', JSON.stringify(state));
}
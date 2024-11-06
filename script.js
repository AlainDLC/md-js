// importing moduel

/*
import * as ShoppingCart from "./shoppingCart.js";

import add, { cart } from "./shoppingCart.js";

console.log(cart);

const getLastPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPoset2 = await getLastPosts();
console.log(lastPoset2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 12;
  const totalPrice = 2132;
  const totalQuantity = 233;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} added to cart`);
  };

  const orderStock = (product, quantity) => {
    console.log(`${product} ${quantity} order from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart(2, "pizza");
*/

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
const state = {
  cart: [
    { product: "cheease", quantity: 5 },
    { product: "plop", quantity: 5 },
  ],
  user: { login: true },
};

const stateClone = Object.assign({}, state);

console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

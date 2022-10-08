import { ActionTypes } from "../contants/action-types";

const cartList = () => {
  const cartLocal = localStorage.getItem("bid-cart");
  let bid_cart = [];
  if (cartLocal) {
    bid_cart = JSON.parse(bid_cart);
  }
  return bid_cart;
};

const initialState = {
  products: [],
  cart: cartList(),
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCT:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.ADD_TO_CART:
      localStorage.setItem(
        "bid_cart",
        JSON.stringify({ ...state, cart: [...state.cart, payload] })
      );
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};
export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

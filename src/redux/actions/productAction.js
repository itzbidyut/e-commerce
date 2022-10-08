import axios from "axios";
import { ActionTypes } from "../contants/action-types";

export const fetchProducts = () => {
  return async function (dispatch) {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: ActionTypes.FETCH_PRODUCT,
      payload: response.data,
    });
  };
};

export const fetchProduct = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({
      type: ActionTypes.SELECTED_PRODUCTS,
      payload: response.data,
    });
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

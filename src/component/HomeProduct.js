import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

export default function HomeProduct() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="container homeContainer">
      <div className="row">
        <p className="cat_title" id="Men's_Clothing">
          Men's Clothing
        </p>
        {products ? (
          products
            .filter((item) => item.category === "men's clothing")
            .map((item) => <ProductItem item={item} />)
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>

      <div className="row">
        <p className="cat_title" id="Women's_Clothing">
          Women's Clothing
        </p>
        {products ? (
          products
            .filter((item) => item.category === "women's clothing")
            .map((item) => <ProductItem item={item} />)
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>

      <div className="row">
        <p className="cat_title" id="Jewelery">
          Jewelery
        </p>
        {products ? (
          products
            .filter((item) => item.category === "jewelery")
            .map((item) => <ProductItem item={item} />)
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>
      <div className="row">
        <p className="cat_title" id="Electronics">
          Electronics
        </p>
        {products ? (
          products
            .filter((item) => item.category === "electronics")
            .map((item) => <ProductItem item={item} />)
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>

      <div className="text-center mt-5">
        <Link to="/product">See all products</Link>
      </div>
    </div>
  );
}

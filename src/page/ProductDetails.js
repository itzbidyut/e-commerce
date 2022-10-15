import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productAction";
import { Puff } from "react-loader-spinner";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (id && id !== "") {
      dispatch(fetchProduct(id));
      return () => {
        dispatch(removeSelectedProduct());
      };
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="ProductDetailsPage">
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <div className="loader">
            <Puff
              height="80"
              width="80"
              radisu={1}
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left mr-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span className="">Back to Home</span>
            </Link>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={product.image}
                  className="img-fluid productImage"
                  alt={product.title}
                />
              </div>
              <div className="col-md-6">
                <p className="title">{product.title}</p>
                <p className="price">$ {product.price}</p>
                <p className="category">Category : {product.category}</p>
                <button
                  className="addtocart"
                  onClick={(e) => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <p className="description">{product.description}</p>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";

export default function ProductItem(props) {
  return (
    <div className="col-12 col-md-3 " key={props.item.id}>
      <Link to={`/product/${props.item.id}`}>
        <div className="productCard">
          <div className="text-center">
            <img
              src={props.item.image}
              alt="product"
              className="img-fluid productImg text-center"
            />
          </div>
          {props.item.title.length > 35 ? (
            <p className="productTitle">
              {props.item.title.substring(0, 35)}...
            </p>
          ) : (
            <p className="productTitle">{props.item.title}</p>
          )}

          <p className="productPrice">{props.item.price} $</p>
          <p className="productCategory">{props.item.category}</p>
          <p className="productRate">{props.item.rating.rate}</p>
        </div>
      </Link>
    </div>
  );
}

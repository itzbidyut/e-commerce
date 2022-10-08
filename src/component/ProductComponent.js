import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="row mt-5">
      {products ? (
        products.map((item) => (
          <div className="col-12 col-md-3 " key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div className="productCard">
                <div className="text-center">
                  <img
                    src={item.image}
                    alt="product"
                    className="img-fluid productImg text-center"
                  />
                </div>
                {item.title.length > 40 ? (
                  <p className="productTitle">
                    {item.title.substring(0, 40)}...
                  </p>
                ) : (
                  <p className="productTitle">{item.title}</p>
                )}

                <p className="productPrice">{item.price} $</p>
                <p className="productCategory">{item.category}</p>
                <p className="productRate">{item.rating.rate}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

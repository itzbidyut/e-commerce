import HomeProduct from "../component/HomeProduct";
import Category from "../component/Category";
import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="homePage">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="hero">
                <h1>Trands 2022</h1>
                <h4>A huge collection of all Products</h4>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="mt-5">
                <img
                  src="/images/ban_img.png"
                  alt="fashion"
                  className="banner-hero img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <HomeProduct />
    </div>
  );
}

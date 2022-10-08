import "./App.scss";
import Header from "./component/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductDetails from "./component/ProductDetails";
import Page404 from "./component/Page404";
import CartPage from "./component/CartPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

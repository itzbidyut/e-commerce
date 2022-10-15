import "./App.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./page/ProductList";
import ProductDetails from "./page/ProductDetails";
import Page404 from "./component/Page404";
import CartPage from "./page/CartPage";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

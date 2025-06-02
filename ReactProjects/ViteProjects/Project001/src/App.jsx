import { NavLink } from "react-router-dom";
import Home from "./Components/home";
import "./App.css";
import HeroSection from "./Components/Hero";
import Navigation from "./Components/Navigation";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./Components/Cart";
import React, { useEffect, useState } from "react";
import productList from "./Components/data";
import Auth from "./Components/Auth";
import Category from "./Components/Category";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Profile from "./Components/Profile";
import Search from "./Components/Search";

const App = () => {
  const [productId, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);
  // console.log('productId', productId)

  // console.log("filteredObject", filteredObject);

  useEffect(() => {
    const filteredObject = productList.filter(
      (product) => product.id == productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);
  }, [productId]);

  return (
    <div>
      {/* <createBrowserRouter> */}
      {/* <BrowserRouter> */}
      <Navigation cartAllProduct={cartAllProduct} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartAllProduct={cartAllProduct}
              setCartAllProduct={setCartAllProduct}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartAllProduct={cartAllProduct}
              setCartAllProduct={setCartAllProduct}
            />
          }
        />
        <Route path="/Auth" element={<Auth />}></Route>
        <Route
          path="/Category"
          element={
            <Category
              cartAllProduct={cartAllProduct}
              setCartAllProduct={setCartAllProduct}
            />
          }
        ></Route>

        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/Search" element={<Search cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* </createBrowserRouter> */}
    </div>
  );
};

export default App;

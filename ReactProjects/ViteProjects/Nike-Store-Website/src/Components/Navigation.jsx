import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navigation = ({ cartAllProduct }) => {
  const navigate = useNavigate();
  function carthandler() {
    navigate("/Cart");
  }

  function authenticate() {
    navigate("/Auth");
  }

  return (
    <nav className="container  sticky top-0 bg-white shadow-md p-4 z-50" px-5>
      <div className="Logo">
        <img src="/images/brand_logo.png" alt="logo" />

      </div> 
      
      
        
        
        

      <ul className="nav-btn">



      <NavLink
          className={(e) => {
            return e.isActive ? "grey" : "secondary-nav-btn-color";
          }}
          to="/"
        >
          <i class="fa-solid fa-house"></i> Home
        </NavLink>





      <NavLink className={(e) => {
            return e.isActive ? "grey" : "secondary-nav-btn-color";
          }}
          to="/Category"><i class="fa-solid fa-list"></i> Category</NavLink>



     










      <NavLink className={(e) => {
            return e.isActive ? "grey" : "secondary-nav-btn-color";
          }}
          to="/Search"><i class="fa-solid fa-magnifying-glass"></i> Search</NavLink>



        <NavLink
          className={(e) => {
            return e.isActive ? "grey" : "secondary-nav-btn-color";
          }}
          to="/AboutUs"
        >
          <i class="fa-solid fa-address-card"></i> About
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive ? "grey" : "secondary-nav-btn-color";
          }}
          to="/ContactUs"
        >
          <i class="fa-solid fa-address-book"></i> Contact
        </NavLink>




      </ul>

      <ul className="m-0 p-0 py-3 position-relative">



        
        <div className="cart-login">
          <NavLink
            className={(e) => {
              return e.isActive ? "grey" : "secondary-nav-btn-color";
            }}
            to="/Cart"
          >
            <button className="nav-btn-2" onClick={carthandler}>
              <i class="fa-solid fa-cart-shopping fs-3"></i> Cart



              <span
  className="text-decoration-none count rounded-pill text-dark position-absolute top-0 right-0"
  style={{ backgroundColor: "orange" }}
>
  {cartAllProduct.reduce((total, item) => total + (item.count || 1), 0)}
</span>






            </button>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "grey" : "secondary-nav-btn-color";
            }}
            to="/Auth"
          >
            <button className="nav-btn-2" onClick={authenticate}><i class="fa-solid fa-right-to-bracket"></i> Login</button>
          </NavLink>
        </div>
      </ul>
    </nav>
    //  0<RouterProvider router={router} />
  );
};

export default Navigation;

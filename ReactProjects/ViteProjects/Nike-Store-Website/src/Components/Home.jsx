import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import productList from "./data";
import HeroSection from "./Hero";
import toast, { Toaster } from "react-hot-toast";
// import Cart from "./Cart";

const Home = ({ setProductId,  cartAllProduct, setCartAllProduct }) => {
  // const Navigate = useNavigate();

  // const data = {
  //   id: 8,
  //   img: "https://i5.walmartimages.com/asr/f02e247b-12d6-4ed7-a5fa-45fcdec6bdf1.d4801b402256f77ff1b0326b60cab241.jpeg",
  //   price: "₹2999.0",
  //   model: "Air Max",
  //   name: "Nike",
  //   brand: "Nike Air Max",
  //   type: "shoes",
  //   description: "1 Year Warranty",
  // };

  const handleAddToCart = (id) => {
    const product = productList.find((p) => p.id === id);
    
    if (product) {
      setCartAllProduct((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        
        if (existingProduct) {
          // 🔹 Increase count of the existing product
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          );
        } else {
          // 🔹 Add a new product to the cart
          return [...prevCart, { ...product, count: 1 }];
        }
      });
  
      toast.success(`${product.brand} added to cart!`);
    }
  };



  // const handleAddToCart = (id) => {
  //   setProductId(id);
  //   // console.log("here is id", id);
  //   toast.success("Product Added Successfully !");

  //   // alert('Product Added', id);
  //   // console.log('clicked-on', id);
  //   // Navigate("/Cart");
  // };
  return (
    <div className="container-fluid px-5">
     <HeroSection setCartAllProduct={setCartAllProduct} />
     <br></br>
     <div className="text-stroke">
            <h2> RECOMMENDED PRODUCTS</h2>

            


          </div>

          <p class="scroll-up" onclick="scrollToTop()">↕ (⊙ˍ⊙)Scroll </p>

<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>
          
      <div className="home-container row gap-4 justify-content-center">
        <Toaster />
        {productList?.map((product, index) => {
          // console.log("product",product);
          return (
            <div
              className="product-card col-2 border rounded "
              key={product?.id}
            >
              <br></br>
              <div d-flex justify-content-center p-2>
                <img
                  src={product?.img}
                  alt="Product-image"
                  className="product-img product-size"
                />
                <div>
                  <div className="">
                    <p className="product-title brand-name">{product?.brand}</p>
                    {/* <p className="model" font-bold>
                      {data?.model}
                    </p> */}
                  </div>
                  <div>
                    <p className="product-price m-0">
                      {/* <span className="font-bold">₹</span> */}
                      {product?.price}
                    </p>
                  </div>
                  <div>
                    <button
                      className="add-to-cart-btn btn btn-primary"
                      onClick={() => handleAddToCart(product?.id)}
                    >
                      Add To Cart
                    </button>
                    {/* <button  Navlink to={"/Cart"}className="btn btn-primary">Add To Cart</button> */}
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br></br>
    </div>
  );
};

export default Home;

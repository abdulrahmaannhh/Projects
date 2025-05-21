import React, { useState } from "react";
import productList from "./data";
const Category = ({ cartAllProduct, setCartAllProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from productList
  const categories = ["All", ...new Set(productList.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartAllProduct((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: (item.count ?? 1) + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
    alert(`${product.brand} added to cart!`);
  };

  return (
    <div className="category-container">
      <h2 className="text-center mt-4">Explore Categories</h2>


      <p class="scroll-up" onclick="scrollToTop()">↕Scroll </p>

<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>

      {/* Category Filter Buttons */}
      <div className="d-flex justify-content-center gap-3 my-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="category-card col-md-4 mb-4" key={product.id}>
            <div className="card p-3 text-center shadow-sm">
              <img src={product.img} alt={product.brand} className="category-img img-fluid product-img" />
              <h5 className="category-title mt-3">{product.brand}</h5>
              <p className="category-price text-muted">{product.price}</p>
              <button className="category-btn btn btn-success" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <h4 className="text-center text-muted">No products available in this category.</h4>
      )}
    </div>
  );
};

export default Category;
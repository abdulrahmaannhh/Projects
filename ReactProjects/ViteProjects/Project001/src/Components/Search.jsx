import React, { useState } from "react";
import productList from "./data";

const Search = ({ cartAllProduct, setCartAllProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search input
  const filteredProducts = productList.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add product to cart function
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
    <div className="search-container">
      <h2 className="text-center">Search Products</h2>

      {/* Search Input */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Search Results */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="search-card col-md-4 mb-4" key={product.id}>
              <div className="card p-3 text-center shadow-sm">
                <img src={product.img} alt={product.brand} className="search-img img-fluid" />
                <h5 className="search-title mt-3">{product.brand}</h5>

                <p class="scroll-up" onclick="scrollToTop()">↕ (⊙ˍ⊙)Scroll </p>

<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>



                <p className="search-price text-muted">{product.price}</p>
                <button className="search-btn btn btn-success" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center text-muted">No products found.</h4>
        )}
      </div>
    </div>
  );
};

export default Search;
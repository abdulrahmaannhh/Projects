const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartAllProduct((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handlePayment = () => {
    alert(
      "Redirecting to payment process... Our team will contact you shortly."
    );
    // You can replace this with actual payment integration logic
  };

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct.map((product) => (
          <div className="col-8 border rounded d-flex gap-3" key={product.id}>
            <div className="p-1">
              <img
                src={product.img}
                alt={product.brand}
                className="cart-product-size"
              />
            </div>
            <div className="p-1 d-flex gap-3">
              <div>
                <h3>{product.brand}</h3>

                <p class="scroll-up" onclick="scrollToTop()">↕ (⊙ˍ⊙)Scroll </p>

<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>


                <p className="m-0 fs-5">{product.price}</p>
                <div className="d-flex gap-3 mt-1">
                  <p
                    className="m-0 border p-0 px-2 py-1 rounded pointer"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </p>
                  <p className="m-0">{product.count ?? 1}</p>
                  <p
                    className="m-0 border p-0 px-2 py-1 rounded pointer"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <p onClick={() => handleDeleteItem(product.id)}>
                  <i className="fa-solid fa-trash text-danger pointer"></i>
                </p>
              </div>
            </div>
          </div>
        ))}

        {cartAllProduct.reduce((total, item) => total + item.count, 0) === 0 && (
          <div className="col-12">
            <h2 className="text-center text-muted mt-4">
              Your cart is empty! Start adding your favorite products now.
            </h2>
          </div>
        )}

        {/* Payment Button - Only Shows if Cart is Not Empty */}
        {cartAllProduct.length > 0 && (
          <div className="col-12 text-center mt-3">
            <button
              className="btn btn-success px-4 py-2"
              onClick={handlePayment}
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import { NavLink, Link, useNavigate } from "react-router-dom";
import Category from "./Category";
import updatedCart from "./SponsoredData";

// import Cart from "./Cart";
// import Home from "./home";
const HeroSection = ({ setCartAllProduct }) => {
  const navigate = useNavigate();

  function categoriesOpen() {
    navigate("/Category");
  }

  // const handleAddToCart = (product) => {
  //   const newProduct = {

  //     id: 11,
  //   brand: "Nike Free RN FlyKnit Men",
  //   category: "Shoes",
  //   price: "₹ 2,449.00",
  //   img: "/images/Nike-Free-RN-FlyKnit-Men.png",
  //   description: "1 Year Warranty.",
  //   sponsored: true,
  //   name: "Sponsored Product",
  //   };
  //   if (!product) return; // Ensure product is not undefined

  //   setCartAllProduct((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);

  //     if (existingProduct) {
  //       // Increase count if product exists
  //       return prevCart.map((item) =>
  //         item.id === product.id ? { ...item, count: (item.count ?? 1) + 1 } : item
  //       );
  //     } else {
  //       // Add new product with count = 1
  //       return [...prevCart, { ...product, count: 1 }];
  //     }

  //   });

  //   toast.success(`${product.brand} added to cart!`);

  const handleAddToCart = (product) => {
    if (!product) return; // Ensure product is valid

    // Normal Product (Passed as `product`)
    const updatedProduct = {
      ...product,
      count: product.count ?? 1,
    };

    // Sponsored Product
    const newProduct = {
      id: 11,
      brand: "Nike Free RN FlyKnit Men",
      category: "Shoes",
      price: "₹ 2,449.00",
      img: "/images/Nike-Free-RN-FlyKnit-Men.png",
      description: "1 Year Warranty.",
      sponsored: true,
      name: "Sponsored Product",
      count: 1, // Ensure count is included
    };

    // setCartAllProduct((prevCart) => {
    //   // Check if products already exist in the cart
    //   const existingProduct = prevCart.find((item) => item.id === updatedProduct.id);
    //   const existingSponsored = prevCart.find((item) => item.id === newProduct.id);

    //   let updatedCart = prevCart;

    //   // Update or add the main product
    //   if (existingProduct) {
    //     updatedCart = updatedCart.map((item) =>
    //       item.id === updatedProduct.id ? { ...item, count: item.count + 1 } : item
    //     );
    //   } else {
    //     updatedCart = [...updatedCart, updatedProduct];
    //   }

    //   // Update or add the sponsored product
    //   if (existingSponsored) {
    //     updatedCart = updatedCart.map((item) =>
    //       item.id === newProduct.id ? { ...item, count: item.count + 1 } : item
    //     );
    //   } else {
    //     updatedCart = [...updatedCart, newProduct];
    //   }

    //   return updatedCart;
    // });

    // toast.success(`${product.brand} & Sponsored Product added to cart!`);

    setCartAllProduct((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find(
        (item) => item.id === newProduct.id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === newProduct.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, newProduct]; // Add new product if not in cart
    });
  };

  return (
    <div className="full-hero">
      <main className="hero">
        <div className="hero-content">
          <h6 className="text-transparent">
            <i>Sponsored</i> • Suggested for You
          </h6>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            ULTIMATE COMFORT, SUPERIOR SUPPORT, AND STYLISH DESIGN FOR EVERY
            STEP YOU TAKE.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="shoe-image" />
        </div>
      </main>

      <div className="sub-hero-cart d-flex ">
        
        <p className="hero-span-prize">
          <span style={{ fontWeight: "bold", color: "green" }}>₹ 2,449.00</span>{" "}
          &nbsp;
          <span style={{ textDecoration: "line-through", color: "red" }}>
            ₹ 4,295.00
          </span>{" "}
          &nbsp;
          <span style={{ color: "blue" }}>
            ({(((4295 - 2449) / 4295) * 100).toFixed(2)}% Off)
          </span>
        </p>
        <div className="hero-btn">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={categoriesOpen} className="secondary-btn">
            Category
          </button>
        </div>
        <div className="also-af shoping d-flex">
          <p>Also Available On</p>
          <div className="brand-icons">
            <Link to="https://www.amazon.in/Nike-Swift-3-University-Running-Glass-White-Dr2695-600-9Uk/dp/B0CQP9Q45D/ref=sr_1_1?crid=17A78OKFO5O6X&dib=eyJ2IjoiMSJ9.XZ17rf1CqrUkK7LgnFOj6izYLHWKTNgNhTddoaR9av6MXJBSGBYTc6Z7ZwgJ-xwkh1GxAp9hWGKblDyRgPRL_zhp_2ClRxzDatb3d64tOVOsUn2G78cnDybOxb0IjThfXOGZ2O147gLbQ--ySWCyFbtIUtUuNJkA840x5hdMrBPzYIEOrZhpGKGh3805on8KkBY_sitqMa-PHo11UyN-9crvTDMnav8i65kXq1tQAeo35wOK0XWDv-z45NaenYwA6Q45ObyfLUoOX4LRCczCKFyUgO79iv2wOLc9aVSTbNPL9MTevuMYWJCkTkhxJhqzDj10uoSXzvonlHiZ0UfYzYNEV34MQYHGxGSgLGBrNEDolYmWRSMX0O---YT1U8MM9jpJQx0ZM2fG85qB7ZMiZe-zBI2gEZZTgKuTtrpdQhB7FghYc9to9OWzXjsF1FWm.hhAdMBgGNfVXYWhNTVhV8AvoihhlGy7URse1CsMvXX4&dib_tag=se&keywords=nike+shoes+for+man+red&nsdOptOutParam=true&qid=1739701868&sprefix=nike+shoes+for+man+red%2Caps%2C286&sr=8-1">
              {" "}
              <img src="/images/amazon.png" alt="Amazon-logo" />
            </Link>

            <Link to="https://www.flipkart.com/nike-air-zoom-pegasus-40-running-shoes-men/p/itm6bb72fd90e940?pid=SHOGYG5EAHH3N8ZY&lid=LSTSHOGYG5EAHH3N8ZYEHHCWN&marketplace=FLIPKART&q=Nike+Free+RN+FlyKnit+Men+red&store=osp%2Fcil%2F1cu&srno=s_1_13&otracker=search&otracker1=search&fm=Search&iid=8cd240a8-d958-48c3-aec2-ee1c1f6d9082.SHOGYG5EAHH3N8ZY.SEARCH&ppt=sp&ppn=sp&ssid=5lbty2rrzk0000001739701746100&qH=f0dd505994812aa7">
              {" "}
              <img src="/images/flipkart.png" alt="Flipkart-logo" />
            </Link>
          </div>

          {/* <br></br> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

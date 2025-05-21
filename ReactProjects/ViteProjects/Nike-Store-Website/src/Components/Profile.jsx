import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

  // Load the shipping address from localStorage if available
  const [shippingAddress, setShippingAddress] = useState(
    JSON.parse(localStorage.getItem("shippingAddress")) || {
      street: "",
      city: "",
      state: "",
      country: "India", // Default country
      contactNumber: currentUser.contactNumber || "",
      email: currentUser.email || "",
      landmark: "",
      addressType: "home",
    }
  );

  const [isEditing, setIsEditing] = useState(false);

  // Handle input change for shipping address
  const handleAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  // Save shipping address to localStorage
  const handleSaveAddress = () => {
    localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
    alert("Shipping Address Saved Successfully!");
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p><strong>First Name:</strong> {currentUser.firstName}</p>
      <p><strong>Last Name:</strong> {currentUser.lastName}</p>
      <p><strong>Email:</strong> {currentUser.email}</p>
      <p><strong>Contact Number:</strong> {currentUser.contactNumber}</p>

      <h3>Shipping Address</h3>

      <p class="scroll-up" onclick="scrollToTop()">↕ (⊙ˍ⊙)Scroll </p>

<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>



      {/* If Editing, Show Form */}
      {isEditing ? (
        <div className="shipping-address-form">
          <label>Street Address</label>
          <input
            type="text"
            name="street"
            placeholder="Enter Street Address"
            value={shippingAddress.street}
            onChange={handleAddressChange}
          />
          
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={shippingAddress.city}
            onChange={handleAddressChange}
          />
          
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter State"
            value={shippingAddress.state}
            onChange={handleAddressChange}
          />
          
          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter Country"
            value={shippingAddress.country}
            onChange={handleAddressChange}
          />
          
          <label>Landmark (optional)</label>
          <input
            type="text"
            name="landmark"
            placeholder="Enter Landmark"
            value={shippingAddress.landmark}
            onChange={handleAddressChange}
          />
          
          <label>Address Type</label>
          <select
            name="addressType"
            value={shippingAddress.addressType}
            onChange={handleAddressChange}
          >
            <option value="home">Home</option>
            <option value="office">Office</option>
          </select>
<div className="save-cancel-btn">
          <button onClick={handleSaveAddress}>Save Address</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button></div>
        </div>
      ) : (
        // Show Saved Address
        <div className="saved-shipping-address">
          {shippingAddress.street ? (
            <>
              <p><strong>Street:</strong> {shippingAddress.street}</p>
              <p><strong>City:</strong> {shippingAddress.city}</p>
              <p><strong>State:</strong> {shippingAddress.state}</p>
              <p><strong>Country:</strong> {shippingAddress.country}</p>
              <p><strong>Landmark:</strong> {shippingAddress.landmark}</p>
              <p><strong>Address Type:</strong> {shippingAddress.addressType}</p>
              <button onClick={() => setIsEditing(true)}>Edit Address</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Add Shipping Address</button>
          )}
        </div>
      )}

      {/* Go Home button */}
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Profile;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    countryCode: "+91", // Default to India
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      setIsLoggedIn(true);
      setCurrentUser(loggedUser);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sign-Up Function (Stores Multiple Users)
  const handleSignUp = () => {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      contactNumber,
      countryCode,
    } = formData;

    // Basic validation
    if (!email || !password || !firstName || !lastName || !contactNumber || !countryCode) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Prevent duplicate accounts
    if (users.some((user) => user.email === email)) {
      alert("User already exists. Please sign in.");
      return;
    }

    // Save new user with country code and contact number
    const newUser = {
      firstName,
      lastName,
      email,
      contactNumber: `${countryCode} ${contactNumber}`,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(newUser));

    setIsLoggedIn(true);
    setCurrentUser(newUser);
    alert("Account created successfully!");
    navigate("/"); // Redirect to Home
  };

  // Sign-In Function
  const handleSignIn = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    const foundUser = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      setIsLoggedIn(true);
      setCurrentUser(foundUser);
      alert("Login successful! Redirecting...");
      navigate("/"); // Redirect to Home
    } else {
      alert("Invalid email or password.");
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
    alert("You have logged out.");
  };

  // Profile Button Click (Navigating to Profile Page)
  const handleProfile = () => {
    navigate("/profile"); // This will navigate to the Profile page
  };

  return (
    <div className="auth-container">
      {!isLoggedIn ? (
        <div className="auth-form">
          <h2>{showSignUp ? "Sign Up" : "Sign In"}</h2>

          {/* Sign Up Form */}
          {showSignUp && (
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
              <div className="contact-number-container">
                {/* Country Code Dropdown */}
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                  {/* Add more country codes here */}
                </select>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleInputChange}
                required
              />
              <button onClick={handleSignUp}>Sign Up</button>
            </div>
          )}

          {/* Sign In Form */}
          {!showSignUp && (
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          )}

          <p onClick={() => setShowSignUp(!showSignUp)} className="toggle-form">
            {showSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
        </div>
      ) : (
        <div className="welcome-section">
          <h2>Welcome, {currentUser.firstName} {currentUser.lastName}!</h2>
          <p>Email: {currentUser.email}</p>
          <p>Contact: {currentUser.contactNumber}</p>
          
          {/* Profile Button */}


          <div className="fixcenter ">

          <button onClick={handleProfile}>Go to Profile</button>

          <button onClick={handleLogout}>Logout</button>
          </div>




        </div>
      )}
    </div>
  );
};

export default Auth;
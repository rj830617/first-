import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  Isdisable,
  setIsdisable,
  setuserdetail,
  userdetail,
  Product,
  setProduct,
  filterproductDetails,
  setLoginsuccess,
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (Y) => {
    const value = Y.target.value.toLowerCase();
    setSearchTerm(value);
    const data = filterproductDetails.filter(
      (e) =>
        e?.title?.toLowerCase().includes(value) ||
        e.category.toLowerCase().includes(value)
    );
    setProduct(data);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setProduct(filterproductDetails);
  };

  const loginLogOutClickHandler = (str) => {
    alert(str);
    if (str === "Login") {
      setIsdisable((prev) => !prev);
      navigate("/login");
    } else {
      setIsdisable((prev) => !prev);
      setLoginsuccess(false);
      navigate("/");
    }
  };

  const navigateToUserPage = () => {
    navigate("/user");
  };

  return (
    <>
      <nav>
        <h1>OLX</h1>
        <input
          type="text"
          placeholder="Search your product"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Admin/*">Add Product</Link>
          </li>
          <li>
            <Link to="/card">Cart</Link>
          </li>
          <button
            onClick={() => loginLogOutClickHandler(Isdisable ? "Login" : "Logout")}
          >
            {Isdisable ? "Login" : "Logout"}
          </button>
        </ul>
        <select required onChange={handleChange}>
          <option value="">Select a category</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
          <option value="cars">Cars</option>
          <option value="bike">Bike</option>
          <option value="mobile">Mobile</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jewelery">Jewelery</option>
        </select>
        <button onClick={resetFilters}>Reset</button>

        {/* User logo */}
        <img src="user-logo.png" alt="User Logo" className="user-logo" />
        <h1 onClick={navigateToUserPage}>{userdetail}</h1>
      </nav>
    </>
  );
};

export default Navbar;

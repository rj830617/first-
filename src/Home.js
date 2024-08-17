import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = ({ Isdisable, setIsdisable,
  setuserdetail, userdetail, Product,
  setProduct, filterproductDetails, setLoginsuccess,
  Pagedetail, setPagedetail }) => {
  const navigate = useNavigate();

  const page = (e) => {
    setPagedetail([...Pagedetail, e]);
    navigate("/productpage"); // Removed the extra space
  };

  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to Our Store</h1>
      <Navbar Isdisable={Isdisable}
        setIsdisable={setIsdisable}
        setuserdetail={setuserdetail}
        filterproductDetails={filterproductDetails}
        Product={Product}
        setProduct={setProduct}
        setLoginsuccess={setLoginsuccess}
        userdetail={userdetail}
      />

      <div className="product-grid">
        {Product.map((e, i) => (
          <div key={i} className="product-card" >
            <img src={e.image} alt={e.productName} className="product-image" onClick={() => page(e)} />
            <div className="product-details">
              <h2 className="product-name">{e.title}</h2>
              <p className="product-info"><strong>Price</strong>: ${e.price}</p>
              <p className="product-info"><strong>Date</strong>: {e.purchaseDate}</p>
              <p className="product-info"><strong>Category</strong>: {e.category}</p>
              {/* <p className="product-info"><strong>Description</strong>: {e.description}</p> */}
              <p className="product-info"><strong>address</strong>: {e.address}</p>
              <p className="product-info"><strong>contact</strong>: {e.contact}</p>
            </div>
            <div className="add_to_card_test">
              <button className="add-to-cart-btn" onClick={()=>{setPagedetail([...Pagedetail, e])
                alert("your product is added")
              }} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

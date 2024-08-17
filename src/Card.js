import React from "react";
import "./Productpage.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Cart = ({ Pagedetail}) => {
  const navigate = useNavigate()
  const handlechange=()=>{
   navigate("/")
  }
  const service=()=>{
    alert("service will soon available")
  }
  return (
    <>
      {Pagedetail.map((e, i) => (
        <div key={i} className="product-container">
          <img src={e.image} alt={e.productname} className="product-image" />
          <div className="product-details">
            <h2>Product: {e.title}</h2>
            <p>Category: {e.category}</p>
            <p>Description: {e.description}</p>
            <p className="product-price">Price: ${e.price}</p>
            <button onClick={service}>buy now</button>
          </div>
        </div>
      ))}
      <button onClick={handlechange}> home page</button>
      
    </>
  );
};

export default Cart;

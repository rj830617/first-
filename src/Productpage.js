import React from "react";
import "./Productpage.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Productpage = ({ Pagedetail,setPagedetail}) => {
  const navigate = useNavigate()
  const handlechange=()=>{
   setPagedetail([])
   navigate("/")
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
          </div>
        </div>
      ))}
      <button onClick={handlechange}> home page</button>
      <button>add to cart</button>
    </>
  );
};

export default Productpage;

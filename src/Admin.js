import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"

const Admin = ({ Product, setProduct,Information,setInformation}) => {
  const [Image, setImage] = useState(null);
  const navigate = useNavigate(); // Renamed to follow camelCase convention

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    let obj = {
      image: Image,
      title: e.target[0].value,
      category: e.target[2].value,
      description: e.target[3].value,
      address:e.target.address.value,
      contact:e.target.contact.value
    };
    setInformation([...Information,obj])

    setProduct([...Product, obj]);
    e.target.reset(); // Reset the form after submission
    navigate("/"); // Use lowercase 'navigate'
  };

  return (
    <>
    <div className="admin-container">
      <h1>Welcome to the admin portal</h1>
      <form onSubmit={handleChange}>
        <label>Product Name</label>
        <input placeholder="Enter your product name" required />

        <label>Product Image</label>
        <input type="file" onChange={handleImageChange} required />

        <label>Category</label>
        <select required>
          <option value="" disabled selected>
            Select a category
          </option>
          <option value="furniture">Furniture</option>
          <option value="electronics">electronics</option>
          <option value="cars">Cars</option>
          <option value="bike">Bike</option>
          <option value="mobile">Mobile</option>
          <option value={"men's clothing"}>men's clothing  </option>
        <option value={"women's clothing"}>women's clothing </option>
        <option value={"jewelery"}> jewelery </option>
        </select>

        <label>Product Description</label>
        <input
          type="text"
          placeholder="Enter your product description"
          required
        />
        <label>Address</label>
        <input type="text" placeholder="enter your address here" name="address"></input>
        <label>contact no.</label>
        <input type="number" minLength={10} name="contact"></input>

        <button type="submit">Submit your data</button>
      </form>
      </div>
    </>
  );
};

export default Admin;

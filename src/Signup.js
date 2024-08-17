import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [data, setData] = useState([]);
  const [Pass, setPass] = useState([]);
  const [Name,setName]=useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    console.log("hii")
    const form = e.target;
    const newUser = {
      
      username: form.username.value,
      password: form.password.value,
      rePassword: form.rePassword.value,
      date: form.dob.value,
    };

    const storedata = localStorage.getItem("username");
    const setstoredata = storedata ? JSON.parse(storedata) : [];

    if (setstoredata.includes(newUser.username)) {
      alert("Username already exists");
      return;
    }

    if (newUser.password !== newUser.rePassword) {
      alert("Passwords do not match!");
      return;
    }

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!passwordRegex.test(newUser.password)) {
    //   alert(
    //     "Password must be at least 8 characters long and contain at least one letter and one number."
    //   );
    //   return;
    // }

    const storepass = [...Pass, newUser.password];
    const updatedItems = [...data, newUser.username];
    const storename=[...Name,newUser.name]
    setData(updatedItems);
    setPass(storepass);
    setName(storename);
   
    localStorage.setItem("username", JSON.stringify(updatedItems));
    localStorage.setItem("password", JSON.stringify(storepass));
    localStorage.setItem("Name", JSON.stringify(storename));

    form.reset();
    alert("successfull")
    navigate("/Admin/*")
  };

  return (
    <div className="signup-container">
      
      <div> 
        <h3>Welcome to the signup</h3>
      </div>

      <div>
        <form onSubmit={handleChange}>
          

      <div className="UsernameSection">    
        <label>Username</label>
        <input type="text" name="username" placeholder="Please Enter Your Username" required  className="usernameInput"/>
      </div>


          <label>Password</label>
          <div  className="password-input">
          <input name="password" placeholder="Password" required className="PasswordInput"/>
            
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="visibility-toggle"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>


          <label>Re-password</label>
          <div style={{ position: "relative" }}>
            <input
              type={rePasswordVisible ? "text" : "password"}
              name="rePassword"
              placeholder="Retype Your Password"
              style={{ width: "100%" }}
              required
            />
            <button
              type="button"
              onClick={() => setRePasswordVisible(!rePasswordVisible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {rePasswordVisible ? "🙈" : "👁️"}
            </button>
          </div>
          <label>Enter your DOB</label>
          <input type="date" name="dob" placeholder="enter your DOB" required />
          <button type="submit">Submit your data haha</button>
        </form>
        <p>
          Already have an account?
          <button style={{ marginLeft: "5px" }}>
            <Link to="/Admin/*">Login</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;

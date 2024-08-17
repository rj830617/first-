import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Userloginsection from "./Userloginsection";
import Login from "./Login";
import Signup from "./Signup";
import Productpage from "./Productpage";
import Card from "./Card";
import User from "./User";
const App = () => {
  let [Loginsuccess, setLoginsuccess] = useState(false);
  let [Product, setProduct] = useState([]);
  let [filterproductDetails, setFilterproductDetails] = useState([]);
  let [Pagedetail, setPagedetail] = useState([]);
  let [userdetail, setuserdetail] = useState("")
  let [Isdisable, setIsdisable] = useState(true)
  let [Information,setInformation]=useState([])
  

  const api = async () => {
    const apidata = await fetch("https://fakestoreapi.com/products");
    const response = await apidata.json();
    setProduct(response);
    setFilterproductDetails(response);
  };

  useEffect(() => {
    api();
  }, []);

  function userlogin() {
    return Loginsuccess ? <Admin Product={Product} setProduct={setProduct}  Information={Information} setInformation={setInformation}/> : <Userloginsection
      setIsdisable={setIsdisable}
      setuserdetail={setuserdetail} setLoginsuccess={setLoginsuccess} />;
  }

  return (
    <BrowserRouter>
      <div>
        <center>
          <Routes>
            <Route
              path="/"
              element={<Home Isdisable={Isdisable}
                setIsdisable={setIsdisable}
                setuserdetail={setuserdetail}
                userdetail={userdetail}
                filterproductDetails={filterproductDetails}
                Product={Product} setProduct={setProduct}
                setLoginsuccess={setLoginsuccess}
                setPagedetail={setPagedetail} Pagedetail={Pagedetail} />}
            />
            <Route path="/Admin/*" element={userlogin()} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login  setuserdetail={setuserdetail} setIsdisable={setIsdisable} setLoginsuccess={setLoginsuccess} />} />
            <Route path="/productpage" element={<Productpage Pagedetail={Pagedetail} setPagedetail={setPagedetail} />} />
            <Route path="/card" element={<Card Pagedetail={Pagedetail} setPagedetail={setPagedetail} />} ></Route>
            <Route path="/user" element={<User Information={Information} Product={Product} setProduct={setProduct}setInformation={setInformation}/> }></Route>
          </Routes>
        </center>
      </div>
    </BrowserRouter>
  );
};

export default App;

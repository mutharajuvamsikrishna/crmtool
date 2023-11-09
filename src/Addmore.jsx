import React, { useState,useEffect } from 'react';
import { useLocation, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';
import { postUserAddmore } from './Services/Api';
const Addmore=() =>{
  
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("Asia");
  const [empid, setEmpid] = useState("");
  const [city, setCity] = useState("");
  
  const location = useLocation();
  const data = location.state.data;
  const email=data.email;

const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data1 = {
      email: email,
      gender: gender,
      country: country,
      region: region,
      empid: empid,
      city: city,
    };
    var v45=/^[a-zA-Z\s]*$/;
    if (!data1.country.match(v45)) {
      alert("Country Alphabets Only");

      return false;
    }
    if (!data1.city.match(v45)) {
      alert("City Alphabets Only");

      return false;
    }
  //  axios
   //   .post("http://localhost:1279/addmore", data1)
   postUserAddmore(data1)
      .then((response) => {
        if (response.data === "addmoredone") {
          alert("Details Changed SuccessFully")
       
        
        } 
        else{
          navigate("/regfail")
        }
      })
     
      .catch((error) => {
        console.error(error);
        alert("An error occurred.");
      });
    
  }
 const handleSubmit2=()=>{
  navigate("/profile", { state: { data: data } });
  }

  return (
    <div style={{ backgroundColor: 'lightgray', minHeight: "99vh" }}>
      <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={()=>handleSubmit2("profile")}
    >
      <CgProfile
        style={{
          height: "50px",
          width: "50px",
          color:"blue"
        }} />
    </div>
      
      <h2 className='text-center' style={{ color: 'blue' }}>Add More Details   </h2>
     
      <center>
        <div className='addmore'>
          <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
            <div className="form-group">
              <br />
              <label>Employee ID</label>
              <input
                type="text"
                className="form-control"
                value={empid}
                onChange={(e) => setEmpid(e.target.value)}
                autoComplete="empid"
                placeholder='Enter Employee ID'
                required
              />
            </div>
            <div className="form-group">
              <br />
              <label>Gender</label>
              <select
              name="gender"
                style={{ color: 'green', appearance: 'auto' }}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option> 
              </select>
            </div>
            <div className="form-group">
              <br />
              <label>Continent/Region</label>
              <select
                style={{ color: "green", appearance: "auto" }}
                name="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="form-control"
              >
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="Antarctica">Antarctica</option>
              </select>
            </div>
            <div className="form-group">
              <br />
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder='Enter Country'
                autoComplete="Enter Country"
                required
              />
            </div>
            <div className="form-group">
              <br />
              <label>City</label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter City'
                autoComplete="city"
                required
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
             Submit
            </button>
          </form>
          <br />
        </div>
       
          <a href="javascript:history.go(-1)">Go Back</a>
      </center>
    </div>
  );
}
export default Addmore;

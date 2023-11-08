import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { putAdminPasswordChange } from "./Services/Api";
const AdminPasswordChange = () => {
  const [cnpassword, setCnpassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Move this line before any references to 'location'


  const email = location.state.data.email; // Now you can access 'location'

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
      cnpassword: cnpassword,
    };

    var v1 = data.password;
    var v2 = data.cnpassword;
    if (v1 != v2) {
      alert("Password doesn't Match To Confirm Password");
      return false;
    }

   // axios
   //   .put("http://localhost:1279/adminchangepassword1", data)
   putAdminPasswordChange(data)
      .then((response) => {
        if (response.data === "adminchangepassword") {
          
          navigate({
            pathname: "/adminsuccess",
            state: { data: data }, // Pass the data object as state
          });
        } else {
          navigate("/Invalidcredits");
          
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div style={{ backgroundColor: "#f0f2f5", height: "100vh" }}>
      <center>
       
        <br />
        <br />
        <br />
        <br />
        
        <h2>Change Password</h2>
        <br/>
        <div className="default" style={{backgroundColor:"skyblue",minHeight:"40vh",width:"40%"}}>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
           <br/>
           <label>New Password</label>
           <p></p>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter New Password'
              autoComplete="off"
              style={{width:"40%"}}
              required
            />
          </div>
          <div className="form-group">
           <br/> <br />
        
           <label>Confirm New Password</label>
           <p></p>
            <input
              type="password"
              className="form-control"
              id="cnpassword"
              value={cnpassword}
              onChange={(e) => setCnpassword(e.target.value)}
              placeholder='Confirm New Password'
              autoComplete="off"
              style={{width:"40%"}}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Change Password</button>
        </form>
        <br/>
        </div>
        <br />
        <br />
        <a href="javascript:history.go(-1)">Go Back</a>
        
      </center>
    
    </div>
  );
};

export default AdminPasswordChange;

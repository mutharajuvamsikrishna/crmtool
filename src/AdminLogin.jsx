import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:1279/adminloginform", data)
      .then((response) => {
        if (response.data === "adminlogin") {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          navigate("/viewalldetails", { state: { data: data } }); // Use navigate to change the route
        } else {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          alert("Invalid Credits")
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div style={{backgroundColor:"lightyellow",minHeight:"99vh"}}>
      <center>
        <br /><br /><br /><br /><br /><br />
        <div>
        <h2>Login With ONiE Soft</h2>
        <br/>  <br/>
        <form onSubmit={handleSubmit}>
         
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email' placeholder='Enter Your Email'required />
               
            <br/>   <br/>
               
                
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='new-password'placeholder='Enter Your Password' required />
             
                  <br/>  
          <br />
          <input type="submit" value="Login" style={{ color: 'green' }} />
        </form>
       
        <br/><br/>
       <Link to="/forgetpassword">ChangePassword/ForgetPassword</Link>
       </div>
        <br /><br />
        <a href="/reg">Go Back</a>
      </center>
    </div>
  );
};

export default AdminLogin;

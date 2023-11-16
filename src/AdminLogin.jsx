import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { postAdminLogin } from './Services/Api';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    var v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&@#]).{6,}/; 
    if(!data.password.match(v)){
      alert("Password Should Minimum 6 Digits,Should have at least one uppercase and  Lowercase,One Numeric And Special Symbols Like @,&,*,#")
      return false;
    }
   // axios
    //  .post('http://localhost:1279/adminloginform', data)
    postAdminLogin(data)
      .then((response) => {
        if (response.data === "adminlogin") {
          
          navigate("/viewalldetails", { state: { data: data } }); // Use navigate to change the route
        } else {
          
        alert("Invalid credentials")
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
const handleSubmit1=()=>{
navigate("/admin")
}
  return (
    <div style={{backgroundColor:"#f0f2f5",minHeight:"99vh"}}>
      <center>
        <br /><br /><br /><br /><br />
        <div>
        <h2>Login to CRM System</h2>
        <br/>  <br/>
        <form onSubmit={handleSubmit}>
         
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email' placeholder='Enter Email'style={{width:"20%"}}required />
               
            <br/>   <br/>
               
                
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='new-password'placeholder='Enter Password'style={{width:"20%"}} required />
             
                  <br/> 
          <br />
          <button className='btn btn-primary ' type="submit" style={{width:"20%",fontSize:"18px"}}>Log In</button>
        </form>
       
        <br/>
        <Link to="/adminforgetpassword">Forget Password?</Link>
       </div>
       <div>
       <br/>
<button className='btn btn-success' onClick={handleSubmit1} >Create New Account</button>
       </div>
      
      </center>
    </div>
  );
};

export default AdminLogin;
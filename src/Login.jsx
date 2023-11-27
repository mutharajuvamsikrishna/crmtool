import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Application.css";
import { postUserLogin } from './Services/Api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [showPassword,setShowPassword]=useState(false);
  const navigate = useNavigate(); // Use useNavigate to get the navigate function
const setResponse=(type)=>{
 if(showPassword===true){
  setShowPassword(false)
 }
 else{
  setShowPassword(true)
 }
}
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
  //  axios
     // .post('http://localhost:1279/loginform', data)
     postUserLogin(data)
      .then((response) => {
        if (response.data === "personaldetails1") {
          
          navigate("/loginsucess", { state: { data: data } }); // Use navigate to change the route
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
navigate("/register")
}
return (
  <div style={{backgroundColor:"#f0f2f5",minHeight:"99vh"}}>
    <center>
     
      <div style={{paddingTop:"8%"}}>
      <h2 style={{color:"blue"}}>Login to CRM System</h2>
      <br/>  <br/>
      <form onSubmit={handleSubmit}>
       
                <input type="email" value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} autoComplete='email' placeholder='Enter Email'style={{width:"20%"}}required />
             
          <br/>   
             
              
<input type={showPassword ? 'text' : 'password'} value={password}  className='form-control' onChange={(e) => setPassword(e.target.value)} autoComplete='new-password'placeholder='Enter Password'style={{width:"20%"}} required />       
<br/>
<button type="button" style={{height:"40px",width:"60px",border: "2px solid #3498db",}} className='btn btn-' onClick={()=>setResponse(showPassword)}>{showPassword ? 'Hide':'Show'}</button>
                <br/> 
        <br />
        <button className='btn btn-primary ' type="submit" style={{width:"20%",fontSize:"18px"}}>Log In</button>
      </form>
     
      <br/>
      <Link to="/forgetpassword">Forget Password?</Link>
     </div>
     <div>
     <br/>
<button className='btn btn-success' onClick={handleSubmit1} >Create New Account</button>
     </div>
    
    </center>
  </div>
);

};

export default Login;
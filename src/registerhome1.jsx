import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Reg1 = () => {
  const navigate=useNavigate();
  const bgStyle = {
    backgroundImage: 'url("https://oniesoft.com/images/oniesoft-final.png")',
    backgroundSize: 'cover',
    opacity:0.1,
    width: '100%', // Set the width of the container if needed
    height: '100vh', // Set the height of the container if needed
    position:"absolute",
    top:0,
    left:0
  };
const handleNavigate=(type)=>{
  if(type==="register"){
    navigate("/register")
  }
  else{
    navigate("/login")
  }
}
  return (
    <div style={{ backgroundColor: '', height: "100vh" }}>
      <div style={bgStyle}/>
      <div style={{opacity:0.9}}>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
      <center>
        <h1 style={{ color: 'green' }}>For ONiE Soft Customers</h1>
        <br />
      <button className='btn btn-primary circle-button' onClick={()=>handleNavigate("register")}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn btn-primary' onClick={()=>handleNavigate("login")}>Login</button>
      </center>
      </div>
    </div>
  );
};

export default Reg1;

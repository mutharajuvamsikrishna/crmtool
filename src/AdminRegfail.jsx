import React from 'react'
import {  Link } from 'react-router-dom';
export default function AdminRegfail() {
  return (
    <div>
<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <center>
        <h1 style={{ color: 'green' }}>Your Register Already</h1>
       <br/><br/>
       <Link to="/adminlogin">Login</Link>
       <br/><br/>
       <Link to="/admin">Go Back</Link>
      </center>







    </div>
  )
}

import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const TagRegister = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [ename, setEname] = useState("");
  const [mob, setMob] = useState("");
  const [password, setPassword] = useState("");
  const [cnpassword, setCnPassword] = useState("");
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      email: email,
      ename: ename,
      mob: mob,
      password: password,
      cnpassword: cnpassword,
    };
    var v45 = /^[a-zA-Z\s]*$/;
    var v1 = data.password;
    var v2 = data.cnpassword;
    if (!data.ename.match(v45)) {
      alert("Name Alphabets Only");

      return false;
    }

    if (data.mob.length != 10) {
      alert("Mobile Number is 10 Digits only");
      return false;
    }
    if (v1 != v2) {
      alert("Password doesn't Match To Confirm Password");
      return false;
    }
    setLoading(true)
    axios
      .post("http://localhost:1279/adminregister", data)
      .then((response) => {
        if (response.data === "adminotp1") {
          

          navigate("/adminotp", { state: { data: data } }); // Use navigate to change the route
        } else {
          
          navigate("/adminregfail");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
  if (loading) {
    return <div><br/><br/><br></br><br/><br/><center><h1>Loading.....</h1></center></div>;
  }
  return (
    <div style={{backgroundColor:'lightgray', minHeight:"99vh"}}>
      <center>
        <br />
        <div  className="default">
        <h2 style={{color:'green'}}>Sign Up for CRM System</h2>
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div className="form-group">
          <br/>
          <label>Employee ID</label>
            <input
              type="text"
              className="form-control"
              id="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              autoComplete="ID"
              placeholder='Enter Employee ID'
              required
            />
          </div>
          <div className="form-group">
          <br/>
          <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder='Enter Email'
              required
            />
          </div>
          <div className="form-group">
          <br/>
          <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={ename}
              onChange={(e) => setEname(e.target.value)}
              placeholder='Enter Name'
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group">
           <br/>
           <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="mob"
              value={mob}
              onChange={(e) => setMob(e.target.value)}
              autoComplete="tel"
              placeholder='Enter Mobile Number'
              required
            />
          </div>
          <div className="form-group">
           <br/>
           <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
           <br/>
           <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cnpassword"
              value={cnpassword}
              onChange={(e) => setCnPassword(e.target.value)}
              placeholder='Enter Confirm Password'
              autoComplete="off"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
           Sign Up
          </button>
        </form>
        <div>
        <br/>
        <Link to="/adminlogin" style={{color:"blue"}}>Login, if you have an account!</Link>
      </div>
        </div>
     <br/>
      </center>
    </div>
  );
  
};

export default TagRegister;

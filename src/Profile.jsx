import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./ViweAll.css";

const Profile = () => {
  const [employee, setEmployee] = useState(null); // Change to single employee object
  const location = useLocation();
  const email = location.state.data.email;

  useEffect(() => {
    fetchEmployee();
  }, [email]);

  const fetchEmployee = () => {
    axios
      .get(`http://localhost:1279/reg?email=${email}`)
      .then((response) => {
        // Assuming response.data is a single employee object
        setEmployee(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container6" >
      <br /> <br /> <br /> <br /> <br />
      <div className="profile-header text-center">
      <h1  style={{ textDecoration: 'underline',color:"blue" }}>Profile</h1>
      </div>
      <div className="profile-content">
        <br/>
        {employee && (
          <div>
            <center>
            <p>
              <strong>Name:</strong> {employee.ename}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Mobile Number:</strong> {employee.mob}
            </p>
            </center>
          </div>
        )}
      </div>
      <center>
      <a href="javascript:history.go(-1)">Go Back</a>
      </center>
    </div>
  );
};

export default Profile;

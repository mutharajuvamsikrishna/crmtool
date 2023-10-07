import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./ViweAll.css";
import { SlLogout } from "react-icons/Sl";
const Profile = () => {
  const [employee, setEmployee] = useState(null);
  const [userLocation, setUserLocation] = useState(null); // Add this state variable
  const location = useLocation();
  const email = location.state.data.email;

  useEffect(() => {
    fetchEmployee();
  }, [email]);

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Request the user's geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract and store the user's location
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchEmployee = () => {
    axios
      .get(`http://localhost:1279/reg?email=${email}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container6">
      <br /> <br /> <br /> <br /> <br />
      <div className="profile-header text-center">
        <h1 style={{ textDecoration: "underline", color: "blue" }}>Profile</h1>
      </div>
      <div className="profile-content">
        <br />
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
             
              <br />
              <Link to="/login">
                <SlLogout
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />
              </Link>
              <p>Logout</p>
            </center>
          </div>
        )}
      </div>

      <br /> <br /> <br />
      <center>
        <a href="javascript:history.go(-1)">Go Back</a>
      </center>
    </div>
  );
};

export default Profile;

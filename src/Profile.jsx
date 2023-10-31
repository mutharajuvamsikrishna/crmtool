import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./ViweAll.css";
import { SlLogout } from "react-icons/Sl";
import { BsPersonFillAdd } from "react-icons/bs";

const Profile = () => {
  const [employee, setEmployee] = useState(null);
  const [formData, setFormData] = useState([]);
  const location = useLocation();

  const email = location.state.data.email;
  const data = {
    email: email,
  };

  useEffect(() => {
    fetchEmployee();
    fetchEmployeeData(email);
  }, [email]);

 
  

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

  const fetchEmployeeData = (email) => {
    axios
      .get(`http://localhost:1279/viewaddmore?email=${email}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
const empid=formData.empid;

const data1={
  empid:empid
 
}

  return (
    <div className="container6">
      <br /> <br />
      <div>
        <h3 style={{ textDecoration: "underline", color: "blue", textAlign: "center" }}>Profile</h3>
      </div>
      <div>
        <br />
        {employee && (
          <div className="row justify">
            <center>
              <table cellPadding={13}>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{employee.ename}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{employee.email}</td>
                  </tr>
                  <tr>
                    <td>Mobile Number</td>
                    <td>{employee.mob}</td>
                    <td></td>
                  </tr>
                  {data1.empid !== undefined && (
                    <>
                      <tr>
                        <td>Employee ID</td>
                        <td>{formData.empid}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{formData.gender}</td>
                      </tr>
                      <tr>
                        <td>Continent/Region</td>
                        <td>{formData.region}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>{formData.country}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>{formData.city}</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>

              <div className="profile-info">
              
  {data1.empid === undefined && (
    <Link to="/addmore" state={{ data: data }}>
      <BsPersonFillAdd
        style={{
          height: "50px",
          width: "50px",
        }}
      />
      <br />
      Add Info
    </Link>
  )}
</div>

            </center>

            <div className="profile-info">
              <center>
                <br /><br />
                <Link to="/login">
                  <SlLogout
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                  <br />Log Out
                </Link>
              </center>
            </div>
          </div>
        )}
      </div>

      <br /> <br />
      <center>
        <a href="javascript:history.go(-1)">Go Back</a>
      </center>
    </div>
  );
};

export default Profile;

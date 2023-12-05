import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./ViweAll.css";
//import { SlLogout } from "react-icons/Sl";
import { SlLogout } from "react-icons/sl";
import { BsPersonFillAdd } from "react-icons/bs";
import { geAdminProfiles,getViewAddmore } from './Services/Api'
const AdminProfile = () => {
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

 localStorage
  

  const fetchEmployee = () => {
  //  axios
   // .get(`http://localhost:1279/adminreg?email=${email}`)
   geAdminProfiles(email)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchEmployeeData = (email) => {
 //   axios
    //  .get(`http://localhost:1279/viewaddmore?email=${email}`)
    getViewAddmore(email)
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
  <div className="container6" style={{padding:"7%"}}>
   
    <div>
      <h3 style={{ textDecoration: "underline", color: "blue", textAlign: "center" }}>Profile</h3>
    </div>
    <div>
      <br />
      {employee && (
        <div className="row justify">
          <center>
            <table  className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{employee.ename}</td>
               
                  <td>Email</td>
                  <td>{employee.email}</td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td>{employee.mob}</td>
                  <td>Status</td>
                  <td style={{color:"green"}}>online</td>
                </tr>
                {data1.empid !== undefined && (
                  <>
                    <tr>
                      <td>Employee ID</td>
                      <td>{formData.empid}</td>
                   
                      <td>Gender</td>
                      <td>{formData.gender}</td>
                    </tr>
                    <tr>
                      <td>Continent/Region</td>
                      <td>{formData.region}</td>
                  
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
            <br />
{data1.empid === undefined && (
  <Link to="/adminaddmore" state={{ data: data }}>
    <BsPersonFillAdd
      style={{
        height: "30px",
        width: "30px",
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
              <Link to="/adminlogin">
                <SlLogout
                  style={{
                    height: "30px",
                    width: "30px",
                    
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

export default AdminProfile;
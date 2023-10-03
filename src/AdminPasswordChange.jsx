import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AdminPasswordChange = () => {
  const [cnpassword, setCnpassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Move this line before any references to 'location'

  console.log(location);
  const email = location.state.data.email; // Now you can access 'location'

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
      cnpassword: cnpassword,
    };

    var v1 = data.password;
    var v2 = data.cnpassword;
    var v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&@#]).{6,}/; 
    if(!data.password.match(v)){
      alert("Password Should Minimum 6 Digits,Should have at least one uppercase,One Numeric And Special Symbols Like @,&,*,#")
      return false;
    }
    if (v1 != v2) {
      alert("Password doesn't Match To Confirm Password");
      return false;
    }
   
   
    axios
      .put("http://localhost:1279/adminchangepassword1", data)
      .then((response) => {
        if (response.data === "adminchangepassword") {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          navigate({
            pathname: "/adminsuccess",
            state: { data: data }, // Pass the data object as state
          });
        } else {
          navigate("/Invalidcredits");
          console.log(response.data);
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div style={{ backgroundColor: "lightyellow", height: "100vh" }}>
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>ConfirmPassword</td>
                <td>
                  <input
                    type="password"
                    value={cnpassword}
                    onChange={(e) => setCnpassword(e.target.value)}
                    autoComplete="new-password"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <input type="submit" value="Submit" style={{ color: "green" }} />
        </form>
        <br />
        <br />
        <a href="/reg">Go Back</a>
      </center>
    </div>
  );
};

export default AdminPasswordChange;

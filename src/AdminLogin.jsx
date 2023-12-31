import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:1279/adminloginform", data)
      .then((response) => {
        if (response.data === "adminlogin") {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          navigate("/viewalldetails", { state: { data: data } }); // Use navigate to change the route
        } else {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          alert("Invalid Credits")
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
        <h2>Login With ONiE Soft</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </td>
              </tr>

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
            </tbody>
          </table>
          <br />
          <input type="submit" value="Login" style={{ color: "green" }} />
        </form>
        <br />
        <br />
        <Link to="/adminforgetpassword">ChangePassword/ForgetPassword</Link>
        <br />
        <br />
        <a href="/admin1">Go Back</a>
      </center>
    </div>
  );
};

export default AdminLogin;

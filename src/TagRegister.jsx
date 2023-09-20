import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
          console.log(response.data);
          console.log("Response data type:", typeof response.data);

          navigate("/adminotp", { state: { data: data } }); // Use navigate to change the route
        } else {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          navigate("/regfail");
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
    <div style={{ backgroundColor: "lightgreen", height: "100vh" }}>
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Register With ONiE Soft</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>
                  <input
                    type="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </td>
              </tr>

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
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    value={ename}
                    onChange={(e) => setEname(e.target.value)}
                    autoComplete="name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>
                  <input
                    type="text"
                    value={mob}
                    onChange={(e) => setMob(e.target.value)}
                    autoComplete="tel"
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
              <tr>
                <td>Confirm Password</td>
                <td>
                  <input
                    type="password"
                    value={cnpassword}
                    onChange={(e) => setCnPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <input type="submit" value="Register" style={{ color: "green" }} />
        </form>
        <br />
        <br />
        <a href="/admin1">Go Back</a>
      </center>
    </div>
  );
};

export default TagRegister;

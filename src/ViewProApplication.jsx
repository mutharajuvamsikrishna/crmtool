import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link,useLocation } from "react-router-dom";
import "./ViweAll.css";
import {  AiOutlineFullscreen,AiOutlineCompress } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [response1, setResponse1] = useState("");
  const location =useLocation();
  const email1=location.state.data.email
  const email=location.state.data.email
  const data={
email:email
  }
  useEffect(() => {
    fetchEmployees();
  }, [email1]);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:1279/req")
      .then((response) => {
        // Assuming response.data is an array of employee objects with an 'email' property
        const filterData = response.data.filter(
          (employee) => employee.email === email1
        );
        setEmployees(filterData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit2 = (id) => {
   
    const data = {
      id: id,
     
    };
    navigate("/useredit", { state: { data: data } });
  };

  

  
  const expand = (id) => {
    console.log(id);
    
    setResponse1(id);
  };

  useEffect(() => {
    // This will log the updated value of response1 whenever it changes.
   
  }, [response1]);

  const expand1 = (id) => {
    setResponse1("");
  };
  
  const handleSubmitprofile=()=>{
    const data = {
      email: email,
    }
    
    navigate("/profile", { state: { data: data } }); 
    
  }
  
  return (
    <div className="id1">
      <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={handleSubmitprofile}
    >
      <CgProfile
        style={{
          height: "50px",
          width: "50px",
          color:"blue"
        }} />
    </div>
      <br />
      <br />

      <h2 className="text-center">Application List</h2>
      <h3 className="text-center">No of Customers {employees.length}</h3>

      <br />
     
      <br />

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <React.Fragment key={emp.linkprof}>
                
                <tr>
                  <th>Application ID</th>
                  <td>{emp.id}</td>
                  <th>BDM Name</th>
                  <td>{emp.bdmname}</td>
                  <th>1st Response Date</th>
                  <td>{emp.firstres}</td>
                </tr>
                {response1 !== emp.id&& (
                <tr className="text-center">
                  <td></td>

                  <td>
                    <AiOutlineFullscreen
                      onClick={() => expand(emp.id)}
                     
                      style={{
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </td>
                </tr>
                )}

                <tr>
                  <th>Latest Response Date</th>
                  <td>{emp.lastres}</td>
                  <th>Current State</th>
                  <td>{emp.currentstate}</td>
                  <th>Company Name</th>
                      <td>{emp.cmpname}</td>
                </tr>
               <br/><br/><br/>
                {response1===emp.id && (
                  <>
                  <tr className="text-center">
                  <td></td>

                  <td>
                    <AiOutlineCompress
                      onClick={() => expand1(emp.id)}
                     
                      style={{
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </td>
                </tr>
                    <tr>
                      <th>Latest Final Status</th>

                      <td>{emp.lfstatus}</td>
                    
                      <th>POC Status </th>

                      <td>{emp.pocstatus}</td>

                      <th>Industry/Domain</th>
                      <td>{emp.domain}</td>
                    </tr>

                    <tr>
                      <th>Interested Service/s </th>
                      <td>{emp.intrestserv}</td>
                      <th>More Details </th>

                      <td>{emp.moredetail}</td>
                    
                      <th>Info Shared</th>
                      <td>{emp.infoshared}</td>
                       </tr>
                       <tr>
                      <th>Details Asked</th>
                      <td>{emp.detailask}</td>
                    
                      <th>Website </th>
                      <td>{emp.website}</td>
                      <th>LinkedIn Profile </th>

                      <td>{emp.linkprof}</td>
                    </tr>

                    <tr>
                      <th>Continent/Region </th>
                      <td>{emp.region}</td>
                      <th>Country</th>
                      <td>{emp.coun}</td>
                      <th>W.r.t IST Time</th>
                      <td>{emp.time}</td>
            
                    </tr>
                    <tr>
                    <th>Before/After</th>
                      <td>{emp.cusbefore}</td>
                      <th>
                        Time Zone
                      </th>
                      <td>{emp.timezone}</td>
                    </tr>
                    <td>
                      <h5 className="text-center">
                        Main Contact Person Details
                      </h5>
                    </td>
                    <tr>
                      <th>Full Name </th>
                      <td>{emp.maincontact}</td>

                      <th>LinkedIn Profile</th>
                      <td>{emp.mainlinkprof}</td>
                      <th>Email ID</th>
                      <td>{emp.mainemail}</td>
                    </tr>
                    <tr>
                      
                      <th>Phone No</th>

                      <td>{emp.mainmob}</td>
                    </tr>
                    <td>
                      <h5 className="text-center">
                        Second Contact Person Details
                      </h5>
                    </td>
                    <tr>
                      <th>Full Name </th>
                      <td>{emp.secondcontact}</td>

                      <th>LinkedIn Profile</th>
                      <td>{emp.secondlinkprof}</td>
                      <th>Email ID</th>
                      <td>{emp.secondmainemail}</td>
                    </tr>
                    <tr>
                     
                      <th>Phone No</th>

                      <td>{emp.secondmob}</td>
                    </tr>
                    <td>
                      <h5 className="text-center">1st e-mail Details </h5>
                    </td>
                    <tr>
                      <th>Date</th>
                      <td>{emp.emdate}</td>
                      <th>From Name</th>
                      <td>{emp.emname}</td>
                      <th>To Name</th>
                      <td>{emp.emtoname}</td>
                    </tr>

                    <tr>
                     
                      <th>E-mail-1 State</th>

                      <td>{emp.emstate}</td>
                    

                    
                      <th>1st e-mail Summary </th>
                      <td>{emp.emsummary}</td>
                    </tr>

                    <td>
                      <h5 className="text-center">2nd e-mail Details </h5>
                    </td>
                    <tr>
                      <th>Date</th>
                      <td>{emp.emdate1}</td>
                      <th>From Name</th>
                      <td>{emp.emname1}</td>
                      <th>To Name</th>
                      <td>{emp.emtoname1}</td>
                    </tr>

                    <tr>
                    
                     
                      <th>E-mail-2 State</th>

                      <td>{emp.emstate1}</td>
                    
                      <th>2nd e-mail Summary </th>
                      <td>{emp.emsummary1}</td>
                    </tr>

                    <td>
                      <h5 className="text-center">3rd e-mail Details </h5>
                    </td>
                    <tr>
                      <th>Date</th>
                      <td>{emp.emdate2}</td>
                      <th>From Name</th>
                      <td>{emp.emname2}</td>
                      <th>To Name</th>
                      <td>{emp.emtoname2}</td>
                  </tr>
                     <tr>
                      <th>E-mail-3 State</th>

                      <td>{emp.emstate2}</td>
                    
                      <th>3rd e-mail Summary </th>
                      <td>{emp.emsummary2}</td>
                    </tr>

                    <td>
                      <h5 className="text-center">1st Call Details </h5>
                    </td>
                    <tr>
                      <th>Date</th>
                      <td>{emp.cuscalldate}</td>
                      <th>IST Time</th>
                      <td>{emp.isttime}</td>
                      <th>From Name</th>
                      <td>{emp.fromname}</td>
                    </tr>
                    <tr>
                      
                      <th>Call-1 State</th>
                      <td>{emp.callstatus}</td>
                    
                      <th>MOM with Actions </th>
                      <td>{emp.callsummery}</td>
                    </tr>
                    <td>
                      <h5 className="text-center">2nd Call Details </h5>
                    </td>
                    <tr>
                      <th>Date</th>
                      <td>{emp.cuscalldate1}</td>
                      <th>IST Time</th>
                      <td>{emp.isttime1}</td>
                      <th>From Name</th>
                      <td>{emp.fromname1}</td>
                    </tr>
                    <tr>
                      
                      <th>Call-2 State</th>
                      <td>{emp.callstatus1}</td>
                    
                      <th>MOM with Actions </th>
                      <td>{emp.callsummery1}</td>
                    </tr>

                    <td>
                      <h5 className="text-center">3rd Call Details </h5>
                    </td>
                    <tr>
                      <th>Date</th>
                      <td>{emp.cuscalldate2}</td>
                      <th>IST Time</th>
                      <td>{emp.isttime2}</td>
                      <th>From Name</th>
                      <td>{emp.fromname2}</td>
                    </tr>
                    <tr>
                     
                      <th>Call-3 State</th>
                      <td>{emp.callstatus2}</td>
                   
                      <th>MOM with Actions </th>
                      <td>{emp.callsummery2}</td>
                    </tr>
                   
                    <tr>
                      <th>Edit</th>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleSubmit2(emp.id)}
                        >
                          Edit
                        </button>
                      </td>
                    
                     
                    </tr>
                    <br/><br/><br/>
                    <tr>
                      <td></td>
                    </tr>
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <center>
      <Link to="/loginsucess" state={{data}}>Go Back</Link>
      </center>
      </div>
    
    </div>
  );
};

export default ListEmployee;

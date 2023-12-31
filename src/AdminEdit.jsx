import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ViewProApplication.css"; // Import your custom CSS file
import "./ViweAll.css";
import { CgProfile } from 'react-icons/cg';
const AdminEdit = () => {
  // State variables
 
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const id = location.state.data.id;
  const navigate = useNavigate();

  // State object to store form field values
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchEmployeeData(id);
  }, [id]);

  const fetchEmployeeData = (id) => {
    axios
      .get(`http://localhost:1279/viewprofessional?id=${id}`)
      .then((response) => {
       

        // Filter out keys with null values or empty strings
        const filteredData = Object.fromEntries(
          Object.entries(response.data).filter(
            ([_, value]) => value !== null && value !== ""
          )
        );

       
        setLoading(false);

        // Set the initial values of form fields from employeeData
        setFormData(filteredData);
      
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
const email=formData.email;
const data={
  email:email
}
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const confirmEdit = () => {
    if (window.confirm("Are you sure you want to Edit?")) {
      handleSubmit1();
    }
  };
  const handleSubmit1 = (event) => {
   
     
    axios
      .post("http://localhost:1279/prosave", formData)
      .then((response) => {
        if (response.data === "personaldetails") {
          alert("Details Updated Successfully");
        } else {
          navigate("/regfail");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
  
  const handleSubmit2 = () => {
   
    const data = {
      email: email,
      
    };
    navigate("/adminprofile", { state: { data: data } });
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
      onClick={handleSubmit2}
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
      <br />
      <br />
      <h2 className="text-center">Edit CRM Details</h2>
<h3 className="text-center">Your Application ID Is {id}</h3>
      <div className="text-center">
        {/* Render the form for editing data */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>BDM Name</th>
                  <td>
                  <select
                  id="id"
                  name="bdmname"
                style={{ appearance: "auto",width:"230px" }}
                  value={formData.bdmname}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                   
                  <option value="Vamsi">Vamsi</option>
                  <option value="Sai">Sai</option>
                  <option value="Krishna">Krishna</option>
                </select>
                  </td>

                  <td>
                    <th>1st Response Date</th>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="firstres"
                      value={formData.firstres || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <td>
                    <th>Last Response Date</th>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="lastres"
                      value={formData.lastres || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                </tr>
                <tr>
                  <th>Company Name</th>
                  <td>
                  <input
                      type="text"
                      name="cmpname"
                      value={formData.cmpname || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Latest Final Status</th>
                  <td>
                  <select
                  id="id"
                  name="lfstatus"
                style={{ appearance: "auto",width:"230px" }}
                  value={formData.lfstatus}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                 
                  <option value="Yet to Respond">Yet to Respond</option>
                  <option value="Waiting for Reply">Waiting for Reply</option>
                  <option value="Need to Follow-Up">Need to Follow-Up</option>
                  <option value="1st /2nd /3rd - Call Scheduled">
                    1st /2nd /3rd - Call Scheduled
                  </option>
                  <option value="POC Started">POC Started</option>
                  <option value="Deal Done">Deal Done</option>
                  <option value="No Deal">No Deal</option>
                </select>
                  </td>
                  <th>POC Status</th>
                  <td>
                 
                <select
                  id="id"
                  name="pocstatus"
                style={{ appearance: "auto",width:"230px" }}
                  value={formData.pocstatus}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                 
                  <option value="NA">NA</option>
                  <option value="Planned">Planned</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Success">Success</option>
                  <option value="Faild">Faild</option>
                  <option value="Deal Done">Deal Done</option>
                  <option value="No Deal">No deal</option>
                </select>
                  </td>
               </tr>

               <tr>
                  <th>Industry/Domain</th>
                  <td>
                  <select
                  id="id"
                  name="domain"
               style={{ appearance: "auto",width:"230px" }}
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                
                  <option value="Banking">Banking</option>
                  <option value="Insurence">Insurence</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="e-Commerce">e-Commerce</option>
                  <option value="Digital Payments">Digital Payments</option>
                  <option value="OTT">OTT</option>
                  <option value="Health Care">Health Care</option>
                  <option value="Automobile">Automobile</option>
                  <option value="Networking">Networking</option>
                  <option value="Cloud Services">Cloud Services </option>
                  <option value="e-Learning/Entertainment">
                    e-Learning/Entertainment
                  </option>
                </select>
                  </td>
                  <th>Interested Service/s </th>
                  <td>
                  <select
                  id="id"
                  name="intrestserv"
               style={{ appearance: "auto",width:"230px" }}
                  value={formData.intrestserv}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                 
                  <option value="">Select...</option>

                  <optgroup label="Dev">
                    <option value="FE">FE</option>
                    <option value="BE">BE</option>
                    <option value="DB">DB</option>
                    <option value="Mobile">Mobile</option>
                    <option value="TV">TV</option>
                    <option value="Support">Support</option>
                  </optgroup>
                  <optgroup label="QA">
                    <option value="Manual">Manual</option>
                    <option value="Automation">Automation</option>
                    <option value="Regression">Regression</option>
                    <option value="PT">PT</option>
                  </optgroup>
                  <optgroup label="DevOps">
                    <option value="On-premises">On-premises</option>
                    <option value="AWS">AWS</option>
                    <option value="Azure">Azure</option>
                    <option value="GC">GC</option>
                    <option value="Private">Private</option>
                  </optgroup>
                </select>
              
                  </td>
                  <th>More Details </th>
                  <td>
                  <input
                      type="text"
                      name="moredetail"
                      value={formData.moredetail || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>


               <tr>
                  <th>Info Shared</th>
                  <td>
                  <input
                      type="text"
                      name="infoshared"
                      value={formData.infoshared || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Details Asked</th>
                  <td>
                  <input
                      type="text"
                      name="detailask"
                      value={formData.detailask || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Website</th>
                  <td>
                  <input
                      type="text"
                      name="website"
                      value={formData.website || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>


               <tr>
                  <th>LinkedIn Profile </th>
                  <td>
                  <input
                      type="text"
                      name="linkprof"
                      value={formData.linkprof || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Continent/Region </th>
                  <td>
                  <select
      id="id"
      name="region"
      style={{ appearance: "auto",width:"230px" }}
      value={formData.region}
      onChange={handleInputChange}
      className="form-control"
      
    >
      
      <option value="Asia">Asia</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Europe">Europe</option>
      <option value="Australia">Australia</option>
      <option value="Europe">Europe</option>
      <option value="Antarctica">Antarctica</option>
    </select>
                  </td>
                  <th>Country</th>
                  <td>
                  <input
                      type="text"
                      name="coun"
                      value={formData.coun || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>

               <tr>
                  <th>W.r.t  IST  Time

</th>
                  <td>
                  <input
                      type="time"
                      name="time"
                      value={formData.time || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Before/After</th>
                  <td>
                  <select
      id="id"
      name="cusbefore"
      style={{ width:"230px",appearance: "auto" }}
      value={formData.cusbefore}
      onChange={handleInputChange}
      className="form-control"
      
    >
      
      <option value="After">After</option>
      <option value="Before">Before</option>
    </select>
                  </td>
                  
                  <th>Current State</th>
                  <td>
                  <select
                  id="id"
                  name="currentstate"
                style={{ appearance: "auto",width:"230px" }}
                  value={formData.currentstate}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                  <option value={formData.currentstate}>Selected Value {formData.currentstate} </option>
                  <option value="Hot">Hot</option>
                  <option value="Warm">Warm</option>
                  <option value="Cold">Cold</option>
                </select>
                  </td>
                
               </tr>
<tr>
  <td></td>
  <td><h5 className="text-center">
Main Contact Person Details
</h5></td>
</tr>

               <tr>
                  <th>Full Name</th>
                  <td>
                  <input
                      type="text"
                      name="maincontact"
                      value={formData.maincontact|| ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Email ID</th>
                  <td>
                  <input
                      type="text"
                      name="mainemail"
                      value={formData.mainemail || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Phone No</th>
                  <td>
                  <input
                      type="text"
                      name="mainmob"
                      value={formData.mainmob || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>

<tr>
<th>LinkedIn Profile </th>
                  <td>
                  <input
                      type="text"
                      name="mainlinkprof"
                      value={formData.mainlinkprof || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
</tr>

<tr>
  <td></td>
  <td><h5 className="text-center">
Second Contact Person Details
</h5></td>
</tr>

               <tr>
                  <th>Full Name</th>
                  <td>
                  <input
                      type="text"
                      name="secondcontact"
                      value={formData.secondcontact|| ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Email ID</th>
                  <td>
                  <input
                      type="text"
                      name="secondemail"
                      value={formData.secondemail || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>Phone No</th>
                  <td>
                  <input
                      type="text"
                      name="secondmob"
                      value={formData.secondmob || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>

<tr>
<th>LinkedIn Profile </th>
                  <td>
                  <input
                      type="text"
                      name="secondlinkprof"
                      value={formData.secondlinkprof || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
</tr>

<tr>
  <td></td>
  <td><h5 className="text-center">1st e-mail Details </h5></td>
</tr>
<tr>
                  <th>Date</th>
                  <td>
                  <input
                      type="date"
                      name="emdate"
                      value={formData.emdate || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>From Name</th>
                  <td>
                  <input
                      type="text"
                      name="emname"
                      value={formData.emname|| ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>To Name</th>
                  <td>
                  <input
                      type="text"
                      name="emtoname"
                      value={formData.emtoname || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
   
               <tr>
                  <th>E-mail-1 State</th>
                  <td>
                  <select
      id="id"
      name="emstate"
      style={{ width:"230px", appearance: "auto" }}
      value={formData.emstate}
      onChange={handleInputChange}
      className="form-control"
      
    >
      
      <option value="Yet to Respond">Yet to Respond </option>
      <option value="Waiting for Reply">Waiting for Reply</option>
      <option value="To Follow-up">To Follow-up</option>
    </select>
                  </td>
                  <th>1st e-mail Summary </th>
                  <td>
                  <input
                      type="text"
                      name=""
                      value={formData.emsummary || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                 
               </tr>

               
               <tr>
                <td></td>
  <td><h5 className="text-center">2nd e-mail Details </h5></td>
</tr>
<tr>
                  <th>Date</th>
                  <td>
                  <input
                      type="date"
                      name="emdate1"
                      value={formData.emdate1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>From Name</th>
                  <td>
                  <input
                      type="text"
                      name="emname1"
                      value={formData.emname1|| ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>To Name</th>
                  <td>
                  <input
                      type="text"
                      name="emtoname1"
                      value={formData.emtoname1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
   
               <tr>
                  <th>E-mail-2 State</th>
                  <td>
                  <select
      id="id"
      name="emstate1"
      style={{ width:"230px", appearance: "auto" }}
      value={formData.emstate1}
      onChange={handleInputChange}
      className="form-control"
      
    >
    
      <option value="Yet to Respond">Yet to Respond </option>
      <option value="Waiting for Reply">Waiting for Reply</option>
      <option value="To Follow-up">To Follow-up</option>
    </select>
                  </td>
                  <th>1st e-mail Summary </th>
                  <td>
                  <input
                      type="text"
                      name=""
                      value={formData.emsummary || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>2nd e-mail Summary </th>
                  <td>
                  <input
                      type="text"
                      name="emsummary1"
                      value={formData.emsummary1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                 
               </tr>

               <tr>
                <td></td>
  <td><h5 className="text-center">3rd e-mail Details </h5></td>
</tr>
<tr>
                  <th>Date</th>
                  <td>
                  <input
                      type="date"
                      name="emdate2"
                      value={formData.emdate2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>From Name</th>
                  <td>
                  <input
                      type="text"
                      name="emname2"
                      value={formData.emname2|| ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>To Name</th>
                  <td>
                  <input
                      type="text"
                      name="emtoname2"
                      value={formData.emtoname2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
   
               <tr>
                  <th>E-mail-3 State</th>
                  <td>
                  <select
      id="id"
      name="emstate2"
      style={{ width:"230px", appearance: "auto" }}
      value={formData.emstate2}
      onChange={handleInputChange}
      className="form-control"
      
    >
     
      <option value="Yet to Respond">Yet to Respond </option>
      <option value="Waiting for Reply">Waiting for Reply</option>
      <option value="To Follow-up">To Follow-up</option>
    </select>
                  </td>
                  <th>1st e-mail Summary </th>
                  <td>
                  <input
                      type="text"
                      name=""
                      value={formData.emsummary || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>3rd e-mail Summary </th>
                  <td>
                  <input
                      type="text"
                      name="emsummary2"
                      value={formData.emsummary2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
               <tr>
                <td></td>
                    <td><h5 className="text-center">1st Call Details </h5></td>
                  </tr>
                 
    <tr>
                  <th>Date </th>
                  <td>
                  <input
                      type="date"
                      name="cuscalldate"
                      value={formData.cuscalldate || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>IST Time</th>
                  <td>
                  <input
                      type="time"
                      name="isttime"
                      value={formData.isttime|| ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>From Name</th>
                  <td>
                  <input
                      type="text"
                      name="fromname"
                      value={formData.fromname || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
               <tr>
                  <th>Call-1 State</th>
                  <td>
                  <select
      id="id"
      name="callstatus"
      style={{width:"230px", appearance: "auto" }}
      value={formData.callstatus}
      onChange={handleInputChange}
      className="form-control"
      required
    >
     
       <option value="To Follow-up">To Follow-up</option>
      <option value="Poc">Poc</option>
      <option value="Deal">Deal</option>
      <option value="NO Deal">No Deal</option>
     
    </select>
                  </td>
                  <th>MOM with Actions </th>
                  <td>
                  <input
                      type="text"
                      name="callsummery"
                      value={formData.callsummery || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>





               <tr>
                <td></td>
                    <td><h5 className="text-center">2nd Call Details </h5></td>
                  </tr>

<tr>
                  <th>Date </th>
                  <td>
                  <input
                      type="date"
                      name="cuscalldate1"
                      value={formData.cuscalldate1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>IST Time</th>
                  <td>
                  <input
                      type="time"
                      name="isttime1"
                      value={formData.isttime1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>From Name</th>
                  <td>
                  <input
                      type="text"
                      name="fromname1"
                      value={formData.fromname1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
               <tr>
                  <th>Call-2 State</th>
                  <td>
                  <select
      id="id"
      name="callstatus1"
      style={{width:"230px", appearance: "auto" }}
      value={formData.callstatus1}
      onChange={handleInputChange}
      className="form-control"
      required
    >
      
       <option value="To Follow-up">To Follow-up</option>
      <option value="Poc">Poc</option>
      <option value="Deal">Deal</option>
      <option value="NO Deal">No Deal</option>
     
    </select>
                  </td>
                  <th>MOM with Actions </th>
                  <td>
                  <input
                      type="text"
                      name="callsummery1"
                      value={formData.callsummery1 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
               <tr>
                <td></td>
                    <td><h5 className="text-center">3rd Call Details </h5></td>
                  </tr>
               <tr>
                  <th>Date </th>
                  <td>
                  <input
                      type="date"
                      name="cuscalldate2"
                      value={formData.cuscalldate2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>IST Time</th>
                  <td>
                  <input
                      type="time"
                      name="isttime2"
                      value={formData.isttime2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
                  <th>From Name</th>
                  <td>
                  <input
                      type="text"
                      name="fromname2"
                      value={formData.fromname2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
               <tr>
                  <th>Call-3 State</th>
                  <td>
                  <select
      id="id"
      name="callstatus2"
      style={{width:"230px", appearance: "auto" }}
      value={formData.callstatus2}
      onChange={handleInputChange}
      className="form-control"
      required
    >
      
       <option value="To Follow-up">To Follow-up</option>
      <option value="Poc">Poc</option>
      <option value="Deal">Deal</option>
      <option value="NO Deal">No Deal</option>
     
    </select>
                  </td>
                  <th>MOM with Actions </th>
                  <td>
                  <input
                      type="text"
                      name="callsummery"
                      value={formData.callsummery2 || ""}
                      onChange={handleInputChange} 
                    />
                  </td>
               </tr>
              
              </tbody>
            </table>
            <br/>
            <button type="button" className="btn btn-primary" onClick={confirmEdit}>
    Save
  </button>
          </form>
        )}
       
      </div>
      <br/>
      <center>
      <Link to="/viewalldetails" state={{data:data}}>Go Back</Link>
      </center>
    </div>
  );
};

export default AdminEdit;

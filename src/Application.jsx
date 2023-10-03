import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Application.css";
import { AiOutlineLinkedin, AiOutlineMail,AiFillMobile,AiFillClockCircle, } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
const Application = () => {
  const location =useLocation();
   const email=location.state.data.email
  const data={
    email:email
  }
  const [formData, setFormData] = useState({
bdmname:"",
   firstres:"",
   lastres:"",
   currentstate:"Hot",
   cmpname:"",
   lfstatus:"Yet to Respond",
   pocstatus:"NA",
   intrestserv:"Select...",
   moredetail:"",
   infoshared:"",
   detailask:"",
   website:"",
   linkprof:"",
   region:"Asia",
   coun:"",
   time:"",
   cusbefore:"After",
   maincontact:"",
   mainlinkprof:"",
   mainemail:"",
   mainmob:"",

   secondcontact:"",
   secondlinkprof:"",
   secondemail:"",
   secondmob:"",
   emdate:"",
   domain:"Banking",
  emname:"",
  emdate1:"",
  emdate2:"",
emtoname:"",
emstate:"Yet to Respond",
emsummary:"",
emname1:"",
emtoname1:"",
emstate1:"Yet to Respond",
emsummary1:"",
emname2:"",
emtoname2:"",
emstate2:"Yet to Respond",
emsummary2:"",
cuscalldate:"",
isttime:"",
fromname:"",
callstatus:"To Follow-up",
callsummery:"",
cuscalldate1:"",
isttime1:"",
fromname1:"",
callstatus1:"To Follow-up",
callsummery1:"",
cuscalldate2:"",
isttime2:"",
fromname2:"",
callstatus2:"To Follow-up",
callsummery2:"",
timezone:"CT",
email:email,
email1:"",
email2:"",
email3:"",
call1:"",
call2:"",
call3:"",
  });
  const navigate=useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post("http://localhost:1279/prosave", formData)
      .then((response) => {
        if (response.data === "personaldetails") {
          navigate("/success2", { state: { data: formData} }); // Use navigate to change the route
        } else {
          navigate("/regfail");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
  
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Function to handle changes in form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    

    
      setFormData({
        ...formData,
        [name]: value,
      });
    
  };
  const handleSubmit2 = (type) => {
    
    const data = {
      email: email,
      
    };

if (type==="profile"){
  navigate("/profile", { state: { data: data } });
}

  }
  return (
  
    <div className="" style={{ minHeight: "100vh", backgroundColor:"skyblue" }}>
      <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={()=>handleSubmit2("profile")}
    >
      <CgProfile
        style={{
          height: "50px",
          width: "50px",
          color:"blue"
        }} />
    </div>
    
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <h2 className="text-center mb-4" style={{ color: "blue" }}>
            ONiE Soft Client Request
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group row my-3">
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
                BDM Name
              </label>
              <div className="col-sm-2 my-1">
              <select
                  id="id"
                  name="bdmname"
                style={{ color: "green", appearance: "auto" }}
                  value={formData.bdmname}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                  <option value="Vamsi">Vamsi</option>
                  <option value="Sai">Sai</option>
                  <option value="Krishna">Krishna</option>
                </select>
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
                1st Response Date
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="firstres"
                  value={formData.firstres}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                Last Response
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="lastres"
                  value={formData.lastres}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete="date"
                  
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
                Current State
              </label>
              <div className="col-sm-2 my-1">
                <select
                  id="id"
                  name="currentstate"
                style={{ color: "green", appearance: "auto" }}
                  value={formData.currentstate}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                  <option value="Hot">Hot </option>
                  <option value="Warm">Warm</option>
                  <option value="Cold">Cold</option>
                </select>
              </div>

              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
                Latest Final Status
              </label>
              <div className="col-sm-2 my-1">
                <select
                  id="id"
                  name="lfstatus"
                style={{ color: "green", appearance: "auto" }}
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
              </div>

              
              <label htmlFor="rexpy" className="col-sm-2 col-form-label my-1">
                Company Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="cmpname"
                  value={formData.cmpname}
                  onChange={handleInputChange}
                  className="form-control"
                  id="rexpy"
                  autoComplete="cmpname"
                  
                  
                />
              </div>
            </div>

            
            <div className="form-group row my-3">
              <label htmlFor="lwd" className="col-sm-2 col-form-label my-1">
                Poc Status
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-2 my-1">
                
                <select
                  id="id"
                  name="pocstatus"
                style={{ color: "green", appearance: "auto" }}
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
              </div>
              {/* <div className="form-group row my-2"> */}
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                Industry/Domain
              </label>
              <div className="col-sm-2 my-1">
                <select
                  id="id"
                  name="domain"
                style={{ color: "green", appearance: "auto" }}
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
              </div>
              {/* <div className="form-group row my-1"> Add my-2 class here */}
              <label htmlFor="domain" className="col-sm-2 col-form-label my-1">
                Interested Service/s{" "}
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-2 my-1">
                {" "}
                {/* Add my-1 class here */}
                <select
                  id="id"
                  name="intrestserv"
                style={{ color: "green", appearance: "auto" }}
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
              </div>
            </div>

            <div className="form-group row my-3">
  <label htmlFor="id" className="col-sm-2 col-form-label my-1">
    More Details
  </label>
  <div className="col-sm-10 my-1">
    <textarea
      name="moredetail"
      value={formData.moredetail}
      onChange={handleInputChange}
      className="form-control"
      autoComplete="moredetails"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
</div>


<div className="form-group row my-3">
  <label htmlFor="id" className="col-sm-2 col-form-label my-1">
    Information Shared
  </label>
  <div className="col-sm-10 my-1">
    <textarea
      name="infoshared"
      value={formData.infoshared}
      onChange={handleInputChange}
      className="form-control"
      autoComplete="infoshared"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
</div>
<div className="form-group row my-3">
  <label htmlFor="id" className="col-sm-2 col-form-label my-1">
   Details Asked
  </label>
  <div className="col-sm-10 my-1">
    <textarea
      name="detailask"
      value={formData.detailask}
      onChange={handleInputChange}
      className="form-control"
      autoComplete="detailask"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
</div>
<div className="form-group row my-3">
<label htmlFor="id" className="col-sm-2 col-form-label my-1 required-label">
  * Website
</label>

              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                  required
                />
              </div>
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
               Linkdin Profile <AiOutlineLinkedin/>
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="linkprof"
                  value={formData.linkprof}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete="linkprof"
                />
              </div>
              </div>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                Country
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="coun"
                  value={formData.coun}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete="coun"
                  
                />
              </div>
           
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              Continent/Region 
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="region"
      style={{ color: "green", appearance: "auto" }}
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
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              Time Zone
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="timezone"
      style={{ color: "green", appearance: "auto" }}
      value={formData.timezone}
      onChange={handleInputChange}
      className="form-control"
      
    >
      <option value="PST">IST</option>
      <option value="CT">CT</option>
      <option value="PT">PT</option>
      <option value="MT">MT</option>
      <option value="PST">PST</option>
      
    </select>
              </div>
            
              </div>

            <div className="form-group row my-3">
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              W.r.t  IST  Time

  <AiFillClockCircle/>
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="time"
                  name="time"
                  value={formData.clock}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              Before/After
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="cusbefore"
      style={{ color: "green", appearance: "auto" }}
      value={formData.cusbefore}
      onChange={handleInputChange}
      className="form-control"
      
    >
      <option value="After">After</option>
      <option value="Before">Before</option>
    </select>
              </div>
             
              </div>
              <h5 className='text-center'>Main Contact Person Details</h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Full Name

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="maincontact"
                  value={formData.maincontact}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                  
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              LinkedIn Profile
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="mainlinkprof"
                  value={formData.mainlinkprof}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
                Email <AiOutlineMail/>
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="email"
                  name="mainemail"
                  value={formData.mainemail}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete='email'
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
               Mobile Number<AiFillMobile style={{height:"20px",width:"20px"}}/>
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="tel"
                  name="mainmob"
                  value={formData.mainmob}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete="date"
                  
                />
              </div>
            </div>



              <h5 className='text-center'>Second Contact Person Details</h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Full Name

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="secondcontact"
                  value={formData.secondcontact}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                  
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              LinkedIn Profile
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="secondlinkprof"
                  value={formData.secondlinkprof}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
                Email <AiOutlineMail/>
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="email"
                  name="secondemail"
                  value={formData.secondemail}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
               Mobile Number<AiFillMobile style={{height:"20px",width:"20px"}}/>
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="tel"
                  name="secondmob"
                  value={formData.secondmob}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete="date"
                  
                />
              </div>
            </div>
            <div className="form-group row my-3">
      <label htmlFor="lwd" className="col-sm-4 col-form-label my-1">
        Do You Have 1st Email Details
      </label>
      <div className="col-sm-2 my-1">
        <select
          id="id"
          name="email1"
          style={{ color: 'green', appearance: 'auto' }}
          value={formData.email1}
          onChange={handleDropdownChange} // Use handleDropdownChange here
          className="form-control"
        >
           <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
              {formData.email1=== 'Yes' && (
                <>
            <h5 className="text-center">1st e-mail Details </h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Date

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="emdate"
                  value={formData.emdate}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                  
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              From Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="emname"
                  value={formData.emname}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              To Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="emtoname"
                  value={formData.emtoname}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
              E-mail-1 State
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="emstate"
      style={{ color: "green", appearance: "auto" }}
      value={formData.emstate}
      onChange={handleInputChange}
      className="form-control"
      
    >
      <option value="Yet to Respond">Yet to Respond </option>
      <option value="Waiting for Reply">Waiting for Reply</option>
      <option value="To Follow-up">To Follow-up</option>
    </select>
              </div>
             
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              1st e-mail Summary 
  </label>
  <div className="col-sm-6 my-1">
    <textarea
      name="emsummary"
      value={formData.emsummary}
      onChange={handleInputChange}
      className="form-control"
      autoComplete="emsummary"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
            </div>
            </>
              )}
                <div className="form-group row my-3">
      <label htmlFor="lwd" className="col-sm-4 col-form-label my-1">
        Do You Have 2nd Email Details
      </label>
      <div className="col-sm-2 my-1">
        <select
          id="id"
          name="email2"
          style={{ color: 'green', appearance: 'auto' }}
          value={formData.email2}
          onChange={handleDropdownChange} // Use handleDropdownChange here
          className="form-control"
        >
           <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
    {formData.email2=== 'Yes' && (
      <>
            <h5 className="text-center">2nd e-mail Details </h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Date

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="emdate1"
                  value={formData.emdate1}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                  
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              From Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="emname1"
                  value={formData.emname1}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              To Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="emtoname1"
                  value={formData.emtoname1}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
              E-mail-2 State
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="emstate1"
      style={{ color: "green", appearance: "auto" }}
      value={formData.emstate1}
      onChange={handleInputChange}
      className="form-control"
      
    >
      <option value="Yet to Respond ">Yet to Respond </option>
      <option value="Waiting for Reply">Waiting for Reply</option>
      <option value="To Follow-up">To Follow-up</option>
    </select>
              </div>
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              2nd e-mail Summary 
  </label>
  <div className="col-sm-6 my-1">
    <textarea
      name="emsummary1"
      value={formData.emsummary1}
      onChange={handleInputChange}
      className="form-control"
      autoComplete="emsummary1"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>

            </div>
            </>
            )}
             <div className="form-group row my-3">
             <label htmlFor="lwd" className="col-sm-4 col-form-label my-1">
        Do You Have 3rd Email Details
      </label>
      <div className="col-sm-2 my-1">
        <select
          id="id"
          name="email3"
          style={{ color: 'green', appearance: 'auto' }}
          value={formData.email3}
          onChange={handleDropdownChange} // Use handleDropdownChange here
          className="form-control"
        >
           <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
   </div>
   {formData.email3=== 'Yes' && (
      <>
  
            <h5 className="text-center">3rd e-mail Details </h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Date

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="emdate2"
                  value={formData.emdate2}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                  
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              From Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="emname2"
                  value={formData.emname2}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              To Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="emtoname2"
                  value={formData.emtoname2}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
              E-mail-3 State
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="emstate2"
      style={{ color: "green", appearance: "auto" }}
      value={formData.emstate2}
      onChange={handleInputChange}
      className="form-control"
      
    >
      <option value="Yet to Respond ">Yet to Respond </option>
      <option value="Waiting for Reply">Waiting for Reply</option>
      <option value="To Follow-up">To Follow-up</option>
    </select>
              </div>
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              3rd e-mail Summary 
  </label>
  <div className="col-sm-6 my-1">
    <textarea
      name="emsummary2"
      value={formData.emsummary2}
      onChange={handleInputChange}
      className="form-control"
      autoComplete="emsummary2"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
 </div>
 </>
            )}
             <div className="form-group row my-3">
              <label htmlFor="lwd" className="col-sm-4 col-form-label my-1">
        Do You Have 1st Call Details
      </label>
      <div className="col-sm-2 my-1">
        <select
          id="id"
          name="call1"
          style={{ color: 'green', appearance: 'auto' }}
          value={formData.call1}
          onChange={handleDropdownChange} // Use handleDropdownChange here
          className="form-control"
        >
           <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
    {formData.call1=== 'Yes' && (
      <>
  <h5 className="text-center">1st Call Details  </h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Date

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="cuscalldate"
                  value={formData.cuscalldate}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                 
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              Ist Time
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="time"
                  name="isttime"
                  value={formData.isttime}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              From Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="fromname"
                  value={formData.fromname}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
              Call-1 State
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="callstatus"
      style={{ color: "green", appearance: "auto" }}
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
              </div>
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              MOM with Actions 
  </label>
  <div className="col-sm-6 my-1">
    <textarea
      name="callsummery"
      value={formData.callsummery}
      onChange={handleInputChange}
      className="form-control"
      autoComplete=""
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
    </div>
    </>
            )}
             <div className="form-group row my-3">
              <label htmlFor="lwd" className="col-sm-4 col-form-label my-1">
        Do You Have 2nd Call Details
      </label>
      <div className="col-sm-2 my-1">
        <select
          id="id"
          name="call2"
          style={{ color: 'green', appearance: 'auto' }}
          value={formData.call2}
          onChange={handleDropdownChange} // Use handleDropdownChange here
          className="form-control"
        >
           <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
    {formData.call2=== 'Yes' && (
      <>
    <h5 className="text-center">2nd Call Details  </h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Date

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="cuscalldate1"
                  value={formData.cuscalldate1}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                 
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              Ist Time
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="time"
                  name="isttime1"
                  value={formData.isttime1}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              From Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="fromname1"
                  value={formData.fromname1}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
              Call-2 State
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="callstatus1"
      style={{ color: "green", appearance: "auto" }}
      value={formData.callstatus1}
      onChange={handleInputChange}
      className="form-control"
      required
    >
       <option value="To Follow-up">To Follow-up</option>
      <option value="Poc">Poc</option>
      <option value="No Deal">No Deal</option>
     
    </select>
              </div>
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              MOM with Actions 
  </label>
  <div className="col-sm-6 my-1">
    <textarea
      name="callsummery1"
      value={formData.callsummery1}
      onChange={handleInputChange}
      className="form-control"
      autoComplete=""
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
</div>
</>
            )}
             <div className="form-group row my-3">
              <label htmlFor="lwd" className="col-sm-4 col-form-label my-1">
        Do You Have 3rd Call Details
      </label>
      <div className="col-sm-2 my-1">
        <select
          id="id"
          name="call3"
          style={{ color: 'green', appearance: 'auto' }}
          value={formData.call3}
          onChange={handleDropdownChange} // Use handleDropdownChange here
          className="form-control"
        >
           <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
    {formData.call3=== 'Yes' && (
      <>
<h5 className="text-center">3rd Call Details  </h5>
              <div className="form-group row my-3">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                
Date

              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="date"
                  name="cuscalldate2"
                  value={formData.cuscalldate2}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete=""
                 
                />
              </div>
           
           
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              Ist Time
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="time"
                  name="isttime2"
                  value={formData.isttime2}
                  onChange={handleInputChange}
                  className="form-control"
                  autoComplete=""
                />
              </div>
              <label htmlFor="email" className="col-sm-2 col-form-label my-1">
              From Name
              </label>
              <div className="col-sm-2 my-1">
                <input
                  type="text"
                  name="fromname2"
                  value={formData.fromname2}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>
              <div className="form-group row my-1">
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
              Call-3 State
              </label>
              <div className="col-sm-2 my-1">
              <select
      id="id"
      name="callstatus2"
      style={{ color: "green", appearance: "auto" }}
      value={formData.callstatus2}
      onChange={handleInputChange}
      className="form-control"
      required
    >
       <option value="To Follow-up">To Follow-up </option>
      <option value="Poc">Poc</option>
      <option value="Deal">No Deal</option>
     
    </select>
              </div>
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
              MOM with Actions 
  </label>
  <div className="col-sm-6 my-1">
    <textarea
      name="callsummery2"
      value={formData.callsummery2}
      onChange={handleInputChange}
      className="form-control"
      autoComplete=""
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    />
  </div>
  </div>
  </>
  )}

            <div className="form-group row">
              <div className="offset-sm-3 col-sm-9">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </div>
            
           
          </form>
          <br /> <br />
          <div className="text-center">
         <Link to="/loginsucess" state={{data:data}} style={{color:"bluegit"}}>Go Back</Link>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default Application;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./ViweAll.css";
import {
  
  AiOutlineFullscreen,
  AiOutlineCompress,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg"
import { getAdminView,deleteUserById, getSearchQuery} from './Services/Api';
;

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [response1, setResponse1] = useState("");
  const [bdm, setBdm] = useState("");
  const [current, setCurrent] = useState("");
  const [lfs, setLfs] = useState("");
  const [ind, setInd] = useState("");
  const [int, setInt] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [tzone, setTzone] = useState("");
  const [poc, setPoc] = useState("");
  const [lcall, setLcall] = useState("");
  const [emstate, setEmstate] = useState("");
  const [lres, Lres] = useState("");
const[deleteresponse,setDeleteResponse]=useState(false);
  useEffect(() => {
    fetchEmployees();
  }, []);
  
  const fetchEmployees = () => {
   // axios
    //  .get("http://localhost:1279/req")
    getAdminView()
      .then((response) => {
        setEmployees(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const location = useLocation();
  const email = location.state.data.email;
  const handleSubmit2 = (id) => {
    const data = {
      id: id,
      email:email
    };
    navigate("/adminedit", { state: { data: data } });
  };
  const handleSubmitprofile = () => {
    const data = {
      email: email,
    };

    navigate("/adminprofile", { state: { data: data } });
  };
  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteUser(id);
    }
  };

  const deleteUser = (id) => {
    setDeleteResponse(true)
  //  axios
  //    .delete(`http://localhost:1279/delete?id=${id}`)
  deleteUserById(id)
  
      .then((response) => {
        alert("Deleted SucessFully");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleSubmit1 = () => {
   // axios
   //   .get(`http://localhost:1279/search?query=${searchQuery}`)
   getSearchQuery(searchQuery)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const expand = (id) => {
    setResponse1(id);
  };

  useEffect(() => {
    // This will log the updated value of response1 whenever it changes.
  }, [response1]);

  const expand1 = (id) => {
    setResponse1("");
  };
  const handleSubmit = () => {
    if (bdm === "Bharath") {
      const filterData = employees.filter(
        (employee) => employee.bdmname === "Bharath"
      );
      setEmployees(filterData);
    }
    if (bdm === "Prashanth") {
      const filterData = employees.filter(
        (employee) => employee.bdmname === "Prashanth"
      );
      setEmployees(filterData);
    }
    if (bdm === "Posu Babu") {
      const filterData = employees.filter(
        (employee) => employee.bdmname === "Posu Babu"
      );
      setEmployees(filterData);
    }
    if (bdm === "Murali") {
      const filterData = employees.filter(
        (employee) => employee.bdmname === "Murali"
      );
      setEmployees(filterData);
    }
    if (bdm === "Ramana") {
      const filterData = employees.filter(
        (employee) => employee.bdmname === "Ramana"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit3 = () => {
    if (current === "Hot") {
      const filterData = employees.filter(
        (employee) => employee.currentstate === "Hot"
      );
      setEmployees(filterData);
    }
    if (current === "Warm") {
      const filterData = employees.filter(
        (employee) => employee.currentstate === "Warm"
      );
      setEmployees(filterData);
    }
    if (current === "Cold") {
      const filterData = employees.filter(
        (employee) => employee.currentstate === "Cold"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit4 = () => {
    if (lfs === "Yet to Respond") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "Yet to Respond"
      );
      setEmployees(filterData);
    }
    if (lfs === "Waiting for Reply") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "Waiting for Reply"
      );
      setEmployees(filterData);
    }
    if (lfs === "Need to Follow-Up") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "Need to Follow-Up"
      );
      setEmployees(filterData);
    }
    if (lfs === "1st /2nd /3rd - Call Scheduled") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "1st /2nd /3rd - Call Scheduled"
      );
      setEmployees(filterData);
    }
    if (lfs === "POC Started") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "POC Started"
      );
      setEmployees(filterData);
    }
    if (lfs === "Deal Done") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "Deal Done"
      );
      setEmployees(filterData);
    }
    if (lfs === "No Deal") {
      const filterData = employees.filter(
        (employee) => employee.lfstatus === "No Deal"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit5 = () => {
    if (ind === "Banking") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Banking"
      );
      setEmployees(filterData);
    }
    if (ind === "Insurence") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Insurence"
      );
      setEmployees(filterData);
    }
    if (ind === "Manufacturing") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Manufacturing"
      );
      setEmployees(filterData);
    }
    if (ind === "e-Commerce") {
      const filterData = employees.filter(
        (employee) => employee.domain === "e-Commerce"
      );
      setEmployees(filterData);
    }
    if (ind === "Digital Payments") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Digital Payments"
      );
      setEmployees(filterData);
    }
    if (ind === "OTT") {
      const filterData = employees.filter(
        (employee) => employee.domain === "OTT"
      );
      setEmployees(filterData);
    }
    if (ind === "Health Care") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Health Care"
      );
      setEmployees(filterData);
    }
    if (ind === "Automobile") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Automobile"
      );
      setEmployees(filterData);
    }
    if (ind === "Networking") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Networking"
      );
      setEmployees(filterData);
    }
    if (ind === "Cloud Services") {
      const filterData = employees.filter(
        (employee) => employee.domain === "Cloud Services"
      );
      setEmployees(filterData);
    }
    if (ind === "e-Learning/Entertainment") {
      const filterData = employees.filter(
        (employee) => employee.domain === "e-Learning/Entertainment"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit6 = () => {
    if (int === "FE") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "FE"
      );
      setEmployees(filterData);
    }
    if (int === "BE") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "BE"
      );
      setEmployees(filterData);
    }
    if (int === "DB") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "DB"
      );
      setEmployees(filterData);
    }
    if (int === "Mobile") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Mobile"
      );
      setEmployees(filterData);
    }
    if (int === "TV") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "TV"
      );
      setEmployees(filterData);
    }
    if (int === "Support") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Support"
      );
      setEmployees(filterData);
    }
    if (int === "Manual") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Manual"
      );
      setEmployees(filterData);
    }
    if (int === "QA") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "QA"
      );
      setEmployees(filterData);
    }
    if (int === "Automation") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Automation"
      );
      setEmployees(filterData);
    }
    if (int === "Regression") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Regression"
      );
      setEmployees(filterData);
    }
    if (int === "PT") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "PT"
      );
      setEmployees(filterData);
    }
    if (int === "DevOps") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "DevOps"
      );
      setEmployees(filterData);
    }
    if (int === "On-premises") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "On-premises"
      );
      setEmployees(filterData);
    }
    if (int === "AWS") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "AWS"
      );
      setEmployees(filterData);
    }
    if (int === "Azure") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Azure"
      );
      setEmployees(filterData);
    }
    if (int === "GC") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "GC"
      );
      setEmployees(filterData);
    }
    if (int === "Private") {
      const filterData = employees.filter(
        (employee) => employee.intrestserv === "Private"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit7 = () => {
    if (country === "India") {
      const filterData = employees.filter(
        (employee) => employee.coun === "India"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit8 = () => {
    if (region === "Asia") {
      const filterData = employees.filter(
        (employee) => employee.region === "Asia"
      );
      setEmployees(filterData);
    }
    if (region === "North America") {
      const filterData = employees.filter(
        (employee) => employee.region === "North America"
      );
      setEmployees(filterData);
    }
    if (region === "South America") {
      const filterData = employees.filter(
        (employee) => employee.region === "South America"
      );
      setEmployees(filterData);
    }
    if (region === "Europe") {
      const filterData = employees.filter(
        (employee) => employee.region === "Europe"
      );
      setEmployees(filterData);
    }
    if (region === "Antarctica") {
      const filterData = employees.filter(
        (employee) => employee.region === "Antarctica"
      );
      setEmployees(filterData);
    }
    if (region === "Africa") {
      const filterData = employees.filter(
        (employee) => employee.region === "Africa"
      );
      setEmployees(filterData);
    }
    if (region === "Australia") {
      const filterData = employees.filter(
        (employee) => employee.region === "Australia"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit9 = () => {
    if (tzone === "CT") {
      const filterData = employees.filter(
        (employee) => employee.timezone === "CT"
      );
      setEmployees(filterData);
    }
    if (tzone === "PT") {
      const filterData = employees.filter(
        (employee) => employee.timezone === "PT"
      );
      setEmployees(filterData);
    }
    if (tzone === "MT") {
      const filterData = employees.filter(
        (employee) => employee.timezone === "MT"
      );
      setEmployees(filterData);
    }
    if (tzone === "PST") {
      const filterData = employees.filter(
        (employee) => employee.timezone === "PST"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit10 = () => {
    if (poc === "NA") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "NA"
      );
      setEmployees(filterData);
    }
    if (poc === "Planned") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "Planned"
      );
      setEmployees(filterData);
    }
    if (poc === "In-progress") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "In-progress"
      );
      setEmployees(filterData);
    }
    if (poc === "Success") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "Success"
      );
      setEmployees(filterData);
    }
    if (poc === "Faild") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "Faild"
      );
      setEmployees(filterData);
    }
    if (poc === "Deal Done") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "Deal Done"
      );
      setEmployees(filterData);
    }
    if (poc === "No Deal") {
      const filterData = employees.filter(
        (employee) => employee.pocstatus === "No Deal"
      );
      setEmployees(filterData);
    }
  };
  const handleSubmit11 = () => {
    if (emstate === "Yet to Respond") {
      const filterData = employees.filter(
        (employee) => employee.emstate2 === "Yet to Respond"
      );
      setEmployees(filterData);
    }
    if (emstate === "Waiting for Reply") {
      const filterData = employees.filter(
        (employee) => employee.emstate2 === "Waiting for Reply"
      );
      setEmployees(filterData);
    }
    if (emstate === "To Follow-up") {
      const filterData = employees.filter(
        (employee) => employee.emstate2 === "To Follow-up"
      );
      setEmployees(filterData);
    }
  };
  //last
  const handleSubmit12 = () => {
    if (lcall === "To Follow-up") {
      const filterData = employees.filter(
        (employee) => employee.callstatus2 === "To Follow-up"
      );
      setEmployees(filterData);
    }
    if (lcall === "Poc") {
      const filterData = employees.filter(
        (employee) => employee.callstatus2 === "Poc"
      );
      setEmployees(filterData);
    }
    if (lcall === "Deal") {
      const filterData = employees.filter(
        (employee) => employee.callstatus2 === "Deal"
      );
      setEmployees(filterData);
    }
    if (lcall === "No Deal") {
      const filterData = employees.filter(
        (employee) => employee.callstatus2 === "No Deal"
      );
      setEmployees(filterData);
    }
  };
  if(deleteresponse){
    return <div style={{paddingTop:"10%"}}><h1 className='text-center'>Wait.....</h1></div>;
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
            color: "blue",
          }}
        />
      </div>
      <div className="id6">
        <br />
        <br /> <br />
        <Link to="/piechart" state={{ employees }}>
          Show in Pie Charts
        </Link>
      </div>
      <br />
      <br />
      <br /> <br /><br/>
      <h2 className="text-center">Applications List</h2>
      <br/>
      <h4 className="text-center" style={{color:"blue"}}>Total No.of Clients: {employees.length}</h4>
      <div className="search">
        <br />
        <center>
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Universal Search</label>
            <br></br>
            <input
              type="text"
              name="query"
              placeholder="Search Query"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button onClick={(event) => handleSubmit1()}>Search</button>
            <input
              type="reset"
              value="Reset"
              onClick={() => setSearchQuery("")}
            />
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>BDM Name</label>
            <br />

            <select
              value={bdm}
              onChange={(event) => setBdm(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="Bharath">Bharath</option>

              <option value="Prashanth">Prashanth</option>

              <option value="Posu Babu">Posu Babu</option>

              <option value="Murali">Murali</option>

              <option value="Ramana">Ramana</option>
            </select>
            {/* firstt */}
            <button onClick={handleSubmit}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Current State </label>
            <br />
            <select
              value={current}
              onChange={(event) => setCurrent(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="Hot">Hot</option>
              <option value="Warm">Warm</option>
              <option value="Cold">Cold</option>
            </select>
            {/* third */}
            <button onClick={handleSubmit3}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Latest Final Status</label>
            <br />
            <select
              value={lfs}
              onChange={(event) => setLfs(event.target.value)}
            >
              <option value="">Select an option</option>
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
            <button onClick={handleSubmit4}>Search</button>
          </form>
          <br />
          <br />
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Industry/Domain</label>
            <br />
            <select
              value={ind}
              onChange={(event) => setInd(event.target.value)}
            >
              <option value="">Select an option</option>
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
            <button onClick={handleSubmit5}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Interested Service/s</label>
            <br />
            <select
              value={int}
              onChange={(event) => setInt(event.target.value)}
            >
              <option value="">Select an option</option>
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
            <button onClick={handleSubmit6}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Country</label>
            <br />
            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="US">US</option>
              <option value="Bangkok">e-Commerce</option>
            </select>
            <button onClick={handleSubmit7}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Continent/Region</label>
            <br />
            <select
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Europe">Europe</option>
              <option value="Australia">Australia</option>
              <option value="Africa">Africa</option>
              <option value="Antarctica">Antarctica</option>
            </select>
            <button onClick={handleSubmit8}>Search</button>
          </form>
          <br />
          <br />
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Time Zone</label>
            <br />
            <select
              value={tzone}
              onChange={(event) => setTzone(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="CT">CT</option>
              <option value="PT">PT</option>
              <option value="MT">MT</option>
              <option value="PST">PST</option>
            </select>
            <button onClick={handleSubmit9}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>PoC Status</label>
            <br />
            <select
              value={poc}
              onChange={(event) => setPoc(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="NA">NA</option>
              <option value="Planned">Planned</option>
              <option value="In-progress">In-progress</option>
              <option value="Success">Success</option>
              <option value="Faild">Faild</option>
              <option value="Deal Done">Deal Done</option>
              <option value="No Deal">No deal</option>
            </select>
            <button onClick={handleSubmit10}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Last E-Mail State</label>
            <br />
            <select
              value={emstate}
              onChange={(event) => setEmstate(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="Yet to Respond">Yet to Respond </option>
              <option value="Waiting for Reply">Waiting for Reply</option>
              <option value="To Follow-up">To Follow-up</option>
            </select>
            <button onClick={handleSubmit11}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Last Call State</label>
            <br />
            <select
              value={lcall}
              onChange={(event) => setLcall(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="To Follow-up">To Follow-up</option>
              <option value="Poc">Poc</option>
              <option value="Deal">Deal</option>
              <option value="NO Deal">No Deal</option>
            </select>
            <button onClick={handleSubmit12}>Search</button>
          </form>
        </center>
      </div>
      <br />
      <div className="row">
      <table className="table table-striped table-bordered">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {employees.map((emp, id) => (
              <React.Fragment key={emp.id}>
                
                <tr>
                  <th>Application ID</th>
                 <td className="id2">{emp.id}</td>
                  <th>BDM Name</th>
                  <td className="id2">{emp.bdmname}</td>
                  <th>Company Name</th>
                     <td className="id2">{emp.cmpname}</td>
                </tr>
                {response1 !== emp.id&& (
                <tr className="text-center">
                 <td className="id2"></td>

                 <td className="id2" colSpan={3}>
                    <AiOutlineFullscreen
                      onClick={() => expand(emp.id)}
                     
                      style={{
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                )}

                <tr>
                  <th>Latest Response Date</th>
                 <td className="id2">{emp.lastres}</td>
                  <th style={{color:"green"}}>Current State</th>
                 <td className="id2">{emp.currentstate}</td>
                 <th style={{color:"orange"}}>Follow-Up Date</th>
                 <td className="id2" >{emp.followup}</td>
                </tr>
               <br/><br/>
                {response1===emp.id && (
                  <>
                  <tr className="text-center">
                 <td className="id2"></td>

                 <td className="id2" colSpan={4}>
                    <AiOutlineCompress
                      onClick={() => expand1(emp.id)}
                     
                      style={{
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </td>
                  <td></td>
                </tr>
                    <tr>
                      <th>Latest Final Status</th>

                     <td className="id2">{emp.lfstatus}</td>
                    
                      <th>POC Status </th>

                     <td className="id2">{emp.pocstatus}</td>

                      <th>Industry/Domain</th>
                     <td className="id2">{emp.domain}</td>
                    </tr>

                    <tr>
                      <th>Interested Service/s </th>
                     <td className="id2">{emp.intrestserv}</td>
                      <th>Summary</th>

                      <td className="id2" > <textarea
      
      value={emp.moredetail}
     
      className="form-control"
      autoComplete="moredetail"
      rows="1" // You can adjust this initial number of rows
      
      style={{ resize: "vertical",}} // This allows vertical resizing
    /></td>
                    
                      <th>Info Shared</th>
                      <td className="id2" > <textarea
      
      value={emp.infoshared}
     
      className="form-control"
      autoComplete="infoshared"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical", }} // This allows vertical resizing
    /></td>
                       </tr>
                       <tr>
                      <th>Details Asked</th>
                      <td className="id2"  > <textarea
      
      value={emp.detailask}
     
      className="form-control"
      autoComplete="detailask"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical", }} // This allows vertical resizing
    /></td>
                    
                      <th>Website </th>
                     <td className="id2">{emp.website}</td>
                      <th>LinkedIn Profile </th>

                     <td className="id2">{emp.linkprof}</td>
                    </tr>

                    <tr>
                      <th>Continent/Region </th>
                     <td className="id2">{emp.region}</td>
                      <th>Country</th>
                     <td className="id2">{emp.coun}</td>
                      <th>W.r.t IST Time</th>
                     <td className="id2">{emp.time}</td>
            
                    </tr>
                    <tr>
                    <th>Before/After</th>
                     <td className="id2">{emp.cusbefore}</td>
                      <th>
                        Time Zone
                      </th>
                     <td className="id2">{emp.timezone}</td>
                     <th>1st Response Date</th>
                 <td className="id2">{emp.firstres}</td>
                    </tr>
                    <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"orange"}}>
                        Main Contact Person Details
                      </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Full Name </th>
                     <td className="id2">{emp.maincontact}</td>

                      <th>LinkedIn Profile</th>
                     <td className="id2">{emp.mainlinkprof}</td>
                      <th>Email ID</th>
                     <td className="id2">{emp.mainemail}</td>
                    </tr>
                    <tr>
                      
                      <th>Phone No</th>

                     <td className="id2" colSpan={5}>{emp.mainmob}</td>
                    </tr>
                    <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center"  style={{color:"orange"}}>
                        Second Contact Person Details
                      </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Full Name </th>
                     <td className="id2">{emp.secondcontact}</td>

                      <th>LinkedIn Profile</th>
                     <td className="id2">{emp.secondlinkprof}</td>
                      <th>Email ID</th>
                     <td className="id2">{emp.secondmainemail}</td>
                    </tr>
                    <tr>
                     
                      <th>Phone No</th>

                     <td className="id2" colSpan={5}>{emp.secondmob}</td>
                    </tr>
                    <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"indigo"}}>1st e-mail Details </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                     <td className="id2">{emp.emdate}</td>
                      <th>From Name</th>
                     <td className="id2">{emp.emname}</td>
                      <th>To Name</th>
                     <td className="id2">{emp.emtoname}</td>
                    </tr>

                    <tr>
                     
                      <th>E-mail-1 State</th>

                     <td className="id2">{emp.emstate}</td>
                    

                    
                      <th style={{color:"blue"}}>1st e-mail Summary </th>
                      <td className="id2" colSpan={3} > <textarea
      
      value={emp.emsummary}
     
      className="form-control"
      autoComplete="emsummary"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical", }} // This allows vertical resizing
    /></td>
                    </tr>
                    <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"indigo"}}>2nd e-mail Details </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                     <td className="id2">{emp.emdate1}</td>
                      <th>From Name</th>
                     <td className="id2">{emp.emname1}</td>
                      <th>To Name</th>
                     <td className="id2">{emp.emtoname1}</td>
                    </tr>

                    <tr>
                    
                     
                      <th>E-mail-2 State</th>

                     <td className="id2">{emp.emstate1}</td>
                    
                      <th style={{color:"blue"}}>2nd e-mail Summary </th>
                     <td className="id2" colSpan={3}> <textarea
      
      value={emp.emsummary1}
     
      className="form-control"
      autoComplete="emsummary1"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    /></td>
                    </tr>
                   <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"indigo"}}>3rd e-mail Details </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                     <td className="id2">{emp.emdate2}</td>
                      <th>From Name</th>
                     <td className="id2">{emp.emname2}</td>
                      <th>To Name</th>
                     <td className="id2">{emp.emtoname2}</td>
                  </tr>
                     <tr>
                      <th>E-mail-3 State</th>

                     <td className="id2">{emp.emstate2}</td>
                    
                      <th style={{color:"blue"}}>3rd e-mail Summary </th>
                      <td className="id2"colSpan={3}> <textarea
      
      value={emp.emsummary2}
     
      className="form-control"
      autoComplete="emsummary2"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    /></td>
                    </tr>
                   <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"green"}}>1st Call Details </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                     <td className="id2">{emp.cuscalldate}</td>
                      <th>IST Time</th>
                     <td className="id2">{emp.isttime}</td>
                      <th>From Name</th>
                     <td className="id2">{emp.fromname}</td>
                    </tr>
                    <tr>
                      
                      <th>Call-1 State</th>
                     <td className="id2">{emp.callstatus}</td>
                    
                      <th>MOM with Actions </th>
                      <td className="id2" colSpan={3}> <textarea
      
      value={emp.callsummery}
     
      className="form-control"
      autoComplete="callsummery"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    /></td>
                    </tr>
                    <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"green"}}>2nd Call Details </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                     <td className="id2">{emp.cuscalldate1}</td>
                      <th>IST Time</th>
                     <td className="id2">{emp.isttime1}</td>
                      <th>From Name</th>
                     <td className="id2">{emp.fromname1}</td>
                    </tr>
                    <tr>
                      
                      <th>Call-2 State</th>
                     <td className="id2">{emp.callstatus1}</td>
                    
                      <th>MOM with Actions </th>
                      <td className="id2" colSpan={3}> <textarea
      
      value={emp.callsummery1}
     
      className="form-control"
      autoComplete="callsummery1"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    /></td>
                    </tr>
                   <tr>
                   <td className="id2" colSpan={6}>
                      <h5 className="text-center" style={{color:"green"}}>3rd Call Details </h5>
                    </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                     <td className="id2">{emp.cuscalldate2}</td>
                      <th>IST Time</th>
                     <td className="id2">{emp.isttime2}</td>
                      <th>From Name</th>
                     <td className="id2">{emp.fromname2}</td>
                    </tr>
                    <tr>
                     
                      <th>Call-3 State</th>
                     <td className="id2">{emp.callstatus2}</td>
                   
                      <th>MOM with Actions </th>
                      <td className="id2" colSpan={3}> <textarea
      
      value={emp.callsummery2}
     
      className="form-control"
      autoComplete="callsummery2"
      rows="1" // You can adjust this initial number of rows
      style={{ resize: "vertical" }} // This allows vertical resizing
    /></td>
                    </tr>
                   
                    <tr>
                      <th>Edit</th>
                     <td className="id2" colSpan={2}>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleSubmit2(emp.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <th>Delete</th>
                      <td className="id2" colSpan={3}>
                        <button
                          className="btn btn-primary"
                          onClick={() => confirmDelete(emp.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    <br/><br/><br/>
                    <tr>
                     <td className="id2"></td>
                    </tr>
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </div>
  );
};

export default ListEmployee;

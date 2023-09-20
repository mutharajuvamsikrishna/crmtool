import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./ViweAll.css";
import {
  
  AiOutlineFullscreen,
  AiOutlineCompress,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

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

  useEffect(() => {
    fetchEmployees();
  }, []);
  //console.log(response1+"res")
  const fetchEmployees = () => {
    axios
      .get("http://localhost:1279/req")
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
    };
    navigate("/adminedit", { state: { data: data } });
  };
  const handleSubmitprofile = () => {
    const data = {
      email: email,
    };

    navigate("/profile", { state: { data: data } });
  };
  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteUser(id);
    }
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:1279/delete?id=${id}`)
      .then((response) => {
        alert("Deleted SucessFully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit1 = () => {
    axios
      .get(`http://localhost:1279/search?query=${searchQuery}`)
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
    if (bdm === "bdmname_value") {
      const filterData = employees.filter(
        (employee) => employee.bdmname === "bdmname_value"
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
          Show Graphical Representation
        </Link>
      </div>
      <br />
      <br />
      <br /> <br />
      <h2 className="text-center">Customers List</h2>
      <h3 className="text-center">No of Customers {employees.length}</h3>
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
              <option value="bdmname_value">bdmname_value</option>

              <option value="">""</option>

              <option value="">""</option>

              <option value="">""</option>

              <option value="">""</option>
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
                {response1 !== emp.id && (
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
                <br />
                <br />
                <br />
                {response1 === emp.id && (
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
                      <th>Time Zone</th>
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

                      <th>Delete</th>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => confirmDelete(emp.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    <br />
                    <br />
                    <br />
                    <tr>
                      <td></td>
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

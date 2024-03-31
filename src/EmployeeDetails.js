import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { Collapse } from "bootstrap";
import axios from "axios";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [DOB, setDob] = useState();

  //state variables
  const [empid, setid] = useState("");
  const [empname, setname] = useState("");
  const [empgender, setgender] = useState("");
  const [empmobile, setmobile] = useState("");
  const [empemail, setemail] = useState("");
  const [emppassword, setpassword] = useState("");
  const [empdob, setdob] = useState("");

  //state variables for edit
  // const [empname1, setname1] = useState("");
  // const [empgender1, setgender1] = useState("");
  // const [empmobile1, setmobile1] = useState("");
  // const [empemail1, setemail1] = useState("");
  // const [emppassword1, setpassword1] = useState("");
  // const [empdob1, setdob1] = useState("");

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios.get("https://localhost:44338/api/EmployeeDetails").then((result) => {
      setData(result.data);
    });
  };

  const getage = (e) => {
    setdob(e.target.value);
    const selectDate = new Date(e.target.value);
    const today = new Date();
    const age = today.getFullYear() - selectDate.getFullYear();
    setDob(e.target.value);
    document.getElementById("age").value = age;
  };

  const addEmployee = () => {
    const empdata = {
      id: 0,
      name: empname,
      gender: 0,
      mobile: empmobile,
      email: empemail,
      password: emppassword,
      dateOfBirth: empdob,

      // "id": 0,
      // "name": "string",
      // "gender": 0,
      // "mobile": "4045716813",
      // "email": "user@example.com",
      // "password": "jmJfwgTXXiolImqMcao2MpVGN2G88hNdfDkyBp12SZNAMEPIzNXn581U0BXeHx1erXWDMR37vUTk1LBnHl",
      // "dateOfBirth": "2024-03-30"
    };
    axios
      .post("https://localhost:44338/api/EmployeeDetails", empdata)
      .then((result) => {
        getData();
        clear();
      });
  };

  const clear = () => {
    setname("");
    setgender("");
    setmobile("");
    setemail("");
    setpassword("");
    setdob("");
  };

  const editdata = (empid)=>{
  axios.get("https://localhost:44338/api/EmployeeDetails/"+ empid )
  .then((result)=>{
  setname(result.data.name);
  setemail(result.data.email);
  setmobile(result.data.mobile);
  setgender(result.data.gender);
  setpassword(result.data.password);
  setdob(result.data.dateOfBirth)
  setid(empid)
  getData();
})
  };

  const updateEmployee = ()=>{
    const data = {
  
    "id": empid,
    "name": empname,
    "gender": empgender,
    "mobile": empmobile,
    "email": empemail,
    "password": emppassword,
    "dateOfBirth": empdob
  
  }
    const url = "https://localhost:44338/api/EmployeeDetails/" + empid;
    axios.put( url , data)
    .then((result)=>{
      getData();
      clear();
    })
  }

  const deletedata = (empId)=>{
if(window.confirm("Ar you sure you want to delete")=== true){
  axios.delete("https://localhost:44338/api/EmployeeDetails/" + empId)
  .then((result)=>{
    if(result.status === 200){
      getData();
    }
  })
}
  };

  return (
    <Fragment>
      <form>
        <h2 className="heading">Create/Update Employee</h2>
        <table className="table1" id="tableid">
          <tr>
            <td>
              <label for="name">Name:</label>
            </td>
            <td>
              <input
                type="text"
                value={empname}
                id="name"
                name="name"
                required
                onChange={(e) => setname(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label for="gender">Gender:</label>
            </td>
            <td>
              <select
                value={empgender}
                left-align
                id="gender"
                name="gender"
                required
                onChange={(e) => setgender(e.target.value)}
              >
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="mobile">Mobile:</label>
            </td>

            <td>
              <input
                type="text"
                value={empmobile}
                pattern="[0-9]{10}"
                id="mobile"
                name="mobile"
                required
                onChange={(e) => setmobile(e.target.value)}
                title="Please enter valid 10 digits mobile number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">Email:</label>
            </td>
            <input
              type="email"
              value={empemail}
              id="email"
              name="email"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </tr>
          <tr>
            <td>
              <label for="password">Password:</label>
            </td>
            <td>
              <input
                value={emppassword}
                type="password"
                id="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="dateOfBirth">Date of Birth:</label>
            </td>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={empdob}
              required
              // onChange={(e) => setdob(e.target.value)}
              onChange={getage}
            />

            <td>
              <label for="age">Age:</label>
            </td>
            <input type="text" id="age" name="age" readOnly />
          </tr>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <tr>
            <td>
              <input
                type="submit"
                className="btn btn-dark"
                value="Add Employee"
                onClick={addEmployee}
              ></input>
            </td>
            <td>
              <input
                type="submit"
                className="btn btn-dark"
                value="Update Employee"
                onClick={updateEmployee}
              ></input>
            </td>
            {/* <button className="btn btn-dark" value="Add" onClick={addEmployee}>Add Employee</button></td> */}

            <tr>
              <button className="btn btn-dark" onClick={() => navigate("/")}>
                Back to home
              </button>
            </tr>
          </tr>
        </table>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.dateOfBirth}</td>
                    <td colSpan={2}>
                      <button  onClick={()=>editdata(item.id)} className="btn btn-primary">Edit</button>
                      &nbsp;
                      <button onClick={()=>deletedata(item.id)} className="btn btn-danger">Detete</button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
    </Fragment>
  );
};
export default EmployeeDetails;

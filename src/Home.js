import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
const Home = ()=>{

const navigate = useNavigate();
    return(
        <Fragment>
            <table>
                <tr>
                    <td>
            <Button onClick = {()=>navigate("/EmployeeDetails")}className="btn btn-primary" >Create Employee Details</Button>
            <div>&nbsp;&nbsp;&nbsp;</div>
            </td>
            <td>
            <Button onClick = {()=>navigate("/EmployeeExperiencedetails")}className="btn btn-danger" >Fill Employee Experience Details</Button>
            <div>&nbsp;&nbsp;&nbsp;</div>
            </td>
            </tr>
            </table>
<Table striped bordered hover>
      <thead>
        <tr>
        <th>SL NO</th>
          <th>Emp ID</th>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
      </Table>
      </Fragment>
    );
}
export default Home;
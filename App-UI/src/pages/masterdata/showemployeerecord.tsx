//Updated by Saurabh on 25/10/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import axios from 'axios';

let empdata = []

function ShowEmployeeRecord() {
 
  const [data, setData] = useState([]);

  const getData = async () =>{

    await fetch('http://localhost:3001/empMaster/findAll').then((response)=>response.json()).then((data)=>
    //console.log(data.data));
    setData(data.data)    
  )}

  useEffect(() => {
  
    getData()
    
  }, []);

  const columns = [
    {
      Header: "Emp ID",
      accessor: "emp_id",
      sort: true,
    },
    {
      Header: "First Name",
      accessor: "first_name",
      sort: true,
    },
    {
        Header: "Middle Name",
        accessor: "middle_name",
        sort: false,
    },
    {
      Header: "Last Name",
      accessor: "last_name",
      sort: false,
    },
    {
        Header: "Father's/Husband's Name",
        accessor: "fathers_or_husband_name",
        sort: false,
    },
    {
        Header: "Relation",
        accessor: "relation",
        sort: false,
    },
    {
        Header: "Date of Joining",
        accessor: "date_of_joining",
        sort: false,
    },
    {
        Header: "Job Profile",
        accessor: "job_profile",
        sort: false,
    },
    {
        Header: "Date of Birth",
        accessor: "date_of_birth",
        sort: false,
    },
    {
        Header: "Marital Status",
        accessor: "marital_status",
        sort: false,
    },
    {
        Header: "Gender",
        accessor: "gender",
        sort: false,
    },
    {
        Header: "Nationality",
        accessor: "nationality",
        sort: false,
    },
    {
      Header: "Contact Number",
      accessor: "primary_contact_no",
      sort: false,
    },
    
    {
      Header: "Reporting Manager",
      accessor: "reporting_to",
      sort: false,
    },

  ];

  const sizePerPageList = [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "25",
      value: 25,
    },
    {
      text: "All",
      value: data.length,
    },
  ];

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">
             Show Employee Records          
            </h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ShowEmployeeRecord;

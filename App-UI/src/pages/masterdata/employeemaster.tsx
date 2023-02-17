//Updated by Saurabh on 20/10/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link , useHistory} from 'react-router-dom';
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import axios from 'axios';

let empdata = []

function EmployeeMaster() {
 
  const [data, setData] = useState([]);
  const navigate = useHistory()
  const getData = async () =>{

    await fetch('http://localhost:3001/empMaster/findAll').then((response)=>response.json()).then((data)=>
    //console.log(data.data));
    setData(data.data)   
    
  )}

  useEffect(() => {
  
    getData()
    
  }, []);

  const handleUpdate =(id: any)=>{
    navigate.push({pathname:'/editemployee', state: id})
    
    }

  const columns = [
    
    {
      Header: "Full Name",
      accessor: "name",
      sort: true,
    },
    
    {
      Header: "Contact Number",
      accessor: "primary_contact_no",
      sort: false,
    },
    {
      Header: "Job Profile",
      accessor: "job_profile",
      sort: true,
    },
    {
      Header: "Reporting Manager",
      accessor: "reporting_to",
      sort: true,
    },

    {
      Header: 'Action',
      accessor: 'emp_id',
      Cell: ({cell}:any) => (
      <div>
         <Button variant='danger' onClick= {e=> handleUpdate(cell.row.values.emp_id)}>
         <i className="bi-eye-fill"></i>Edit</Button>     
      </div>
      ),
      }
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
             Employee Details
              
            </h4>

            <div className="page-title-right">
              <form className="">
                <Row className="g-2">
                  <Col md={"auto"}>
                    <div className="mb-1 mb-sm-0"></div>
                  </Col>
                  <Col md={"auto"}>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="cursor-pointer"
                      >
                        <i className="uil uil-file-alt me-1"></i>Download
                        <i className="icon">
                          <FeatherIcon icon="chevron-down" />
                        </i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="mail"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Email</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="printer"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Download-CSV</span>
                        </Dropdown.Item>
                        {/* <Dropdown.Divider /> */}
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="printer"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Download-Excel</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
     

                  <Col md={"auto"}>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="warning"
                        id="dropdown-basic"
                        className="cursor-pointer"
                      >
                        <i className="uil uil-cloud-shield"></i> Add New Data
                        <i className="icon">
                          <FeatherIcon icon="chevron-down" />
                        </i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="notify-item" href="/addemployee">
                          <FeatherIcon
                            icon="user"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Add Employee</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="notify-item" href="/uploaddata">
                          <FeatherIcon
                            icon="upload"
                            className="icon-dual icon-xs me-2"
                          />
                          <span>Upload</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </form>
            </div>
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

export default EmployeeMaster;

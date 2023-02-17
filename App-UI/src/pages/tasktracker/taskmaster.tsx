//Created by Saurabh on 24/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link , useHistory} from 'react-router-dom';

let empdata = []

function TaskMaster() {
 
  const [data, setData] = useState([]);
  const navigate = useHistory()
  const getData = async () =>{

    await fetch('http://localhost:3001/tasktracker/findAll').then((response)=>response.json()).then((data)=>
    //console.log(data.data));
    setData(data.data)   
    
  )}

  useEffect(() => {
  
    getData()
    
  }, []);

  console.log(data)

  const handleView =(emp_id: any)=>{
    navigate.push({pathname:'/Assign', state: emp_id})
    
    }

  const columns = [
    
    // {
    //   Header: "Emp.ID",
    //   accessor: "emp_id",
    //   sort: true,
    // },
    {
      Header: "Name",
      accessor: "Emp_name",
      sort: false,
    },
    {
      Header: "TO DO",
      accessor: "TO DO",
      sort: false,
    },
    {
      Header: "In progress",
      accessor: "Inprogress",
      sort: false,
    },
    {
      Header: "Review",
      accessor: "Review",
      sort: false,
    },
    {
      Header: "Done",
      accessor: "Done",
      sort: false,
    },
    {
      Header: "Total Task",
      accessor: "total_task",
      sort: false,
    },
    // {
    //   Header: "Remark",
    //   accessor: "remark",
    //   sort: false,
    // },

    {
      Header: 'Action',
      accessor: 'emp_id',
      Cell: ({cell}:any) => (
      <div>
         <Button variant='danger' onClick= {e=> handleView(cell.row.values.emp_id)}> 
         <i className=""></i>Details</Button>
      </div>),
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
            Teams Task Details
              
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
                            className="icon-dual text-success icon-xs me-2"
                          />
                          <span>Email</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="printer"
                            className="icon-dual text-warning icon-xs me-2"
                          />
                          <span>Download-CSV</span>
                        </Dropdown.Item>
                        {/* <Dropdown.Divider /> */}
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="printer"
                            className="icon-dual text-danger icon-xs me-2"
                          />
                          <span>Download-Excel</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
     
                  <Col md={"auto"}>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        className="cursor-pointer"
                        href='/addtask'>
                        <i className="uil uil-database me-1"></i>Assign Task
                        <i className="icon">
                          <FeatherIcon icon="" />
                        </i>
                      </Dropdown.Toggle>

                      {/* <Dropdown.Menu> */}
                        {/* <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="clipboard"
                            className="icon-dual text-danger icon-xs me-2"
                          />
                          <span>New Task</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="minus-square"
                            className="icon-dual text-warning icon-xs me-2"
                          />
                          <span>Pending Task</span>
                        </Dropdown.Item> */}
                        {/* <Dropdown.Divider /> */}
                        {/* <Dropdown.Item className="notify-item" href="#/">
                          <FeatherIcon
                            icon="check"
                            className="icon-dual text-success icon-xs me-2"
                          />
                          <span>Completed Task</span>
                        </Dropdown.Item> */}
                      {/* </Dropdown.Menu> */}
                    </Dropdown>
                  </Col>
     


                  {/* <Col md={"auto"}>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="warning"
                        id="dropdown-basic"
                        className="cursor-pointer"
                      >
                        <i className="uil uil-cloud-shield me-1"></i> Track The Task
                        <i className="icon">
                          <FeatherIcon icon="chevrons-down" />
                        </i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="notify-item" href="/Assign">
                          <FeatherIcon
                            icon="alert-circle"
                            className="icon-dual text-danger icon-xs me-2"
                          />
                          <span>Track Task</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="notify-item" href="/uploaddocuments">
                          <FeatherIcon
                            icon="upload"
                            className="icon-dual text-info icon-xs me-2"
                          />
                          <span>Upload</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col> */}
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

export default TaskMaster;

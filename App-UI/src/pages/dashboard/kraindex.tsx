import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import axios from 'axios';

let empdata = []

function KraIndex() {
 
  const [data, setData] = useState([]);

  const getData = async () =>{

    await fetch('http://localhost:3001/kra/findAllKra').then((response)=>response.json()).then((data)=>
    //console.log(data.data));
    setData(data.data)    
  )}

  useEffect(() => {
  
    getData()
    
  }, []);

  const columns = [
    {
      Header: "Quater",
      accessor: "quarter",
      sort: true,
    },
    {
      Header: "Weightage %",
      accessor: "weightage",
      sort: true,
    },
    {
      Header: "Achievement",
      accessor: "achievement",
      sort: false,
    },
    {
      Header: "Status",
      accessor: "status",
      sort: false,
    },
    {
      Header: "Manager Comment",
      accessor: "manager_comment",
      sort: false,
    },
    {
      Header: "Acknowledgement",
      accessor: "emp_acknowledgement",
      sort: false,
    },
    
    
  ];

  const sizePerPageList = [
    {
      text: "4",
      value: 4,
    },
    {
      text: "8",
      value: 8,
    },
    {
      text: "12",
      value: 12,
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
             KRA Details
              
            </h4>

            <div className="page-title-right">
              <form className="float-md-end mt-3 mt-md-0">
                <Row className="g-2">
                  <Col md={"auto"}>
                    <div className="mb-1 mb-sm-0"></div>
                  </Col>
                  <Col md={"auto"}>
                  <Button variant="primary" href="/kraindex">Add KRA</Button>
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
                pageSize={4}
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

export default KraIndex;

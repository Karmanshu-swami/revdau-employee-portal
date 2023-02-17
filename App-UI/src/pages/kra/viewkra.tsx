// Created by Saurabh on 10/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link , useHistory } from 'react-router-dom';
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import axios from 'axios';

let empdata = []

function Viewkra() {
 
  const [data, setData] = useState([]);
  const navigate = useHistory()
  const getData = async () =>{

    const newid = sessionStorage.getItem("id");
    // const kra_id = state.kra_id
    await fetch('http://localhost:3001/kra/findKra/'+newid).then((response)=>response.json()).then((data)=>
    // console.log(data.data));
    setData(data.data)    
  )}

  useEffect(() => {
  
    getData()
    
  }, []);

  const handleUpdate =(id: any)=>{
    navigate.push({pathname:'/editkra', state: id})
    
    }

  const columns = [
    {
      Header: "Milestone1",
      accessor: "milestone1",
    },
    {
      Header: "Milestone2",
      accessor: "milestone2",
    },
    {
      Header: "Milestone3",
      accessor: "milestone3",
    },

    {
        Header: "Kra Measurement",
        accessor: "KRA_measure_of_success",
    },
    {
      Header: "Achievement",
      accessor: "achievement",
      Cell: ({row}:any)=>{
        const data = row.original;
        const showAchievementData =(achievement:any)=>{
          alert(achievement);
        }
        return (
          <div onClick={()=>showAchievementData(data.achievement)}>{data.achievement}</div>
        )
      }
    },    
  ];


  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">
             KRA View
            </h4>

         <Row>
        <Col md={"auto"}>
          <div className="page-title-box">
            <Button variant="info" href="/kra" className="btn-sm me-1">
              Back
            </Button>
          </div>
        </Col>
      </Row>
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
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Viewkra;

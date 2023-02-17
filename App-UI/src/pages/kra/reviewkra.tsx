// Updated by Saurabh on 07/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link , useHistory } from 'react-router-dom';
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import axios from 'axios';

let empdata = []

function ReviewKra() {
 
  const [data, setData] = useState([]);
  const navigate = useHistory()
  const getData = async () =>{

    const id = sessionStorage.getItem("id");
    await fetch('http://localhost:3001/kra/findAll/'+id).then((response)=>response.json()).then((data)=>
    // console.log(data.data));
    setData(data.data)    
  )}
  // const UpdateComments = async() =>{
  //   const response = await fetch(`http://localhost:3001/kra/findAllKRA`);
  //   const jsonResponse = await response.json();
  //   console.log(jsonResponse.data.emp_id);
  //   const variable = (jsonResponse.data.emp_id)
  //   sessionStorage.setItem("emp_id", variable)
  //   }

  useEffect(() => {
  
    getData()
    
  }, []);

  // const handleUpdate =(id: any)=>{
  //   navigate.push({pathname:'/editkra', state: id})
    
  //   }

    const handleView =(id: any)=>{
        navigate.push({pathname:'/managercomment', state: id})
        
        }


  const columns = [
    
    {
      Header: "Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Quarter",
      accessor: "quarter",
      sort: true,
    },
   
    {
      Header: "Weightage %",
      accessor: "weightage",
      sort: true,
    },
    // {
    //   Header: "Achievement",
    //   accessor: "achievement",
    //   sort: false,
    // },
    {
      Header: "Kra Measurement",
      accessor: "KRA_measure_of_success",
      sort: true,
    },
    {
      Header: "Metric",
      accessor: "metric",
      sort: true,
    },
    {
      Header: "Status",
      accessor: "status",
      sort: false,
    },
    {
      Header: "Manager Comment",
      accessor: "manager_comment",
      sort: true,
      Cell: ({row}:any)=>{
        const data = row.original;
        const showManagerComment =(manager_comment:any)=>{
          alert(manager_comment);
        }
        return (
          <div onClick={()=>showManagerComment(data.manager_comment)}>{data.manager_comment}</div>
        )
      }
    },
    
    // {
    //   Header: 'Update',
    //   accessor: 'kra_id',
    //   Cell: ({cell}:any) => (
    //   <div>
    //      <Button variant='info' onClick= {e=> handleUpdate(cell.row.values.kra_id)}> 
    //      <i className=" bi-pencil-fill"></i>Edit</Button>
    //   </div>),
    // },
    
    {
        Header: 'Action',
        accessor: 'kra_id',
        Cell: ({cell}:any) => (
        <div>
           <Button variant='danger' onClick= {e=> handleView(cell.row.values.kra_id)}> 
           <i className=""></i>Comment</Button>
        </div>),
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
             Team's KRA Details
              
            </h4>

            {/* <div className="page-title-right">
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
            </div> */}
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

export default ReviewKra;

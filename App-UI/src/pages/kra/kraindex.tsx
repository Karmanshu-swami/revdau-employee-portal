// Updated by Saurabh on 20/10/2022 // last Updated on 10/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../components/Table";
import FeatherIcon from "feather-icons-react";
import { Link , useHistory } from 'react-router-dom';
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import axios from 'axios';

let empdata = []

function KraIndex() {
 
  const [data, setData] = useState([]);
  const navigate = useHistory()
  const getData = async () =>{

    const newid = sessionStorage.getItem("id");
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

    const handleView =(kra_id: any)=>{
      navigate.push({pathname:'/viewkra', state: kra_id})
      
      }

      
  const columns = [
    {
      Header: "Fin.Year",
      accessor: "FY",
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
    {
      Header: "Status",
      accessor: "status",
      sort: false,
      Cell: ({row}:any)=>{
        const data = row.original;
        const showStatusData =(status:any)=>{
          alert(status);
        }
        return (
          <div onClick={()=>showStatusData(data.status)}>{data.status}</div>
        )
      }
    },
    {
      Header: "KRA Description",
      accessor: "KRA_description",
      sort: false,
      Cell: ({row}:any)=>{
        const data = row.original;
        const showManagerComment =(KRA_description:any)=>{
          alert(KRA_description);
        }
        return (
          <div onClick={()=>showManagerComment(data.KRA_description)}>{data.KRA_description}</div>
        )
      }
    },
    {
      Header: "Metric",
      accessor: "metric",
      sort: true,
    },
    {
      Header: 'Action',
      accessor: 'kra_id',
      Cell: ({cell}:any) => (
      <div>
         <Button variant='info' onClick= {e=> handleUpdate(cell.row.values.kra_id)}> 
         <i className=" bi-pencil-fill"></i>Edit</Button>
      </div>),
    },
    
    {
      Header: 'Details',
      accessor: '',
      Cell: ({cell}:any) => (
      <div>
         <Button variant='danger' onClick= {e=> handleView(cell.row.values.kra_id)}> 
         <i className="uil-eye"></i>View</Button>
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
             KRA Details
              
            </h4>

            <div className="page-title-right">
              <form className="float-md-end mt-3 mt-md-0">
                <Row className="g-2">
                  <Col md={"auto"}>
                    <div className="mb-1 mb-sm-0"></div>
                  </Col>
                  <Col md={"auto"}>
                  <Button variant="warning">KRA History</Button>
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

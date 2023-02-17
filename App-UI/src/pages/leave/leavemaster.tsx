import React, { useState, useEffect } from "react";
import {Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

function LeaveTable() {

  const [leave,setLeave] = useState<any[]>([])
  const url = 'http://localhost:3001/leave/findAllLeaves'


  const getData = async () =>{
    await fetch(url).then((response)=>response.json()).then((data)=>
    setLeave(data.data)  
  )}

  const columns = [
    {
      Header: "Employee Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Leave Type",
      accessor: "leave_type",
      sort: true,
    },
    {
      Header: "Reason",
      accessor: "reason",
      sort: true,
    },
    {
      Header: "Start Date",
      accessor: "leave_from",
      sort: true,
    },
    {
      Header: "End Date",
      accessor: "leave_to",
      sort: true,
    },
    {
      Header: "Status",
      accessor: "status",
      sort: true,
    },
    {
      Header: "No. of leaves",
      accessor: "no_of_leave",
      sort: true,
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
      value: leave.length,
    },
  ];

  useEffect(() => {

    getData()
   //console.log(leave[0])
  }, []);
  
 
  return (
    <>

      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Leave Details</h4>
            </div>
        </Col>
      </Row>
      
    
    <Card>
      <Card.Body>
        <Link to="#" className="btn btn-primary btn-sm float-end">
          <i className="uil uil-folder-download me-2"></i> Download
        </Link>
        <Table
                columns={columns}
                data={leave}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
      </Card.Body>
    </Card>
    </>
  );
}

export default LeaveTable;

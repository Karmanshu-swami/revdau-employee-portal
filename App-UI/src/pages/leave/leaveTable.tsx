import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

function LeaveTable() {

  const [leave,setLeave] = useState<any[]>([])
  const emp_id = sessionStorage.getItem('id')
  const url = 'http://localhost:3001/leave/findall/'+emp_id


  const getData = async () =>{
    await fetch(url).then((response)=>response.json()).then((data)=>
    setLeave(data.data)  
  )}

  const columns = [
    
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
      Header: "No of Leaves",
      accessor: "no_of_leave",
      sort: true,
    },
    {
      Header: "Status",
      accessor: "status",
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
      <div></div>
      
    
    <Card>
      <Card.Body>
        <Link to="#" className="btn btn-primary btn-sm float-end">
          <i className="uil uil-folder-download me-2"></i> Download
        </Link>
        <h5 className="card-title mt-0 mb-0 header-title">Leaves History</h5>
        <pre></pre>
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

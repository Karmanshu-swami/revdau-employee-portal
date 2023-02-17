//Created by Saurabh 14/12/2022
import { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Table from "../../components/Table";
import { useHistory } from 'react-router-dom';

// let empdata = []

function ApproveLeave() {
 
  const [data, setData] = useState([]);
  const navigate = useHistory()
  const getData = async () =>{

    const id = sessionStorage.getItem("id");
    await fetch('http://localhost:3001/leave/findAllLeave/'+id).then((response)=>response.json()).then((data)=>
    // console.log(data.data));
    setData(data.data)    
  )}
  useEffect(() => {
    getData()
    
  }, []);

    const handleView =(id: any)=>{
        navigate.push({pathname:'', state: id})
        
        }

  const columns = [
    {
        Header: "Emp ID",
        accessor: "emp_id",
        sort: true,
      },
    {
      Header: "Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Leave From",
      accessor: "leave_from",
      sort: true,
    },
   
    {
      Header: "Leave To",
      accessor: "leave_to",
      sort: true,
    },
    
    {
      Header: "Leave Count",
      accessor: "no_of_leave",
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
      sort: false,
    },
    {
      Header: "Status",
      accessor: "status",
      sort: true,
    },
    
    {
        Header: 'Action',
        accessor: 'kra_id',
        Cell: ({cell}:any) => (
        <div>
           <Button variant='danger' onClick= {e=> handleView(cell.row.values.kra_id)}> 
           <i className=""></i>Status</Button>
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
             Team's Leave Details           
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

export default ApproveLeave;


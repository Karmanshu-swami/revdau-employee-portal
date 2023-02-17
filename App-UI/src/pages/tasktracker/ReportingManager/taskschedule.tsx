//Created by Saurabh on 24/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../../components/Table";
import FeatherIcon from "feather-icons-react";
import { DatePicker } from "antd";
import moment from "moment";
import { Link , useHistory} from 'react-router-dom';
import * as XLSX from 'xlsx';

let empdata = []

function TaskSchedule() {
 
  const [data, setData] = useState([]);
  const { RangePicker } = DatePicker;
  const [date, setDates] = useState([]);
  console.log(date);
  const navigate = useHistory()
  const getData = async () =>{

    const emp_id = sessionStorage.getItem("id");
    await fetch('http://localhost:3001/tasktracker/findAllTaskUnderRM/'+emp_id).then((response)=>response.json()).then((data)=>
    //console.log(data.data));
    setData(data.data)   
  )}

  useEffect(() => {
    getData() 
  }, []);

  // console.log(data)

  const handleTask =(id: any)=>{
    navigate.push({pathname:'/Taskindex', state:id})
    };
    const handleView = (id: any) => {
      navigate.push({ pathname: "/taskhistoryrm", state: id });
    };

  const columns = [
    {
      Header: "Name",
      accessor: "Emp_name",
      sort: false,
    },
    {
      Header: "TO DO",
      accessor: "To Do",
      sort: false,
    },
    {
      Header: "In Progress",
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
      Header: 'Task',
      accessor: 'emp_id',
      Cell: ({cell}:any) => (
        <div>
        <Button
          variant="danger"
           onClick={(e) => handleTask(cell.row.values.emp_id)}
        >
          <i className=""></i>Details
        </Button>
        <Button
          variant="warning"
          onClick={(e) => handleView(cell.row.values.emp_id)}
        >
          <i className=""></i>History
        </Button>
      </div>
      ),
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
  
  const handleDownload= ()=>{console.log('excel')
  var wb = XLSX.utils.book_new(),
  ws = XLSX.utils.json_to_sheet(data)
  XLSX.utils.book_append_sheet(wb,ws,"Sheet1")
  XLSX.writeFile(wb, "TaskReport.xlsx")
}

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
                  <Button variant="danger" onClick={handleDownload}>Download-Report</Button>                    
                    </Col>
                 
                  <Col md={"auto"}>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        className="cursor-pointer"
                        href=''>
                        <i className="uil uil-database me-1"></i>Assign Task
                        <i className="icon">
                          <FeatherIcon icon="" />
                        </i>
                      </Dropdown.Toggle>
                       <Row>
                      <Col md={"auto"}>
                      <RangePicker onChange={(values: any) => {setDates(values.map((item: any) => {
                        return moment(item).format("YYYY-MM-DD");
                        })
                       );
                       }}
                        />
                        </Col>
                      </Row>
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

export default TaskSchedule;

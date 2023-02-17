//Created by Saurabh on 19/12/2022 //updated on 20/12/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Table from "../../../components/Table";
import { useLocation } from "react-router-dom";

let id: any = "";

function TaskHistory() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    id = location.state;
    console.log(id);
  }, [location]);
  const getData = async () => {
    await fetch(`http://localhost:3001/tasktracker/getTasks/` + id)
      .then((response) => response.json())
      .then((data) =>
        //console.log(data.data));
        setData(data.data)
      );
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  const columns = [
    {
      Header: "Project Name",
      accessor: "project_name",
      sort: false,
    },
    {
      Header: "Task Name",
      accessor: "task_name",
      sort: false,
    },
    {
      Header: "Description",
      accessor: "description",
      sort: false,
    },
    {
      Header: "Priority",
      accessor: "priority",
      sort: false,
    },
    {
      Header: "Assigned By",
      accessor: "assigned_by",
      sort: false,
    },
    {
      Header: "Task Status",
      accessor: "task_status",
      sort: false,
    },
    {
        Header: "Start Date",
        accessor: "start_date",
        sort: true,
      },
    {
      Header: "End Date",
      accessor: "end_date",
      sort: true,
    },
    {
        Header: "Submission Date",
        accessor: "submission_date",
        sort: true,
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
            <h4 className="page-title">Emp Task Details</h4>

            <div className="page-title-right">
              <form className="">
                <Row className="g-2">
                  <Col md={"auto"}>
                    <div className="mb-1 mb-sm-0"></div>
                  </Col>
                  <Col md={"auto"}>
                    <div className="page-title-box">
                      <Button
                        variant="primary"
                        href="/taskschedule"
                        className="btn-sm me-1"
                      >
                        Back
                      </Button>
                    </div>
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

export default TaskHistory;

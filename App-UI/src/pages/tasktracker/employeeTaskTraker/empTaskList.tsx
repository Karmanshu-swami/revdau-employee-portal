import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Table from "../../../components/Table";
import EditComment from "./editComment";

const EmpTaskList = () => {
  // const task_id = useParams();
  const [task_id, setTaskId] = useState<any>();
  const [taskList, setTaskList] = useState<any[]>([]);
  const navigate = useHistory();
  // const [show, setShow] = useState(false);
  const emp_id = sessionStorage.getItem("id");
  const url = "http://localhost:3001/taskTracker/getTasks/" + emp_id;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const handleComment = (task_id: any) => {
  //   //alert(task_id);
  //   navigate.push({ pathname: "/editComment/?task=" + task_id });
  // };

  const dt: any = null;
  const [cdate, setDate] = useState(dt);
  const handelDate = () => {
    let dt = new Date().toLocaleDateString();
    setDate(dt);
    console.log("Current date is : ", dt);
  };

  const getData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setTaskList(data.data));
  };

  const columns = [
    {
      Header: "Project Name",
      accessor: "project_name",
      sort: true,
    },
    {
      Header: "Task Name",
      accessor: "task_name",
      sort: true,
    },

    {
      Header: "Given by",
      accessor: "assigned_by",
      sort: true,
    },
    {
      Header: "Priority",
      accessor: "priority",
      sort: true,
    },
    {
      Header: "Target date",
      accessor: "end_date",
      sort: true,
    },
    {
      Header: "Submission date",
      accessor: "submission_date",
      sort: true,
    },

    {
      Header: "Status",
      accessor: "task_status",
      sort: true,
    },
    {
      Header: "Remarks",
      accessor: "remark",
      sort: true,
    },

    {
      Header: "Action",
      accessor: "task_id",
      Cell: ({ cell }: any) => (
        <div>
          <Button
            variant="secondary"
            onClick={() => {
              setTaskId(cell.row.values.task_id);
              setIsDrawerOpen(true);
            }}
          >
            {/* handleComment(cell.row.values.task_id) */}
            <i className="bi bi-info-circle"></i> Details
          </Button>{" "}
          {/* <Button variant="success" onClick={handelDate}>
      
            <i className="bi bi-info-circle"></i> Complete
          </Button> */}
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
      value: taskList.length,
    },
  ];

  useEffect(() => {
    getData();
    //console.log(leave[0])
  }, []);

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width="50vw">
          <EditComment taskid={task_id} />
        </Box>
      </Drawer>
      <Card>
        <Card.Body>
          <h5 className="card-title mt-0 mb-0 header-title">Task List</h5>
          <pre></pre>
          <Table
            columns={columns}
            data={taskList}
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
};

export default EmpTaskList;

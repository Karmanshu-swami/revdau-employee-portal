import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Alert, Card, Form } from "react-bootstrap";
import { dataAPI } from "../../helpers/api/dataAPI";

const AddTask = (params: {
  empID: number;
  project_name: string;
  task_name: string;
  description: string;
  assignedTo: number;
  type: string;
  deadLine: string;
}) => {
  const empID = sessionStorage.getItem("id");
  const [task_name, setTaskName] = useState("");
  const [project_name, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const onTaskClick = (event: any) => {
    setTaskName(event.target.value);
    console.log(event.target.value);
  };
  const onProjectClick = (event: any) => {
    setProjectName(event.target.value);
    console.log(event.target.value);
  };
  const onDescClick = (event: any) => {
    setDescription(event.target.value);
    console.log(event.target.value);
  };
  const onTypeClick = (event: any) => {
    setType(event.target.value);
    console.log(event.target.value);
  };
  const onAssignedToClick = (event: any) => {
    setAssignedTo(event.target.value);
    console.log(event.target.value);
  };
  const onDeadLineClick = (event: any) => {
    setDeadLine(event.target.value);
    console.log(event.target.value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const apires = dataAPI
      .post("http://localhost:3001/taskTracker/addTask", {
        emp_id: empID,
        project_name: project_name,
        task_name: task_name,
        description: description,
        priority: type,
        assigned_by: assignedTo,
        task_status: "type",
        start_date: "2022-11-01",
        end_date: deadLine,
        remark: "good",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    return apires;
  };

  return (
    <>
      <h4>Assign Task</h4>
      <Card>
        <Card.Body>
          <Form className="form-horizontal" onSubmit={onSubmit}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%" }}>
              <Form.Group className="mb-3 mt-1.5">
                  <Form.Label htmlFor="simpleinput">Project Name</Form.Label>
                  <Form.Control
                    name="project_name"
                    type="text"
                    id="simpleinput"
                    value={project_name}
                    onChange={onProjectClick}
                  />
                </Form.Group>

                <Form.Group className="mb-3 mt-1.5">
                  <Form.Label htmlFor="simpleinput">Task</Form.Label>
                  <Form.Control
                    name="task_name"
                    type="text"
                    id="simpleinput"
                    value={task_name}
                    onChange={onTaskClick}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3 mt-1.5">
                  <Form.Label htmlFor="simpleinput">
                    Description of task
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="description"
                    type="text"
                    id="simpleinput"
                    value={description}
                    onChange={onDescClick}
                  />
                </Form.Group>
              </div>
              <div
                className="d-flex"
                style={{ height: "274px", margin: "0 10px" }}
              >
                <div className="vr"></div>
              </div>
              <div style={{ width: "100%" }}>
                <Form.Group className="mb-3 mt-1.5">
                  <Form.Label htmlFor="simpleinput">Priority</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    value={type}
                    onChange={onTypeClick}
                  >
                    <option>Set Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 mt-1.5">
                  <Form.Label htmlFor="simpleinput">Assigned to</Form.Label>

                  <Form.Control
                    name="assignedTo"
                    type="text"
                    id="simpleinput"
                    value={assignedTo}
                    onChange={onAssignedToClick}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-1.5">
                  <Form.Label htmlFor="simpleinput">Dead Line</Form.Label>

                  <Form.Control
                    name="deadLine"
                    type="date"
                    id="simpleinput"
                    value={deadLine}
                    onChange={onDeadLineClick}
                  />
                </Form.Group>
              </div>
            </div>
            <Link to="/taskmaster">
            <button type="submit" className="btn btn-primary" >
              Assign the Task
            </button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddTask;

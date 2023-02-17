import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import PageTitle from "../../../components/PageTitle";
import "../../../assets/scss/custom/pages/_editComment.scss";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";

const EditComment = (taskid: any) => {
  const params = new URLSearchParams(window.location.search);
  const task_id = params.get("task");
  const [showRemark, setShowRemark] = useState(false);
  let history = useHistory();

  const URL =
    "http://localhost:3001/taskTracker/getTaskDetail/" + taskid.taskid;
  const editTask =
    "http://localhost:3001/taskTracker/updateTask/" + taskid.taskid;

  const [task, setTask] = useState<any>({});

  const getData = async () => {
    console.log(taskid);
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data[0]);

        setTask(data.data[0]);
        setTimeout(() => {
          console.log(task);
        }, 200);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onTaskUpdate = (event: any) => {
    console.log(task);
    task["submission_date"] =
    task.task_status === "Done" ? moment().format("YYYY-MM-DD") : "null";
    event.preventDefault();
    window.location.reload();
    const options = {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(editTask, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!task) return <div>loading...</div>;
  return (
    <>
      <p className="detail-heading">Task Details</p>
      <Card className="details_main">
        <div className="details_card w-75 mx-auto">
          <Row>
            <p className="project-name ">{task.project_name}</p>

            <h3 className="">{task.task_name}</h3>
          </Row>

          <Row>
            <h4 className="details_heading">Decsription: </h4>
            <textarea
              className="decsription-textarea mb-3"
              name="description"
              rows={8}
              value={task.description}
              onChange={(e: any) =>
                setTask({ ...task, description: e.target.value })
              }
            />
          </Row>
          <Row>
            <h4 className="details_heading">Assigned By: </h4>
            <p>{task.assigned_by}</p>
          </Row>
          <Row>
            <Col>
              <h4 className="details_heading">Assigning Date: </h4>
              <p>{task.start_date}</p>
            </Col>
            <Col>
              <h4 className="details_heading">Target Date: </h4>
              <p>{task.end_date}</p>
            </Col>
            <Col>
              <h4 className="details_heading">Submission Date: </h4>
              <p>{task.submission_date}</p>
            </Col>
          </Row>
          <Row>
            <h4 className="details_heading">Priority: </h4>
            <Form.Select
              className="mb-2"
              aria-label="Default select example"
              value={task.priority}
              onChange={(e: any) =>
                setTask({ ...task, priority: e.target.value })
              }
            >
              <option value="Low">Low</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </Form.Select>
          </Row>

          <Row>
            <Form.Check
              type="checkbox"
              label="Check to submit Dependency"
              onClick={() => setShowRemark(true)}
              className="mb-2"
            />

            {showRemark ? (
              <>
                <h4 className="details_heading">Remark your Dependency: </h4>
                <Form.Control
                  className="remark-input mb-3"
                  name="remark"
                  type="text"
                  placeholder=""
                  value={task.remark}
                  onChange={(e: any) =>
                    setTask({ ...task, remark: e.target.value })
                  }
                />
              </>
            ) : (
              <h4 className="mb-3">No Dependency</h4>
            )}
          </Row>
          <Row>
            <h4 className="details_heading">Status: </h4>
            <Form.Select
              aria-label="Default select example"
              value={task.task_status}
              onChange={(e: any) =>
                setTask({ ...task, task_status: e.target.value })
              }
            >
              
              <option value="Inprogress">In Progress</option>
              <option value="To Do">To Do</option>
              <option value="Review">Review</option>
              <option value="Done">Done</option>
            </Form.Select>
          </Row>
          <div className="task-button">
            <Button variant="primary" onClick={onTaskUpdate}>
              Submit
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default EditComment;

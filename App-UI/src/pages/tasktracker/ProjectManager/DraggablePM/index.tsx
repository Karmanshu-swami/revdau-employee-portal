// Created by Saurabh on 23/12/2022 //Updated on 28/12/2022

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import * as yup from "yup";
import { Card, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import PageTitle from "../../../../components/PageTitle";

import TaskDetails from "./TaskDetails";
import TaskItem from "./Task";
import AddNewTask from "./AddNewTask";

// dummy data
//import { tasks, TaskTypes } from './data';

// images
import defaultAvatar from "../../../../assets/images/users/avatar-0.png";

interface TaskTypes {
  id: number;
  title: string;
  status: string;
  priority: string;
  userAvatar: string;
  totalComments: number;
  totalSubTasks: number;
  subTaskCompleted: number;
  dueDate: string;
}

interface StateType {
  todoTasks: TaskTypes[];
  inprogressTasks: TaskTypes[];
  reviewTasks: TaskTypes[];
  doneTasks: TaskTypes[];
}
let id: any = "";
let task: any = [];
// kanban
const Kanban = () => {
  // const emp_id = sessionStorage.getItem("id");
  // const URL = (`http://localhost:3001/taskTracker/getTasks/`+id)
  const [state, setState] = useState([]);
  const location = useLocation();
  useEffect(() => {
    id = location.state;
    console.log(id);
  }, [location]);
  const getData = async () => {
    task = await fetch(`http://localhost:3001/taskTracker/getTasks/` + id)
      .then((response) => response.json())
      .then((data) => (task = data.data));
    setState(task);
  };

  useEffect(() => {
    getData();
  }, []);

  const todoTasks = state.filter((t: any) => t["task_status"] === "To Do");
  const inprogressTasks = state.filter(
    (t: any) => t["task_status"] === "Inprogress"
  );
  const reviewTasks = state.filter((t: any) => t["task_status"] === "Review");
  const doneTasks = state.filter((t: any) => t["task_status"] === "Done");
  console.log(inprogressTasks);
  const [totalTasks, setTotalTasks] = useState<number>(state.length);
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [newTaskDetails, setNewTaskDetails] = useState<any>(null);
  /*
   * Form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required(),
      priority: yup.string().required(),
    })
  );

  /*
   * Form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = methods;

  /**
   * Toggles the new task modal
   */
  const toggleNewTaskModal = () => {
    setNewTaskModal((prevstate) => !prevstate);
  };

  /**
   * Creates new empty task with given status
   * @param status
   * @param queue
   */
  const newTask = (status: string, queue: string) => {
    setNewTaskDetails({
      dueDate: new Date(),
      userAvatar: [defaultAvatar],
      status: status,
      queue: queue,
    });
    setNewTaskModal(true);
  };

  /**
   * When date changes
   * @param {} date
   */
  const handleDateChange = (date: Date) => {
    if (newTaskDetails) {
      setNewTaskDetails({ ...newTaskDetails, dueDate: date });
    }
  };

  // a little function to help us with reordering the result
  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (
    source: Iterable<unknown> | ArrayLike<unknown>,
    destination: Iterable<unknown> | ArrayLike<unknown>,
    droppableSource: { index: number; droppableId: string | number },
    droppableDestination: { index: number; droppableId: string | number }
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  /**
   * Gets the list
   */
  const getList = (id: string) => {
    const modifiedState: any = { ...state };
    const stateTasks: any = modifiedState[id] && modifiedState[id];
    return stateTasks;
  };

  /**
   * On drag end
   */
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      let localState: any = { ...state };
      localState[source.droppableId] = items;
      setState(localState);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      const localState = { ...state, ...result };
      setState(localState);
    }
  };

  /**
   * Handles the new task form submission
   */
  const handleNewTask = (values: any) => {
    const formData = {
      title: values["title"],
      priority: values["priority"],
    };

    const newTask = {
      ...newTaskDetails,
      ...formData,
      id: totalTasks + 1,
      dueDate: newTaskDetails.dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      totalComments: 18,
      totalSubTasks: 12,
      subTaskCompleted: 2,
    };

    let modifiedState: any = { ...state };
    let tasks = [...getList(newTaskDetails.queue), newTask];
    modifiedState[newTaskDetails.queue] = [...tasks];

    setState(modifiedState);
    setNewTaskModal(false);
    setTotalTasks(totalTasks + 1);
    reset();
  };

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={
          [
            // { label: 'Tasks', path: '' },
            // { label: 'Task Board', path: '', active: true },
          ]
        }
        title={"Task Board"}
      />

      <TaskDetails newTask={newTask} />

      <Row>
        <Col xs={12}>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">
              {/* todo */}
              <Droppable droppableId="todoTasks">
                {(provided, snapshot) => (
                  <div className="tasks border" ref={provided.innerRef}>
                    <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={<Tooltip>Add New Todo Task</Tooltip>}
                    >
                      <button
                        className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                        id="addNewTodo"
                        onClick={() => newTask("Pending", "todoTasks")}
                      >
                        <i className="uil-plus"></i>
                      </button>
                    </OverlayTrigger>
                    <h5 className="mt-0 task-header header-title">
                      TODO <span className="fs-13">({todoTasks.length})</span>
                    </h5>

                    {todoTasks.length === 0 && (
                      <p className="text-center text-muted pt-2 mb-0">
                        No Tasks
                      </p>
                    )}

                    {todoTasks.map((item, index) => (
                      <Draggable
                        key={item["task_id"]}
                        draggableId={item["task_id"] + ""}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div>
                            {/* todo data start here */}
                            <Card className="border mb-0">
                              <Card.Body className="p-3">
                                <Dropdown className="float-end" align="end">
                                  <Dropdown.Toggle
                                    as="a"
                                    className="cursor-pointer text-muted arrow-none"
                                  >
                                    <i className="uil uil-ellipsis-v fs-14"></i>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    {/* <Dropdown.Item className="text-primary">
                                                                <i className="uil uil-edit-alt me-2"></i>Edit
                                                            </Dropdown.Item> */}
                                    <Dropdown.Item className="text-success">
                                      <i className="uil uil-user-plus me-2"></i>
                                      Notification
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item className="text-warning">
                                                                <i className="uil uil-exit me-2"></i>Leave
                                                            </Dropdown.Item>
                                                            <Dropdown.Divider /> */}
                                    <Dropdown.Item className="text-danger">
                                      <i className="uil uil-trash me-2"></i>
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>

                                <h6 className="mt-0 mb-2 fs-15">
                                  <Link to="#" className="text-body">
                                    {item["project_name"]}
                                  </Link>
                                </h6>

                                <span
                                  className={classNames("badge", {
                                    "badge-soft-danger":
                                      item["priority"] === "High",
                                    "badge-soft-warning":
                                      item["priority"] === "Medium",
                                    "badge-soft-success":
                                      item["priority"] === "Low",
                                  })}
                                >
                                  {item["priority"]}
                                </span>

                                <p className="mb-0 mt-2">
                                  <span className="text-primary fs-3 me-1">
                                    {item["assigned_by"]}
                                  </span></p>
                                  <p className="mb-0 mt-2">
                                  <span className="text-wrap align-middle fs-5 me-3">
                                    {item["description"]}
                                  </span>
                                  <p className="mb-0 mt-2">
                                    <span className="text-wrap align-middle fs-5 me-2">
                                      <small className="text-info ">
                                        {item["start_date"]}
                                      </small>
                                      <small className="float-end text-danger ">
                                        <strong>{item["end_date"]}</strong>
                                      </small>
                                    </span>
                                  </p>
                                </p>
                              </Card.Body>
                            </Card>
                            {/* todo data end */}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              {/* in progress */}
              <Droppable droppableId="inprogressTasks">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks border">
                    <h5 className="mt-0 task-header header-title">
                      In Progress{" "}
                      <span className="fs-13">({inprogressTasks.length})</span>
                    </h5>
                    {inprogressTasks.length === 0 && (
                      <p className="text-center text-muted pt-2 mb-0">
                        No Tasks
                      </p>
                    )}

                    {inprogressTasks.map((item, index) => (
                      <Draggable
                        key={item["task_id"]}
                        draggableId={item["task_id"] + ""}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div>
                            {/* IN progress data start here */}
                            <Card className="border mb-0">
                              <Card.Body className="p-3">
                                <Dropdown className="float-end" align="end">
                                  <Dropdown.Toggle
                                    as="a"
                                    className="cursor-pointer text-muted arrow-none"
                                  >
                                    <i className="uil uil-ellipsis-v fs-14"></i>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    {/* <Dropdown.Item className="text-primary">
                                                                <i className="uil uil-edit-alt me-2"></i>Edit
                                                            </Dropdown.Item> */}
                                    <Dropdown.Item className="text-success">
                                      <i className="uil uil-user-plus me-2"></i>
                                      Notification
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item className="text-warning">
                                                                <i className="uil uil-exit me-2"></i>Leave
                                                            </Dropdown.Item>
                                                            <Dropdown.Divider /> */}
                                    <Dropdown.Item className="text-danger">
                                      <i className="uil uil-trash me-2"></i>
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>

                                <h6 className="mt-0 mb-2 fs-15">
                                  <Link to="#" className="text-body">
                                    {item["project_name"]}
                                  </Link>
                                </h6>

                                <span
                                  className={classNames("badge", {
                                    "badge-soft-danger":
                                      item["priority"] === "High",
                                    "badge-soft-warning":
                                      item["priority"] === "Medium",
                                    "badge-soft-success":
                                      item["priority"] === "Low",
                                  })}
                                >
                                  {item["priority"]}
                                </span>

                                <p className="mb-0 mt-2">
                                  <span className="text-primary fs-3 me-1">
                                    {item["assigned_by"]}
                                  </span></p>
                                  <p className="mb-0 mt-2">
                                  <span className="text-wrap align-middle fs-5 me-3">
                                    {item["description"]}
                                  </span>
                                  <p className="mb-0 mt-2">
                                    <span className="text-wrap align-middle fs-5 me-2">
                                      <small className="text-info ">
                                        {item["start_date"]}
                                      </small>
                                      <small className="float-end text-danger ">
                                        <strong>{item["end_date"]}</strong>
                                      </small>
                                    </span>
                                  </p>
                                </p>
                              </Card.Body>
                            </Card>
                            {/* Inprogress  data end */}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              {/* review */}
              <Droppable droppableId="reviewTasks">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks">
                    {/* <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={<Tooltip>Add New Review Task</Tooltip>}>
                                        <button
                                            className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                            id="addReviewTask"
                                            onClick={() => newTask('Review', 'reviewTasks')}>
                                            <i className="uil-plus"></i>
                                        </button>
                                    </OverlayTrigger> */}
                    <h5 className="mt-0 task-header header-title">
                      Review ({reviewTasks.length})
                    </h5>
                    {reviewTasks.length === 0 && (
                      <p className="text-center text-muted pt-2 mb-0">
                        No Tasks
                      </p>
                    )}

                    {reviewTasks.map((item, index) => (
                      <Draggable
                        key={item["task_id"]}
                        draggableId={item["task_id"] + ""}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div>
                            {/* review data start here */}
                            <Card className="border mb-0">
                              <Card.Body className="p-3">
                                <Dropdown className="float-end" align="end">
                                  <Dropdown.Toggle
                                    as="a"
                                    className="cursor-pointer text-muted arrow-none"
                                  >
                                    <i className="uil uil-ellipsis-v fs-14"></i>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    {/* <Dropdown.Item className="text-primary">
                                                                <i className="uil uil-edit-alt me-2"></i>Edit
                                                            </Dropdown.Item> */}
                                    <Dropdown.Item className="text-success">
                                      <i className="uil uil-user-plus me-2"></i>
                                      Notification
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item className="text-warning">
                                                                <i className="uil uil-exit me-2"></i>Leave
                                                            </Dropdown.Item>
                                                            <Dropdown.Divider /> */}
                                    <Dropdown.Item className="text-danger">
                                      <i className="uil uil-trash me-2"></i>
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                                <h6 className="mt-0 mb-2 fs-15">
                                  <Link to="#" className="text-body">
                                    {item["project_name"]}
                                  </Link>
                                </h6>

                                <span
                                  className={classNames("badge", {
                                    "badge-soft-danger":
                                      item["priority"] === "High",
                                    "badge-soft-warning":
                                      item["priority"] === "Medium",
                                    "badge-soft-success":
                                      item["priority"] === "Low",
                                  })}
                                >
                                  {item["priority"]}
                                </span>

                                <p className="mb-0 mt-2">
                                  <span className="text-primary fs-3 me-1">
                                    {item["assigned_by"]}
                                  </span></p>
                                  <p className="mb-0 mt-2">
                                  <span className="text-wrap align-middle fs-5 me-3">
                                    {item["description"]}
                                  </span>
                                  <p className="mb-0 mt-2">
                                    <span className="text-wrap align-middle fs-5 me-2">
                                      <small className="text-info ">
                                        {item["start_date"]}
                                      </small>
                                      <small className="float-end text-danger ">
                                        <strong>{item["end_date"]}</strong>
                                      </small>
                                    </span>
                                  </p>
                                </p>
                              </Card.Body>
                            </Card>
                            {/* Review data end */}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              {/* done */}
              <Droppable droppableId="doneTasks">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="tasks">
                    {/* <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={<Tooltip>Add New Done Task</Tooltip>}>
                                        <button
                                            className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                            id="addNewDone"
                                            onClick={() => newTask('Done', 'doneTasks')}>
                                            <i className="uil-plus"></i>
                                        </button>
                                    </OverlayTrigger> */}
                    <h5 className="mt-0 task-header header-title">
                      Done ({doneTasks.length})
                    </h5>
                    {doneTasks.length === 0 && (
                      <p className="text-center text-muted pt-2 mb-0">
                        No Tasks
                      </p>
                    )}

                    {doneTasks.map((item, index) => (
                      <Draggable
                        key={item}
                        draggableId={item + ""}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div>
                            {/* Done data start here */}
                            <Card className="border mb-0">
                              <Card.Body className="p-3">
                                {/* <Dropdown className="float-end" align="end">
                                                        <Dropdown.Toggle as="a" className="cursor-pointer text-muted arrow-none">
                                                            <i className="uil uil-ellipsis-v fs-14"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <i className="uil uil-edit-alt me-2"></i>Edit
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <i className="uil uil-user-plus me-2"></i>Add People
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className="text-warning">
                                                                <i className="uil uil-exit me-2"></i>Leave
                                                            </Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item className="text-danger">
                                                                <i className="uil uil-trash me-2"></i>Delete
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown> */}

                                <h6 className="mt-0 mb-2 fs-15">
                                  <Link to="#" className="text-body">
                                    {item["project_name"]}
                                  </Link>
                                </h6>

                                <span
                                  className={classNames("badge", {
                                    "badge-soft-danger":
                                      item["priority"] === "High",
                                    "badge-soft-warning":
                                      item["priority"] === "Medium",
                                    "badge-soft-success":
                                      item["priority"] === "Low",
                                  })}
                                >
                                  {item["priority"]}
                                </span>

                                <p className="mb-0 mt-2">
                                  <span className="text-primary fs-3 me-1">
                                    {item["assigned_by"]}
                                </span></p>
                                <p className="mb-0 mt-2">
                                  <span className="text-wrap align-middle fs-5 me-3">
                                    {item["description"]}
                                  </span>
                                 <p className="mb-0 mt-2">
                                  <small className="float-end text-success">
                                     <strong>{item["submission_date"]}</strong>
                                  </small>
                                </p>
                                </p>
                              </Card.Body>
                            </Card>
                            {/* Done data end */}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </Col>
      </Row>

      {/* add new task modal */}
      {newTaskModal && (
        <AddNewTask
          newTaskModal={newTaskModal}
          toggleNewTaskModal={toggleNewTaskModal}
          handleNewTask={handleNewTask}
          handleSubmit={handleSubmit}
          newTaskDetails={newTaskDetails}
          handleDateChange={handleDateChange}
          register={register}
          errors={errors}
          control={control}
        />
      )}
    </React.Fragment>
  );
};

export default Kanban;

// Created by Saurabh on 09/12/2022 

import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { UseFormHandleSubmit, FieldErrors, Control } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";


// components
import ShreyuDatepicker from "../../../components/Datepicker";
import { FormInput } from "../../../components";
import { setDefaultLocale } from "react-datepicker";

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
  handleNewTask: (values: any) => void;
  handleSubmit: UseFormHandleSubmit<any>;
  newTaskDetails: any;
  handleDateChange: (date: Date) => void;
  errors: FieldErrors;
  control?: Control<any>;
  register?: any;
}

const AddNewTask = ({
  newTaskModal,
  toggleNewTaskModal,
  handleNewTask,
  handleSubmit,
  newTaskDetails,
  handleDateChange,
  register,
  errors,
  control,
}: AddNewTaskProps) => {
  const empID = sessionStorage.getItem("id");

  const [project_name, setProject_name] = useState("");
  const [data, setData] = useState("");
  const [task_name, setTask_name] = useState("");
  const [description, setDescription] = useState("");
  // const [assigned_to, setAssigned_to] = useState("");
  const [assigning_date, setAssigning_date] = useState("");
  const [submission_date, setSubmission_date] = useState("");
  const [priority, setPriority] = useState("");
  const URL = "http://localhost:3001/taskTracker/addTask";
  const assignTask = async () => {
    let data = {
      emp_id: empID,
      project_name: project_name,
      task_name: task_name,
      description: description,
      priority: priority,
      start_date: assigning_date,
      task_status: "In Progress",
      assigned_by: empID,
      end_date: submission_date,
      remark: "Good",
    };
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} size="lg" centered>
      <Modal.Header closeButton>
        <h4 className="modal-title">Create New Task</h4>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(handleNewTask)} className="px-2">
          <FormInput
            name="project_name"
            label="Project"
            placeholder="Enter Project Name"
            type="text"
            containerClass="mb-3"
            register={register}
            // key="title"
            value={project_name}
            onChange={(e) => setProject_name(e.target.value)}
            errors={errors}
            control={control}
          />

          <FormInput
            name="task_name"
            label="Task Name"
            placeholder="Enter Task Name"
            type="text"
            containerClass="mb-3"
            register={register}
            // key="title"
            value={task_name}
            onChange={(e) => setTask_name(e.target.value)}
            errors={errors}
            control={control}
          />

          <FormInput
            name="description"
            label="Description"
            type="textarea"
            containerClass="mb-3"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            register={register}
            // key="description"
            errors={errors}
            control={control}
          />

          <Row>
            <Col md={6}>
              <div className="form-group mb-3">
                <FormInput
                  name="assigning_date"
                  label="Assigning Date"
                  type="date"
                  containerClass="mb-3"
                  register={register}
                  //   key="priority"
                  errors={errors}
                  value={assigning_date}
                  onChange={(e) => setAssigning_date(e.target.value)}
                  control={control}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group mb-3">
                <FormInput
                  name="submission_date"
                  label="Submission Date"
                  type="date"
                  containerClass="mb-3"
                  register={register}
                  //   key="priority"
                  errors={errors}
                  value={submission_date}
                  onChange={(e) => setSubmission_date(e.target.value)}
                  control={control}
                />
              </div>
            </Col>
          </Row>
          <FormInput
            name="priority"
            label="Priority"
            type="select"
            containerClass="mb-3"
            register={register}
            // key="priority"
            errors={errors}
            control={control}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </FormInput>

          <div className="text-end">
            <Button
              variant="light"
              className="me-1"
              onClick={toggleNewTaskModal}
            >
              Cancel
            </Button>
            <Link to="/empTasklist" >
            <Button variant="primary" type="submit" onClick={assignTask}>
              Create
            </Button>
            </Link>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddNewTask;

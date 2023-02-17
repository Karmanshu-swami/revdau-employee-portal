import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';
import axios from 'axios';

const initialValue = {
    emp_id: '',
    FY: '',
    quarter: '',
    KRA_description: '',
    metric: '',
    weightage: '',
    KRA_measure_of_success: '',
    milestone1: '',
    milestone2: '',
    milestone3: '',
    achievement: '',
    status: '',
    manager_comment: '',
    emp_acknowledgement: ''   
}
let data:any = []

const KRA = () => {
    const URL = `http://localhost:3001/kra/add`
    const [user, setUser] = useState(initialValue);
    const { emp_id, FY, quarter, KRA_description, metric, weightage, KRA_measure_of_success, milestone1,
    milestone2, milestone3, achievement, status, manager_comment, emp_acknowledgement  } = user;
      
    const onValueChange = (e:any) => {
       data[e.target.name] = e.target.value
        setUser(data)
        console.log(user);
        }    
    const options = {
        method: 'POST',
        headers:{'Content-Type': 'application/json',},
        body: JSON.stringify(user)
    }
    const addUserDetails = async() =>{
    const response = await fetch(URL, options);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    }

    return (
        <>
        <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title">
             KRA (Key Responsibility Area)
              </h4>
            </div>
          </Col>
        </Row>

        <Row>
        <Col>
        <Card>
            <Card.Body>
                <Form className="form-horizontal">
                    <Row>
                        <Col md={6}>

                        {/* <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Emp Id
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='emp_id' type= "text" id="simpleinput" placeholder="Enter employee id" />
                                </Col>
                            </Form.Group> */}

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                   Financial Year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='FY' type="text" id="simpleinput" placeholder="YYYY-YYYY" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                  Quarter
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='quarter'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Quarter"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                  KRA Description
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='KRA_description'
                                       as="textarea" rows={5} id="example-textarea" 
                                        placeholder="Enter Description"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                Metric (Unit of Measure)
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='metric' type="text" id="simpleinput" placeholder="Metric " />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                  Weightage %
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='weightage'
                                        type="text"
                                        id="simpleinput"
                                        placeholder=""
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="">
                                KRA Measure Of Success
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='"KRA_measure_of_success' type="text" placeholder=""  />
                            </Col>
                            </Form.Group>

                        </Col>
                        <Col md={6}>

                        <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                Milestone 1
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='milestone1' type="text" placeholder="" />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                Milestone 2
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='milestone2' type="text" placeholder="" />
                                </Col>
                            </Form.Group> 
                           
                        <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                Milestone 3
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='milestone3' type="text" placeholder="" />
                                </Col>
                            </Form.Group>  

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Achievement
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='achievement' type="text" placeholder="Achievement" />
                                </Col>
                            </Form.Group>  

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Status
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='status' type="text" placeholder="Status" />
                                </Col>
                            </Form.Group>  
                                                        
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                Manager Comment
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='manager_comment' type="text" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                Emp Acknowledgement
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='emp_acknowledgement' type="text" placeholder="Acknowledgement" />
                                </Col>
                            </Form.Group> 
                            
                        </Col>
                        <Col>
                        <Button variant="success" href="/kra" onClick={() => addUserDetails()}>Submit</Button>
                        </Col> 
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </Col>
        </Row>
      </>
    );
};

export default KRA;

//Created on 17/10/2022 by Saurabh, waiting for the api creation

import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';
import axios from 'axios';

const initialValue = {
    emp_id: '',
    Issued_on: '',
    Issued_by: '',
    remarks: '',
    Current_Status: '',
    Certificate: ''
    
}
let data:any = []

const Certifications = () => {
    const URL = `http://localhost:3001/`
    const [user, setUser] = useState(initialValue);
    const { emp_id, Issued_on, Issued_by, remarks, Current_Status, Certificate} = user;
      
    const onValueChange = (e:any) => {
        setUser({...user,[e.target.name]:e.target.value})
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
             Certifications
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

                        <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Emp Id
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='emp_id' type= "text" id="simpleinput" placeholder="Enter employee id" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                   Issued on
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='Issued_on' type="text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                  Issued by
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='Issued_by'
                                        type="text"
                                        id="simpleinput"
                                        placeholder=""
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                 Remarks
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='remarks'
                                       as="textarea" rows={5} id="example-textarea" 
                                        placeholder="Enter Remarks"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                Current Status
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='Current_Status' type="text" id="simpleinput" placeholder="Status " />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                  Valid through
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='Valid_through'
                                        type="text"
                                        id="simpleinput"
                                        placeholder=""
                                    />
                                </Col>
                            </Form.Group>
                           
                        </Col>
                        <Col md={6}>

                        <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="">
                                Certificate
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='Certificate' type="text" placeholder=""  />
                            </Col>
                            </Form.Group>
                        
                        </Col>
                        <Col>
                        <Button variant="success" href="" onClick={() => addUserDetails()}>Submit</Button>
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

export default Certifications;

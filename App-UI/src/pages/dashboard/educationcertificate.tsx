import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';

const EducationCertificate = () => {
    return (
        <>
        <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title">
              Education Certificate
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
                                   Xth Marks
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" placeholder="Enter Xth Marks " />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                  XIIth Marks
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="email"
                                        id="example-email"
                                        name="example-email"
                                        placeholder="Enter XIIth Marks"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="">
                              Graduation Quali.
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder=" Enter Graduation Details"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Branch
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="Enter Branch " />
                                </Col>
                            </Form.Group>   
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    College Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="Enter College Name " />
                                </Col>
                            </Form.Group>                  
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    University Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="Enter University Name " />
                                </Col>
                            </Form.Group>                
                               <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                   Passing Year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option></option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                           

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Date of Admission
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-date" type="date" name="date" />
                                </Col>
                            </Form.Group>
                                                   
                                                        
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                   Grade(% or CGPA)
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-textarea">
                                    PG Details if have any
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control as="textarea" rows={5} id="example-textarea" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Degree
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" name="tel" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Aggregate
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="tel" name="tel" />
                                </Col>
                            </Form.Group>
                            
                        </Col>
                        <Col>
                        <Button variant="warning" href="/compensationdetails">Next</Button>
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

export default EducationCertificate;

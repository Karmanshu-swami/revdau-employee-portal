import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';

const CompensationDetails = () => {
    return (
        <>
        <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title">
              Compensation Details
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
                                   CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                  Basic Pay
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="email"
                                        id="example-email"
                                        name="example-email"
                                        placeholder=""
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="">
                              Dearness Allowance
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder=" "  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Travel Allowance
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="" />
                                </Col>
                            </Form.Group>   
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Annual Bonus
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="" />
                                </Col>
                            </Form.Group>                  
                          </Col>


                        <Col md={6}>
                               {/* <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Date of Admission
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-date" type="date" name="date" />
                                </Col>
                            </Form.Group> */}
                                                   
                                                        
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                   Variable Pay
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-textarea">
                                    Additional Comment
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control as="textarea" rows={5} id="example-textarea" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Reimbursements
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" name="tel" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Take Home Salary
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="tel" name="tel" />
                                </Col>
                            </Form.Group>
                            
                        </Col>
                        <Col>
                        <Button variant="warning" href="/uploaddocuments">Next</Button>
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

export default CompensationDetails;

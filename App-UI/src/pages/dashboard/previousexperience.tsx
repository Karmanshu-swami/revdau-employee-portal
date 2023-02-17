import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';

const PreviousExperience = () => {
    return (
        <>
        <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title">
              Previous Experience 
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
                                    Company Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" placeholder="Enter Previous Company's name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Job Title
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="email"
                                        id="example-email"
                                        name="example-email"
                                        placeholder="Enter Previous Job Title"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="">
                                Job Location
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="Previous Job Location"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Tools Knowledge
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="" id="example-placeholder" />
                                </Col>
                            </Form.Group>                           
                               <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                   Tenure
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option></option>
                                        <option>Less than 1 year</option>
                                        <option>More than 1 year</option>
                                        <option>Between 1 to 2 years</option>
                                        <option>Between 2 to 4 years</option>
                                        <option>More than 4 years</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                           

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Date of Joining
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-date" type="date" name="date" />
                                </Col>
                            </Form.Group>
                                                   
                                                        
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Previous CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-textarea">
                                    Additional comments
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control as="textarea" rows={5} id="example-textarea" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    References
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" name="tel" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Tel
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="tel" name="tel" />
                                </Col>
                            </Form.Group>
                            
                        </Col>
                        <Col>
                        <Button variant="warning" href="/educationcertificate">Next</Button>
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

export default PreviousExperience;

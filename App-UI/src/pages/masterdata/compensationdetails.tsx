// Created by Saurabh on 04/10/2022 // Updated on 21/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const initialValue = {
    emp_id: '',
    CP1_CTC: '',
    CP1_effective_from: '',
    CP2_CTC: '',
    CP2_effective_from: '',
    CP3_CTC: '',
    CP3_effective_from: '',
    CP4_CTC: '',
    CP4_effective_from: ''
    
}

let emp_id:any = ''
const CompensationDetails = () => {

    useEffect(()=>{
    },[])

    const URL = `http://localhost:3001/compensationDetail/add`
    const [user, setUser] = useState(initialValue);
    const { CP1_CTC, CP1_effective_from, CP2_CTC, CP2_effective_from, CP3_CTC,
        CP3_effective_from, CP4_CTC, CP4_effective_from } = user;
   
     
      const onValueChange = (e:any) => {
        emp_id = sessionStorage.getItem('id')
        setUser({...user,emp_id,[e.target.name]:e.target.value})
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
                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   CP1 CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='CP1_CTC'
                                    type="text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  CP1 Effective
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='CP1_effective_from'
                                        type="date"
                                        id="simpleinput"
                                        placeholder="YYYY-MM-DD" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   CP2 CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='CP2_CTC'
                                    type="text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  CP2 Effective
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='CP2_effective_from'
                                        type="date"
                                        id="simpleinput"
                                        placeholder="YYYY-MM-DD" />
                                </Col>
                            </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   CP3 CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='CP3_CTC'
                                    type="text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  CP3 Effective
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='CP3_effective_from'
                                        type="date"
                                        id="simpleinput"
                                        placeholder="YYYY-MM-DD" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   CP4 CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='CP4_CTC'
                                    type="text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  CP4 Effective
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='CP4_effective_from'
                                        type="date"
                                        id="simpleinput"
                                        placeholder="YYYY-MM-DD" />
                                </Col>
                            </Form.Group>
                        <Col>
                        <Button variant="warning" href="/uploaddocuments" onClick={() => addUserDetails()}>Next</Button>
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

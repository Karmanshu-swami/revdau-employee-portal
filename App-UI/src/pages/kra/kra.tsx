// Created by Saurabh on 06/10/2022 //  last updated on 18/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

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
    status:''
}

let emp_id:any = ''
const KRA = () => {
    
    
    const year=new Date().getFullYear()
    const year1=new Date().getFullYear()+1
    const FY = year+"-"+year1
    
    useEffect(()=>{
      },[])
   
    const URL = `http://localhost:3001/kra/add`
    const [user, setUser] = useState(initialValue);
    const { quarter, KRA_description, metric, weightage, KRA_measure_of_success, milestone1,
    milestone2, milestone3, achievement } = user;
      
    const onValueChange = (e:any) => {
          emp_id = sessionStorage.getItem('id')
         let status= 'new'
        setUser({...user,emp_id,status,FY,[e.target.name]:e.target.value})
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
            
                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   Financial Year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control   name='FY' type="text" id="simpleinput" readOnly={true} placeholder={year+"-"+year1}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                Quarter
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  as="select" onChange={(e:any) => onValueChange(e)} name='quarter' type= "text" id="simpleinput" placeholder="" >
                                    <option>-----Select-----</option>
                                    <option value="1">APR-JUN</option>
                                    <option value="2">JUL-SEP</option>
                                    <option value="3">OCT-DEC</option>
                                    <option value="4">JAN-MAR</option>
                                     </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
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
                                <Form.Label  htmlFor="simpleinput">
                                Metric (Unit of Measure)
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='metric' type="text" id="simpleinput" placeholder="Metric " />
                                    </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="example-email">
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
                                <Form.Label  htmlFor="">
                                KRA Measure Of Success
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='KRA_measure_of_success' type="text" placeholder=""  />
                                    </Col>
                            </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                Milestone 1
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='milestone1' type="text" placeholder="" />
                                    </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                Milestone 2
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='milestone2' type="text" placeholder="" />
                                    </Col>
                            </Form.Group> 
                           
                        <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                Milestone 3
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='milestone3' type="text" placeholder="" />
                                </Col>
                            </Form.Group>  


                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Achievement
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='achievement' type="text" placeholder="Achievement" />
                                    </Col>
                            </Form.Group>  

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

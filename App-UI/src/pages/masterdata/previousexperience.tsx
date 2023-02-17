// Created by Saurabh on 29/09/2022 //// Updated on 22/11/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button, } from 'react-bootstrap';

const initialValue = {
    emp_id: '',
    job1_title: '',
    job1_company: '',
    job1_start_date: '',
    job1_end_date: '',
    job2_title: '',
    job2_company: '',
    job2_start_date: '',
    job2_end_date: '',
    job3_title: '',
    job3_company: '',
    job3_start_date: '',
    job3_end_date: ''
    
}

let emp_id:any = ''
const PreviousExperience = () => {

    useEffect(()=>{
    },[])

    const URL = `http://localhost:3001/jobHistory/add`
    const [user, setUser] = useState(initialValue);
    const { job1_title, job1_company, job1_start_date, job1_end_date, job2_title,
        job2_company, job2_start_date,  job2_end_date, job3_title, job3_company,  job3_start_date,
        job3_end_date} = user;
   
     
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
              Previous Experience (Job History) 
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
                       
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job1 Title
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                    onChange={(e:any) => onValueChange(e)} name='job1_title'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Enter Job Title" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                Job1 Company
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job1_company'
                                    type="text" placeholder="Company"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job1 Start Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job1_start_date'
                                    type="date" placeholder="YYYY-MM-DD" id="example-placeholder" />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job1 End Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job1_end_date'
                                    type="date" placeholder="YYYY-MM-DD" id="example-placeholder" />
                                </Col>
                            </Form.Group>  

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job2 Title
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                    onChange={(e:any) => onValueChange(e)} name='job2_title'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Enter Job Title" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="">
                                Job2 Company
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job2_company'
                                    type="text" placeholder="Company"  />
                                </Col>
                            </Form.Group>


                        <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="simpleinput">
                                    Job2 Start Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job2_start_date'
                                    type="date" placeholder="YYYY-MM-DD" id="example-placeholder" />
                                </Col>
                            </Form.Group> 
                                                   
                                                        
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job2 End Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job2_end_date'
                                    type="date" placeholder="YYYY-MM-DD" id="example-placeholder" />
                                </Col>
                            </Form.Group>  

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job3 Title
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                    onChange={(e:any) => onValueChange(e)} name='job3_title'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Enter Job Title" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="">
                                Job3 Company
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job3_company'
                                    type="text" placeholder="Company"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job3 Start Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job3_start_date'
                                    type="date" placeholder="YYYY-MM-DD" id="example-placeholder" />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job3 End Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control 
                                    onChange={(e:any) => onValueChange(e)} name='job3_end_date'
                                    type="date" placeholder="YYYY-MM-DD" id="example-placeholder" />
                                </Col>
                            </Form.Group> 
                            
                       
                        <Col>
                        <Button variant="success" href="/compensationdetails" onClick={() => addUserDetails()}>Next</Button>
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

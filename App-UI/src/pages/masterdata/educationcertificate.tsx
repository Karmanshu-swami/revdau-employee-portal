import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';
import axios from 'axios';

const initialValue = {
    tenth_per: '',
    tenth_passing_year: '',
    twelveth_per: '',
    twelveth_passing_year: '',
    diploma_per: '',
    diploma_passing_year: '',
    graduation_qualification: '',
    branch: '',
    college: '',
    university: '',
    admission_year: '',
    year_of_passing: '',
    degree_per: '',
    aggregate: '',
    grade: '',
    pg_qualification: '',
    pg_branch: '',
    pg_year: '',
    pg_per: '',
    pg_aggregate: '',
    pg_college: '',
    pg_university:'',
    reporting_to: '',
    status: '',
    CTC: ''
    
}
let data:any = []
const EducationCertificate = () => {
    const newid = sessionStorage.getItem("emp_id");
    const URL = `http://localhost:3001/empMaster/add/`+newid
    const [user, setUser] = useState(initialValue);
    const { tenth_per, tenth_passing_year, twelveth_per, twelveth_passing_year, diploma_per, diploma_passing_year, graduation_qualification,
        branch, college, university, admission_year, year_of_passing, degree_per, aggregate, grade, reporting_to, pg_qualification,
        pg_branch, pg_year, pg_per, pg_aggregate, pg_college, pg_university, status, CTC } = user;
   
     

        const onValueChange = (e:any) => {
            setUser({...user,[e.target.name]:e.target.value})
            console.log(user);
           } 

    const options = {
        method: 'PUT',
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
                       

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   Xth Percentage
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='tenth_per' type="text" id="simpleinput" placeholder="Enter Xth Percentage " />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   Xth Passing Year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='tenth_passing_year' type="text" id="simpleinput" placeholder="Enter Xth Year " />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  XIIth Percentage
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='twelveth_per'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Enter XIIth Percentage"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  XIIth Passing Year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='twelveth_passing_year'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Passing Year"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   Diploma %
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='diploma_per' type="text" id="simpleinput" placeholder="Diploma Percentage " />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                  Diploma passing year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='diploma_passing_year'
                                        type="text"
                                        id="simpleinput"
                                        placeholder="Passing Year"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="">
                              Graduation Qualification
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='graduation_qualification' type="text" placeholder=" Enter Graduation Qualification"  />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Branch
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='branch' type="text" placeholder="Enter Branch " />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    College Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='college' type="text" placeholder="Enter College Name " />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    University Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='university' type="text" placeholder="Enter University Name " />
                                </Col>
                            </Form.Group>          

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Admission Year
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='admission_year' type="text" placeholder="Admission Year " />
                                </Col>
                            </Form.Group>   

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Year Of Passing
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='year_of_passing' type="text" placeholder="Passing Year" />
                                </Col>
                            </Form.Group>   

                       
                       
                           
                        <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Degree %
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='degree_per' type="text" placeholder="Degree Percentage" />
                                </Col>
                            </Form.Group>  

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Aggregate
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='aggregate' type="text" placeholder="Aggregate" />
                                </Col>
                            </Form.Group>  

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Grade/Div.
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='grade' type="text" placeholder="Grade/Divison" />
                                </Col>
                            </Form.Group> 

                             {/* <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                    Reporting Manager
                                </Form.Label>
                                <Col lg={10}>
                                     <Form.Control as="select" onChange={(e:any) => onValueChange(e)} name='reporting_to' type="text" placeholder="" >
                                        <option>-----Select-----</option>
                                        <option value="Bhuvanesh Singh Rajput">Bhuvanesh Singh Rajput</option>
                                        <option value="Dharamveer Singh">Dharamveer Singh</option>
                                        <option value="Nikhil Engineer">Nikhil Engineer</option>
                                        <option value="Pallavi Sharma">Pallavi Sharma</option>
                                        <option value="Pravin Bisen">Pravin Bisen</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>  */}
                           <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                    Reporting Manager
                                </Form.Label>
                                <Col lg={10}>
                                     <Form.Control as="select" onChange={(e:any) => onValueChange(e)} name='reporting_to' type="text" placeholder="" >
                                        <option>-----Select-----</option>
                                        <option value="1">Bhuvanesh Singh Rajput</option>
                                        <option value="2">Dharamveer Singh</option>
                                        <option value="3">Nikhil Engineer</option>
                                        <option value="4">Pallavi Sharma</option>
                                        {/* <option value="Pravin Bisen">Pravin Bisen</option> */}
                                    </Form.Control>
                                </Col>
                            </Form.Group> 


                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="simpleinput">
                                    PG Qualification
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  onChange={(e:any) => onValueChange(e)} name='pg_qualification' type="text" placeholder="Enter PG Qualification" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PG Branch
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='pg_branch' type="text" placeholder="Enter Branch " />
                                </Col>
                            </Form.Group> 
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PG Year of Passing
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='pg_year' type="text" placeholder="Passing Year " />
                                </Col>
                            </Form.Group> 
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PG %
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='pg_per' type="text" placeholder="PG Percentage " />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PG Aggregate
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='pg_aggregate' type="text" placeholder="PG Aggregate " />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PG College 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='pg_college' type="text" placeholder="Enter College name" />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PG University
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='pg_university' type="text" placeholder="Enter University name " />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Status
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control as="select" onChange={(e:any) => onValueChange(e)} name='status' type="text" placeholder="" >
                                        <option>-----Select-----</option>
                                        <option value="Active">Active</option>        
                                </Form.Control>   
                                </Col>                         
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    CTC
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='CTC' type="text" placeholder="Enter CTC " />
                                </Col>
                            </Form.Group> 

                        
                        <Col>
                        <Button variant="success" href="/previousexperience" onClick={() => addUserDetails()}>Next</Button>
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

// Created by Saurabh on 29/09/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import { Input } from '@nextui-org/react';
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';
import axios from 'axios';


const initialValue = {
    title: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    role: '',
    fathers_or_husband_name: '',
    gender: '',
    relation: '',
    PAN: '',
    addhar_no: '',
    nominee_name: '',
    nominee_relationship: '',
    existing_UAN_and_EPF_no: '',
    bank_account_holder_name: '',
    bank_account_no: '',
    bank_account_type: '',
    IFSC_code: '',
    bank_name_and_branch_address: '',
    marital_status: '',
    date_of_birth: '',
    date_of_joining: '',
    personal_email_id: '',
    job_profile: '',
    primary_contact_no: '',
    alternative_contact_no: '',
    current_address: '',
    permanent_address: '',
    emergency_contact_no: '',
    emergency_contact_person: '',
    emergency_contact_relation: '',
    emergency_contact_address: '',
    nationality: '',
    blood_group: '',
    weight_in_kilogram: '',
    height_in_centimeter: ''
    
}
let data:any = []
const AddEmployee = () => {

    const URL = `http://localhost:3001/empMaster/add`
    const [user, setUser] = useState(initialValue);
    const { title, first_name, middle_name, last_name, email, password, role, fathers_or_husband_name, personal_email_id, job_profile, relation, PAN, addhar_no, 
        nominee_name, nominee_relationship, existing_UAN_and_EPF_no, bank_account_holder_name, bank_account_no, bank_account_type, IFSC_code, 
        bank_name_and_branch_address, date_of_joining, date_of_birth, primary_contact_no,  gender, marital_status, 
        nationality, current_address,emergency_contact_no, emergency_contact_person, emergency_contact_relation, emergency_contact_address, blood_group, permanent_address, 
        alternative_contact_no, weight_in_kilogram, height_in_centimeter } = user;
   
     
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
    console.log(jsonResponse.data.emp_id);
    const variable = (jsonResponse.data.emp_id)
    sessionStorage.setItem("emp_id", variable)
    }


    return (
        <>
        <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title">
             Employee Details 
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
                                    Title
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='title' type= "text" id="simpleinput" placeholder="Mr./Mrs./Ms." />
                                </Col>

                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                    First Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='first_name' type= "text" id="simpleinput" placeholder="Enter first name" />
                                </Col>
                            </Form.Group>

                             <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                    Middle Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='middle_name' type= "text" id="simpleinput" placeholder="Enter middle name" />
                                </Col>
                                </Form.Group> 

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                    Last Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='last_name' type= "text" id="simpleinput" placeholder="Enter last name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                    Email
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='email' type= "email" id="simpleinput" placeholder="Enter Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="password">
                                    Password
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='password' type= "password" id="simpleinput" placeholder="Enter Password" />
                                    {/* <Input.Password bordered labelPlaceholder="Password" /> */}
                                </Col>
                            </Form.Group>

                          <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                  Role
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  as="select" onChange={(e:any) => onValueChange(e)} name='role' type= "text" id="simpleinput" placeholder="Enter Role" >
                                    <option>-----Select-----</option>
                                    <option value="Admin">Admin</option>
                                    <option value="HR">HR</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Employee">Employee</option>
                                     </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                    Father or Husband Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='fathers_or_husband_name' type= "text" id="simpleinput" placeholder="Enter father or husband name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   Relation
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control  as="select" onChange={(e:any) => onValueChange(e)} name='relation' type= "text" id="simpleinput" placeholder="" >
                                    <option>-----Select-----</option>
                                        <option value="Father">Father</option>
                                        <option value="Husband">Husband</option>
                                        </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label  htmlFor="simpleinput">
                                   Marital Status
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control as="select" onChange={(e:any) => onValueChange(e)} name='marital_status' type= "text" id="simpleinput" placeholder="" >
                                    <option>-----Select-----</option>
                                        <option value="Married">Married</option>
                                        <option value="Unmarried">Unmarried</option>
                                        </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="example-email">
                                   Personal Email ID
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='personal_email_id' type="email" id="example-email" placeholder="Enter user email" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Job Profile
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='job_profile' type="text" placeholder="Enter job profile" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    PAN 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='PAN' type="text" placeholder="Enter PAN number" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="simpleinput">
                                    Aadhaar 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='addhar_no' type="text" placeholder="Enter Adhaar number" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Nominee Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='nominee_name' type="text" placeholder="Enter Nominee name" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                 Nominee Relationship
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='nominee_relationship' type="text" placeholder="Enter Nominee relation" id="example-placeholder" />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Existing UAN & EPF No. 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='existing_UAN_and_EPF_no' type="text" placeholder="Enter UAN and EPF number" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Bank account holder name 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_account_holder_name' type="text" placeholder="Enter account holder name" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Bank account number 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_account_no' type="text" placeholder="Enter account number" id="example-placeholder" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Bank account type 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_account_type' type="text" placeholder="Enter account type" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    IFSC code
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='IFSC_code' type="text" placeholder="Enter IFSC code" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                       

                        <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="example-textarea">
                                    Bank name and Branch address
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_name_and_branch_address' as="textarea" rows={5} id="example-textarea" />
                                </Col>
                            </Form.Group>
                           
                             <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Date of Birth
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='date_of_birth' id="" type="date"  placeholder="YYYY-MM-DD"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="simpleinput">
                                    Date of Joining
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='date_of_joining' id="" type="date" placeholder="YYYY-MM-DD" />
                                </Col>
                            </Form.Group>
        
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label  htmlFor="">
                                 Gender
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control as="select" onChange={(e:any) => onValueChange(e)} name='gender' type="text" placeholder="" >
                                        <option>-----Select-----</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">Transgender</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Primary Contact number
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='primary_contact_no'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Alternative Contact number
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='alternative_contact_no'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Current Address
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='current_address'  type="text" placeholder="Enter Current address" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Permanent Address
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='permanent_address'  type="text" placeholder="Enter Permanent address" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Emergency Contact number
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_no'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Emergency Contact person
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_person'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Emergency Contact Relation
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_relation'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Emergency Contact Address
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_address'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Nationality
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control as="select" onChange={(e:any) => onValueChange(e)} name='nationality'  type="text"  >
                                    <option>-----Select-----</option>
                                    <option value="Indian">Indian</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                             <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Blood Group
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='blood_group'  type="text" placeholder="Enter Blood group" id="example-placeholder"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                                Height (cm)
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='height_in_centimeter'  type="text"  placeholder="Enter Height in centimeter" id="example-placeholder"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label >
                               Weight (kg)
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='weight_in_kilogram'  type="text"  placeholder="Enter weight in kilogram" id="example-placeholder"  />
                                </Col>
                            </Form.Group>
                            
                       
                        <Col>
                        <Button variant="success" href="/educationcertificate" onClick={() => addUserDetails()}>Next</Button>
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

export default AddEmployee;

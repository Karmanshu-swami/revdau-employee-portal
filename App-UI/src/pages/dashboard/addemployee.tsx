import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Table from "../../components/Table";
import PageTitle from '../../components/PageTitle';
import Basic from '../forms/Basic';
import axios from 'axios';

const initialValue = {
    emp_id: '',
    title: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    fathers_or_husband_name: '',
    gender: '',
    relation: '',
    PAN: '',
    addhar_no: '',
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
    reporting_to: '',
    primary_contact_no: '',
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
    const [user, setUser] = useState([]);
    // const { emp_id, title, first_name, personal_email_id, job_profile, relation, PAN, addhar_no, existing_UAN_and_EPF_no, bank_account_holder_name, 
    //     bank_account_no, bank_account_type, IFSC_code,  bank_name_and_branch_address, date_of_joining, date_of_birth,
    //     primary_contact_no, middle_name, last_name, fathers_or_husband_name, gender, marital_status, reporting_to, nationality,
    //     emergency_contact_no, emergency_contact_person, emergency_contact_relation, emergency_contact_address, blood_group,
    //     weight_in_kilogram, height_in_centimeter } = user;
   
     
      const onValueChange = (e:any) => {
       data[e.target.name] = e.target.value
        setUser(data)
        
        }    
    
    const options = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)        
    }

    const addUserDetails = async() =>{       
    const response = await fetch(URL, options);
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    }

    

    return (
        <>
        <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title">
              Add Employee  
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
                                    Title
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='title' type= "text" id="simpleinput" placeholder="Mr./Mrs./Ms." />
                                </Col>

                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    First Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='first_name' type= "text" id="simpleinput" placeholder="Enter first name" />
                                </Col>
                            </Form.Group>

                             <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Middle Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='middle_name' type= "text" id="simpleinput" placeholder="Enter middle name" />
                                </Col>
                                </Form.Group> 

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Last Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='last_name' type= "text" id="simpleinput" placeholder="Enter last name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Father or Husband Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='fathers_or_husband_name' type= "text" id="simpleinput" placeholder="Enter father or husband name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                   Relation
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='relation' type= "text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 mt-1.5">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                   Marital Status
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='marital_status' type= "text" id="simpleinput" placeholder="" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Email
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='personal_email_id' type="email" id="example-email" placeholder="Enter user email" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Role
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='job_profile' type="text" placeholder="Enter job profile" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    PAN 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='PAN' type="text" placeholder="Enter PAN number" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Aadhaar 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='addhar_no' type="text" placeholder="Enter Adhaar number" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Existing UAN & EPF No. 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='existing_UAN_and_EPF_no' type="text" placeholder="Enter UAN and EPF number" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Bank account holder name 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_account_holder_name' type="text" placeholder="Enter account holder name" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Bank account number 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_account_no' type="text" placeholder="Enter account number" id="example-placeholder" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    Bank account type 
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_account_type' type="text" placeholder="Enter account type" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-role">
                                    IFSC code
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='IFSC_code' type="text" placeholder="Enter IFSC code" id="example-placeholder" />
                                </Col>
                            </Form.Group>

                        </Col>
                        <Col md={6}>

                        <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-textarea">
                                    Bank name and Branch address
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='bank_name_and_branch_address' as="textarea" rows={5} id="example-textarea" />
                                </Col>
                            </Form.Group>
                           
                             <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Date of Birth
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='date_of_birth' id="example-date" type="date"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Date of Joining
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control onChange={(e:any) => onValueChange(e)} name='date_of_joining' id="example-date" type="date" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Reporting Manager
                                </Form.Label>
                                <Col lg={10}>
                                     <Form.Select>
                                onChange={(e:any) => onValueChange(e)} name='reporting_to' type="text" placeholder="" 
                                        <option></option>
                                        <option value="Bhuvanesh Singh Rajput">Bhuvanesh Singh Rajput</option>
                                        <option value="DS">Dharamveer Singh</option>
                                        <option value="NE">Nikhil Engineer</option>
                                        <option value="PS">Pallavi Sharma</option>
                                        <option value="PB">Pravin Bisen</option>
                                    </Form.Select>
                                    {/* <Form.Control onChange={(e:any) => onValueChange(e)} name='reporting_to' type="text"/> */}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="">
                                 Gender
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Select>
                                onChange={(e:any) => onValueChange(e)} name='gender' type="text" placeholder="" 
                                        <option></option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                    {/* <Form.Control onChange={(e:any) => onValueChange(e)} name='gender' type="text"/> */}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Primary Contact number
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='primary_contact_no'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Emergency Contact number
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_no'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Emergency Contact person
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_person'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Emergency Contact Relation
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_relation'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Emergency Contact Address
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='emergency_contact_address'  type="text"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Nationality
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='nationality'  type="text"  />
                                </Col>
                            </Form.Group>

                             <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Blood Group
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='blood_group'  type="text" placeholder="Enter Blood group" id="example-placeholder"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                Height (cm)
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='height_in_centimeter'  type="text"  placeholder="Enter Height in centimeter" id="example-placeholder"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                               Weight (kg)
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control onChange={(e:any) => onValueChange(e)} name='weight_in_kilogram'  type="text"  placeholder="Enter weight in kilogram" id="example-placeholder"  />
                                </Col>
                            </Form.Group>
                            
                        </Col>
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

export default AddEmployee;

//Updated by Saurabh on 28/10/2022
    import React, { useState, useEffect } from "react";
    import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
    import FeatherIcon from "feather-icons-react";
    import { useLocation } from "react-router-dom";
    import Table from "../../components/Table";
    import PageTitle from '../../components/PageTitle';
    import Basic from '../forms/Basic';
    import axios from 'axios';
    
    const initialValue = {
        manager_comment: ''  
    }
    let data:any = []
    let id:any = ""
    // let empid:any = []
    const ManagerComment = () => {
    
        const location = useLocation()
        useEffect(()=>{
    
           id = location.state
           console.log(id) 
          },[location])

        // const empid = sessionStorage.getItem("emp_id");
        const URL = `http://localhost:3001/kra/update/`+id
        const [user, setUser] = useState(initialValue);
        const { manager_comment} = user;
          
        const onValueChange = (e:any) => {
            setUser({...user,[e.target.name]:e.target.value})
            console.log(user);
           } 
    
        const options = {
            method: 'PUT',
            headers:{'Content-Type': 'application/json',},
            body: JSON.stringify(user)
        }
        const UpdateComments = async() =>{
        const response = await fetch(URL, options);
        const jsonResponse = await response.json();
        console.log(jsonResponse.data.emp_id);
        }
    
        return (
            <>
            <Row>
              <Col>
                <div className="page-title-box">
                  <h4 className="page-title">
                 Update Your Comments
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
                                    Manager Comment
                                    </Form.Label>
                                    <Col lg={8}>
                                        <Form.Control  onChange={(e:any) => onValueChange(e)} name='manager_comment' type="text" placeholder="Enter Your Comment!" />
                                    </Col>
                                </Form.Group>
                                
                           
                            <Col>
                            <Button variant="success" href="/reviewkra" onClick={() => UpdateComments()}>Submit</Button>
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
    
    export default ManagerComment;
    
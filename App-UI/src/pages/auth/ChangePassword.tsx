import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from "react-bootstrap";




const ChangePassword = () => {
    const [dateRange, setDateRange] = useState<any>([new Date(), new Date().setDate(new Date().getDate() + 7)]);
    const [startDate, endDate] = dateRange;


    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Change Password</h4>
                       
                    </div>
                    
                </Col>
            </Row>

            <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form className="form-horizontal">
                <Row> <Col sm={6} xl={4}><Form.Group className="mb-3">
                    <Form.Label htmlFor="simpleinput">
                     Old Password: 
                    </Form.Label>
                   
                      <Form.Control                        
                        name="edit_comment"
                        type="password"
                        placeholder=""
                        
                      />
                   
                  </Form.Group></Col>
                  

                
                </Row>
                <Row> <Col sm={6} xl={4}><Form.Group className="mb-3">
                    <Form.Label htmlFor="simpleinput">
                      New Password: 
                    </Form.Label>
                   
                      <Form.Control                        
                        name="edit_comment"
                        type="password"
                        placeholder=""
                        
                      />
                   
                  </Form.Group></Col>
                  
              
                </Row>
                <Row> <Col sm={6} xl={4}><Form.Group className="mb-3">
                    <Form.Label htmlFor="simpleinput">
                      Confirm Password: 
                    </Form.Label>
                   
                      <Form.Control                        
                        name="edit_comment"
                        type="password"
                        placeholder=""
                       
                      />
                   
                  </Form.Group></Col>
                 
              
                </Row>
              
                <Row><Col><Button variant="danger">Update</Button></Col></Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

           
           
        </>
    );
};

export default ChangePassword;

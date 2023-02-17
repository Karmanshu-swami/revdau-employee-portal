// Created by pallavi sharma on 16/nov/2022
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Pdf1 from '../../PolicyDocuments/RevDau_Code of Conduct_Policy.pdf'
import Pdf2 from '../../PolicyDocuments/RevDau_Conflict Of Interest_Policy.pdf'
import Pdf3 from '../../PolicyDocuments/RevDau_Exit_Policy.pdf'
import Pdf4 from '../../PolicyDocuments/RevDau_Holiday_Calendar_2022.pdf'
import Pdf5 from '../../PolicyDocuments/RevDau_Leave_Policy.pdf'
import Pdf6 from '../../PolicyDocuments/RevDau_Performance Appraisal and Salary Review_Policy.pdf'
import Pdf7 from '../../PolicyDocuments/RevDau_Probation_Policy.pdf'
import Pdf8 from '../../PolicyDocuments/RevDau_The Whistleblower_Policy.pdf'
import Pdf9 from '../../PolicyDocuments/RevDau_Violence in the Workspace_Policy.pdf'
// components




const CompanyPolicy = () => {
    return (
        <div>
             <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Company Policies</h4>
                       
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Code Of Conduct</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf1} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Conflict of Interest</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf2} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Exit Policy</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf3} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                </Row>
                <Row>
                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Holiday Calendar</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf4} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Leave Policy</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf5} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Performance Appraisal</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf6} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                </Row>
                <Row>
                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Probation Policy</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf7} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Whistle Blower</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf8} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} xl={3}>
                <Card>
                    <Card.Body>
                        
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Violence @ Workplace</h3>
                        </div>                       
                        <div className="p-2 d-block text-end " >                            
                        <a href={Pdf9} target={'_blank'}>Click to Open</a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                </Row>
        </div>
    );
};

export default CompanyPolicy;

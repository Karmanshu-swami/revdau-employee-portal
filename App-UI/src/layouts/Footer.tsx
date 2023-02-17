import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col sm={6}>
                        {currentYear} &copy; Revdau Industries Private Limited 
                        {/* <Link to="#">Coderthemes</Link> */}
                    </Col>

                    <Col sm={6}>
                       
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;

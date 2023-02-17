import React, { useState } from 'react';
import { Row, Col, Dropdown, ButtonGroup } from 'react-bootstrap';

import Statistics from './Statistics';


const EcommerceDashboard = () => {
    const [dateRange, setDateRange] = useState<any>([new Date(), new Date().setDate(new Date().getDate() + 7)]);
    const [startDate, endDate] = dateRange;

    /*
     * handle date change
     */
    const onDateChange = (date: Date) => {
        if (date) {
            setDateRange(date);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard</h4>
                       
                    </div>
                </Col>
            </Row>

            <Statistics />

           
           
        </>
    );
};

export default EcommerceDashboard;

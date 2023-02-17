// Created by Saurabh on 24/11/2022
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import StatisticsChartWidget from '../../components/StatisticsChartWidget';

const tasktracker = () => {
    return (
        <div>
            <Row>
                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="Task master"
                        stats="Total Task"
                        trend={{
                            textClass: 'text-success',
                            icon: 'bi-people-fill',
                            value: '',
                        }}
                        pageName="/taskmaster"
                        colors={['#727cf5']}
                    />
                </Col>
                </Row>
        </div>
    );
};

export default tasktracker;

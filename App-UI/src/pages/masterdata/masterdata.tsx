// Created by Saurabh on 03/10/2022
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import StatisticsChartWidget from '../../components/StatisticsChartWidget';

const masterdata = () => {
    return (
        <div>
            <Row>
                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="Emp. master"
                        stats="Total employee"
                        trend={{
                            textClass: 'text-success',
                            icon: 'bi-people-fill',
                            value: '',
                        }}
                        pageName="/employee master"
                        colors={['#727cf5']}
                    />
                </Col>

                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="Leave master"
                        stats="Leave sanctioned"
                        trend={{
                            textClass: 'text-warning',
                            icon: 'bi-journal-bookmark-fill',
                            value: '',
                        }}
                        pageName="/leavemaster"
                        colors={['#43d39e']}
                    />
                </Col>

                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="KRA master"
                        stats="Whole member Kra"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'bi-key-fill',
                            value: '',
                        }}
                        pageName="/findallkra"
                        colors={['#727cf5']}
                    />
                </Col>

                </Row>
        </div>
    );
};

export default masterdata;

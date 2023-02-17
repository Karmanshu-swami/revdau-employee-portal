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
                        title="Empolyee master"
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
                            textClass: 'text-success',
                            icon: 'bi-journal-bookmark-fill',
                            value: '',
                        }}
                        pageName="/dashboard"
                        colors={['#43d39e']}
                    />
                </Col>
                </Row>
        </div>
    );
};

export default masterdata;

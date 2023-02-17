// Created by Saurabh on 26/09/2022 //updated on 16/12/2022
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Activities from "./Activities";
// components
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import { calendarEvents, activities } from "./data";
import "../../assets/scss/custom/pages/_statistics.scss";
import CardHeader from "react-bootstrap/esm/CardHeader";
import BasicDetails from "../../components/BasicDetails";
const Statistics = () => {
  const role = sessionStorage.getItem("role");

  return (
    <div>
      <BasicDetails />

     <Row>
        <Col>
          <Row>
            <Col sm={6} xl={4}>
              <StatisticsChartWidget
                title="Kanban Board"
                stats="9/10"
                trend={{
                    textClass: 'text-dark',
                    icon: 'bi-lightbulb',
                  value: "",
                }}
                pageName="/Assign"
                colors={["#727cf5"]}
              />
            </Col>

            <Col sm={6} xl={4}>
              <StatisticsChartWidget
                title="Key Result Area (KRA)"
                stats="11"
                trend={{
                  textClass: "text-danger",
                  icon: "bi-layout-text-window",
                  value: "",
                }}
                pageName="/kra"
                colors={["#43d39e"]}
              />
            </Col>
            <Col sm={6} xl={4}>
              <StatisticsChartWidget
                title="Attendance"
                stats="20/30"
                trend={{
                    textClass: 'text-warning',
                    icon: 'bi-calendar2-day',
                  value: "",
                }}
                pageName=""
                colors={["#ffbe0b"]}
              />
            </Col>
          </Row>
          {(() => {
            if (role == "Manager") {
              return (
                <Row>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Review KRA"
                      stats="5/10"
                      trend={{
                        textClass: 'text-info',
                        icon: 'bi-clipboard-data',
                        value: "",
                      }}
                      pageName="/reviewkra"
                      colors={["#727cf5"]}
                    />
                  </Col>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Task Tracker"
                      stats="5/10"
                      trend={{
                        textClass: "text-success",
                        icon: "bi-kanban-fill",
                        value: "",
                      }}
                      pageName="/taskschedule"
                      colors={["#727cf5"]}
                    />
                  </Col>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Approve Leave"
                      stats="5/10"
                      trend={{
                        textClass: 'text-primary',
                        icon: 'bi-alarm-fill',
                        value: "",
                      }}
                      pageName="/approveleave"
                      colors={["#727cf5"]}
                    />
                  </Col>
                </Row>
              );
            } else if (role == "HR" || role == "Admin") {
              return (
                <Row>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Finalize KRA"
                      stats="5/10"
                      trend={{
                        textClass: 'text-primary',
                        icon: 'bi-person-lines-fill',
                        value: "",
                      }}
                      pageName="/findallkra"
                      colors={["#727cf5"]}
                    />
                  </Col>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Leave Tracker"
                      stats="5/10"
                      trend={{
                        textClass: 'text-danger',
                        icon: 'bi-clock-history ',
                        value: "",
                      }}
                      pageName="/leavemaster"
                      colors={["#727cf5"]}
                    />
                  </Col>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Master Data"
                      stats="5/10"
                      trend={{
                        textClass: 'text-success',
                        icon: 'bi-people-fill',
                        value: "",
                      }}
                      pageName="/employeeMaster"
                      colors={["#727cf5"]}
                    />
                  </Col>
                </Row>
              );
            } else if (role == "Project Manager") {
              return (
                <Row>
                  <Col sm={6} xl={4}>
                    <StatisticsChartWidget
                      title="Track Task"
                      stats="5/10"
                      trend={{
                        textClass: 'text-primary',
                        icon: 'bi-hand-index-thumb-fill',
                        value: "",
                      }}
                      pageName="/taskmaster"
                      colors={["#727cf5"]}
                    />
                  </Col>
                </Row>
              );
            }
          })()}
          <Row>
            <Col>
              <Card>
                {" "}
                <h5 className="px-2">Leave Status</h5>
                <div className="dashboard">
                  <div className="leave-list">
                    <div className="leave-types">
                      <div className="leave-card1">
                        <div className="no-of-leaves">
                          <h2>24</h2>
                          <h4>/ Days</h4>
                        </div>
                        <h5>Annual Leave</h5>
                      </div>
                      <div className="leave-card2">
                        <div className="no-of-leaves">
                          <h2>24</h2>
                          <h4>/ Days</h4>
                        </div>
                        <h5>Medical Leave</h5>
                      </div>
                      <div className="leave-card3">
                        <div className="no-of-leaves">
                          <h2>24</h2>
                          <h4>/ Days</h4>
                        </div>
                        <h5>Casual Leave</h5>
                      </div>
                      <div className="leave-card4">
                        <div className="no-of-leaves">
                          <h2>24</h2>
                          <h4>/ Days</h4>
                        </div>
                        <h5>Paid Leave</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <h5 className="px-2">Time Sheet</h5>
                <div className="time-sheet">
                  <div className="timesheet-list">
                    <div className="timesheet-card1">
                      <p className="timesheet-h">Today's Time</p>
                      <div className="timing">
                        <p className="timesheet-n">06</p>
                        <p className="out-of">/ 8 hrs.</p>
                      </div>
                    </div>
                    <div className="timesheet-card2">
                      <p className="timesheet-h">This month</p>
                      <div className="timing">
                        <p className="timesheet-n">06</p>
                        <p className="out-of">/ 8 hrs.</p>
                      </div>
                    </div>
                    <div className="timesheet-card3">
                      <p className="timesheet-h">Remaining time</p>
                      <div className="timing">
                        <p className="timesheet-n">06</p>
                        <p className="out-of">/ 8 hrs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

        
        </Col>
        <Col xl={3}>
          <Activities activities={activities} />
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;

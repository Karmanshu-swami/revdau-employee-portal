import React, { useEffect, useState } from "react";
import "../assets/scss/custom/pages/_statistics.scss";
import { Row, Col, Card } from "react-bootstrap";

const BasicDetails = () => {
  const emp_id = sessionStorage.getItem("id");
  const [empDetails, getEmpDetails] = useState([]);

  const getDetails = async () => {
    await fetch(
      "http://localhost:3001/empMaster/findOneEmployeeDetails/" + emp_id
    )
      .then((response) => response.json())
      .then((data) => getEmpDetails(data.data));
      console.log(empDetails)
  };
  useEffect(() => {
    console.log("EFFECT FUN CALLED");
    getDetails();
  }, []);
  // useEffect(() => {
  //   getDetails();
  // });

  return (
    <>
      {empDetails.map((_empDetails: any) => {
        return (
          <Card className="main">
            <div className="detail1">
              <div className="avatar"></div>
              <div>
                <h4>
                  {_empDetails.first_name} {_empDetails.last_name}
                </h4>
                <p>{_empDetails.job_profile}</p>
              </div>
            </div>
            <div className="detail">
              <h4>Employee ID</h4>
              <p>{_empDetails.emp_id}</p>
            </div>

            <div className="detail">
              <h4>Joining Date</h4>
              <p>{_empDetails.date_of_joining}</p>
            </div>
            <div className="detail">
              <h4>Contact Number</h4>
              <p>{_empDetails.emergency_contact_no}</p>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default BasicDetails;

import React from "react";
import { Link } from "react-router-dom";
import { FormInput } from "../../components";

import ApexChart from "./LeaveApexChart";
import LeaveTable from "./leaveTable";
import LeaveForm from "./LeaveForm";
import { servicesVersion } from "typescript";

const Leave = () => {
  let leaveTaken: number;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 className="page-title">Leave</h4>
        <button
          className="btn btn-primary "
          style={{
            color: "white",
            border: "none",
            marginBottom: "20px",
            marginTop: "20px",
            width: "5.5%",
          }}
        >
          <Link to="./LeaveForm" style={{ color: "white" }}>
          Apply
          </Link>
        </button>
      </div>

     
      <LeaveTable />
    </>
  );
};

export default Leave;

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../assets/scss/custom/pages/leavePage.scss";
import momemt from "moment";
import { dataAPI } from "../../helpers/api/dataAPI";

function LeaveForm(params: {
  empID: number;
  startDate: any;
  endDate: any;
  status: string;
  reason: string;
  leaveType: string;
  leaveDays: any;
}) {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [toggleEndData, setToggleEndDate] = useState(true);
  const [reason, setReason] = useState("");
  const [leaveDays, setLeaveDays] = useState(0);
  const empID = sessionStorage.getItem("id");
  // const d1 = new Date(startDate);
  // const d2 = new Date(endDate);
  // const diff = d2.getTime() - d1.getTime();
  // const diffDays = diff / 86400000 + 1;
  const currentDate = momemt(new Date()).format("YYYY-MM-DD");
  function NoDate() {
    console.log({ endDate }, { startDate });
    const numOfLeaves = momemt(endDate).diff(startDate, "days") + 1;
    console.log({ numOfLeaves });

  }
  const onStartingDate = (event: any) => {
    setStartDate(event.target.value);
    setToggleEndDate(false);
    setEndDate('');
    setLeaveDays(0);
  };
  const onEndingDate = (ed: any) => {
    setEndDate(ed);
    // console.log({ endDate });
    const numOfLeaves = momemt(ed).diff(startDate, "days") + 1;
    setLeaveDays(numOfLeaves)
  };
  const onReason = (event: any) => {
    setReason(event.target.value);
  };
  const ontype = (event: any) => {
    setType(event.target.value);
  };
  const history = useHistory();
  const submitBtn = async (event: any) => {
    event.preventDefault();
    event.target.reset();

    const apires = dataAPI
      .post("http://localhost:3001/leave/applyLeave", {
        emp_id: empID,
        leave_from: startDate,
        leave_to: endDate,
        reason: reason,
        leave_type: type,
        no_of_leave: leaveDays,
        status: "Pending",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    history.push("/leave");
    return apires;
  };

  return (
    <>
      <h4 className="page-title">Apply for Leave</h4>
      <div className="w-100 bg-white p-3">
        <div className="container mainfrom col-md-6">
          <form onSubmit={submitBtn} action="/leave">
            <div className="form-group field">
              <label htmlFor="leave-type">Leave Type</label>
              <select
                className="form-control"
                name="leaveType"
                id="leave-type"
                value={type}
                onChange={ontype}
              >
                <option>Choose One</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Paid Leave">Paid Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Paternity Leave">Paternity Leave</option>
              </select>
            </div>

            <div className="col-auto form-row align-items-center">
              <label htmlFor="start-date">Start Date</label>

              <input
                type="date"
                className="form-control mb-4"
                placeholder="from"
                name="startDate"
                id="startdate"
                min={currentDate}
                onChange={onStartingDate}
              />
            </div>

            <div className="col-auto form-row align-items-center field">
              <label htmlFor="start-date">End Date</label>
              <input
                type="date"
                className="form-control mb-4"
                name="endDate"
                value={endDate}
                id="enddate"
                min={startDate}
                disabled={toggleEndData}
                onChange={(event) => onEndingDate(event.target.value)}
              />
            </div>
            <div className="col-auto form-row align-items-center field">
              <label htmlFor="start-date">No of Days</label>
              <input
                type="text"
                className="form-control mb-4"
                name="leaveDays"
                id="leaveDays"
                value={leaveDays}
              />
            </div>
            <div className="col-auto form-row align-items-center field">
              <label htmlFor="start-date">Reason</label>
              <textarea
                className="form-control mb-4 reason"
                name="reason"
                placeholder="Reason"
                onChange={onReason}
                value={reason}
                id="reason"
                rows={8}
              ></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LeaveForm;

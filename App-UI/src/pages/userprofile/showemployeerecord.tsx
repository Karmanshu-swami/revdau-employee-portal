//Updated by Saurabh on 25/10/2022
import React, { useState, useEffect } from "react";
import { Row, Col, Card,Form,  Button } from "react-bootstrap";



function ShowEmployeeRecord() {
 
  const [edata, setEdata] = useState<any[]>([]);
  const emp_id = sessionStorage.getItem('id')
  const url = 'http://localhost:3001/empMaster/findOneEmployeeDetails/'+emp_id


  const getData = async () =>{
    await fetch(url).then((response)=>response.json()).then((data)=>
    setEdata(data.data)  
  )}

  useEffect(() => {

    getData()
   
  }, []);

  if(!edata[0]) return <div>loading...</div>

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">
             Show Employee Records          
            </h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              
            <div className="mt-2 pt-2">
                    <h4 className="mb-2 fs-15">Full Name:</h4>
                    <p className="text-muted mb-3">{edata[0]['title']} {edata[0]['first_name']} {edata[0]['middle_name']} {edata[0]['last_name']}</p>
                </div>

                <div className="mt-2 pt-2">
                    <h4 className="mb-2 fs-15">Designation:</h4>
                    <p className="text-muted mb-3">{edata[0]['job_profile']} </p>
                </div>
           
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ShowEmployeeRecord;

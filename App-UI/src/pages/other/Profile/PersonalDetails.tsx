// Updated by Saurabh on 17/11/2022 
import {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import Spinners from '../../uikit/Spinners';

// types
import { UserInfoTypes } from './data';

interface PersonalDetailsProps {
    userInfo: UserInfoTypes;
}

const PersonalDetails = ({ userInfo }: PersonalDetailsProps) => {


  const [edata, setEdata] = useState([]);
  const emp_id = sessionStorage.getItem('id')
  const url = 'http://localhost:3001/empMaster/findOneEmployeeDetails/'+emp_id


  const getData = async () =>{
    await fetch(url).then((response)=>response.json()).then((data)=>
    setEdata(data.data)  
  )}

  useEffect(() => {

    getData()
   //console.log(edata[0]['emp_id'])
  }, []);

  if(!edata[0]) return <div className="text-center"><strong></strong><Row>
  <Col lg={12}>
    <Spinners />
  </Col>
</Row></div>
  

    return (
        <Card>
            <Card.Body>
                <div className="text-center mt-2">
                    <img src={userInfo.avatar} alt="" className="avatar-lg rounded-circle" />
                    <h4 className="mt-2 mb-0 text-primary">{edata[0]['first_name']} {edata[0]['last_name']}</h4>
                    <h6 className="text-danger fw-normal mt-2 mb-0">{edata[0]['job_profile']}</h6>
                    <h6 className="text-warning fw-normal mt-1 mb-3">{edata[0]['permanent_address']}</h6>
                </div>

                {/* profile */}
                <div className="mt-4 pt-2 border-top">
                    <h4 className="mb-2 fs-15">About</h4>
                    <div className="table-responsive">
                        <table className="table-borderless mb-0 text-danger">
                            <tbody>
                                <tr>
                                    <th scope="row">Reporting Manager</th>
                                   <p></p>
                                    <td className="text-primary">{edata[0]['reporting_to']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">DOJ</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['date_of_joining']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Role</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['role']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['personal_email_id']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['gender']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Blood Group</th>
                                    <td className="text-primary">{edata[0]['blood_group']}</td>   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-2 pt-2">
                    <h4 className="mb-2 fs-15">Contact number:</h4>
                    <p className="text-success mb-3">{edata[0]['primary_contact_no']} </p>
                </div>

                <div className="mt-4 pt-2 border-top">
                    <h4 className="mb-2 fs-15">Personal Information</h4>
                    <div className="table-responsive">
                        <table className="table-borderless mb-0 text-danger">
                            <tbody>
                                <tr>
                                    <th scope="row">Father/Husband name</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['fathers_or_husband_name']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">DOB</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['date_of_joining']}</td>
                                </tr>
                                {/* <tr>
                                    <th scope="row">Contact number</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['primary_contact_no']}</td>   
                                </tr> */}
                                <tr>
                                    <th scope="row">Marital Status</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['marital_status']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Height</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['height_in_centimeter']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Weight</th>
                                    <td className="text-primary">{edata[0]['weight_in_kilogram']}</td>   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-2 pt-2">
                    <h4 className="mb-2 fs-15">UIDAI No:</h4>
                    <p className="text-success mb-3">{edata[0]['addhar_no']} </p>
                </div>

                <div className="mt-4 pt-2 border-top">
                    <h4 className="mb-2 fs-15">Educational Information</h4>
                    <div className="table-responsive">
                        <table className="table-borderless mb-0 text-danger">
                            <tbody>
                                <tr>
                                    <th scope="row">College Name</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['college']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Branch</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['branch']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">University</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['university']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Admission Year</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['admission_year']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Passing Year</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['year_of_passing']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Degree %</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['degree_per']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">XIIth %</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['twelveth_per']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Xth %</th>
                                    <td className="text-primary">{edata[0]['tenth_per']}</td>   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-2 pt-2">
                    <h4 className="mb-2 fs-15">Qualification:</h4>
                    <p className="text-success mb-3">{edata[0]['graduation_qualification']} </p>
                </div>

                <div className="mt-4 pt-2 border-top">
                    <h4 className="mb-2 fs-15">Financial Information</h4>
                    <div className="table-responsive">
                        <table className="table-borderless mb-0 text-danger">
                            <tbody>
                                <tr>
                                    <th scope="row">Bank A/C Holder Name</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['bank_account_holder_name']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bank A/C No</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['bank_account_no']}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bank A/C Type</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['bank_account_type']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">IFSC Code</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['IFSC_code']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Bank Name & Address</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['bank_name_and_branch_address']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">Current CTC</th>
                                    <p></p>
                                    <td className="text-primary">{edata[0]['CTC']}</td>   
                                </tr>
                                <tr>
                                    <th scope="row">UAN & EPF No</th>
                                    <td className="text-primary">{edata[0]['existing_UAN_and_EPF_no']}</td>   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-2 pt-2">
                    <h4 className="mb-2 fs-15">PAN:</h4>
                    <p className="text-success mb-3">{edata[0]['PAN']} </p>
                </div>

            </Card.Body>
        </Card>
    );
};

export default PersonalDetails;

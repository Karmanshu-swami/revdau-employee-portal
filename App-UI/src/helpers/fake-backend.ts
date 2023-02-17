import axios from "axios";
import MockAdapter from "axios-mock-adapter";

interface UserData {
  id: number;
  email?: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

var mock = new MockAdapter(axios);

export function configureFakeBackend() {
  mock.onPost("/login/").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(async function () {
        // get parameters from post request
        let params = JSON.parse(config.data);
        const udata = {
          email: params.email,
          password: params.password,
        };
        // find if any user matches login credentials
        let result = await fetch("http://localhost:3001/empMaster/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(udata),
        });

        const result1 = await result.json();
        const filteredUsers = result1.data;
        //console.log(result1)
        console.log(filteredUsers);

        if (result1.status === "success") {
          // if login details are valid return user details and fake jwt token

          resolve([200, filteredUsers]);
          sessionStorage.setItem("role", filteredUsers.data.role);
          sessionStorage.setItem("id", filteredUsers.data.emp_id);
          sessionStorage.setItem("fname", filteredUsers.data.first_name);
          sessionStorage.setItem("lname", filteredUsers.data.last_name);
          // console.log("ru",filteredUsers.role)
        } else {
          // else return error
          resolve([401, { message: "Username or password is incorrect" }]);
        }
      }, 1000);
    });
  });

  // for leave apply
  mock
    .onPost("http://localhost:3001/leave/applyLeave")
    .reply(function (config) {
      return new Promise(function (resolve, reject) {
        setTimeout(async function () {
          // get parameters from post request
          let params = JSON.parse(config.data);
          const udata = {
            emp_id: params.empID,
            leave_from: params.startDate,
            leave_to: params.endDate,
            reason: params.reason,
            status: params.status,
          };
          // find if any user matches login credentials
          let result = await fetch("http://localhost:3001/leave/applyLeave", {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(params),
          });

          const result1 = await result.json();
          const filteredUsers = result1.data;
          console.log(result1);
          console.log(filteredUsers);

          if (result1.status === "success") {
            // if login details are valid return user details and fake jwt token

            resolve([200, filteredUsers]);
            sessionStorage.setItem("role", filteredUsers.role);
            // console.log("ru",filteredUsers.role)
          } else {
            // else return error
            resolve([401, { message: "Username or password is incorrect" }]);
          }
        }, 1000);
      });
    });

  mock
    .onPost("http://localhost:3001/taskTracker/addTask")
    .reply(function (config) {
      return new Promise(function (resolve, reject) {
        setTimeout(async function () {
          // get parameters from post request
          let params = JSON.parse(config.data);
          const udata = {
            emp_id: params.empID,
            project_name: params.project_name,
            task_name: params.task_name,
            description: params.description,
            priority: params.type,
            assigned_by: params.assignedTo,
            end_date: params.deadLine,
          };
          // find if any user matches login credentials
          let result = await fetch(
            "http://localhost:3001/taskTracker/addTask",
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(params),
            }
          );

          const result1 = await result.json();
          const filteredUsers = result1.data;
          console.log(result1);
          console.log(filteredUsers);

          if (result1.status === "success") {
            // if login details are valid return user details and fake jwt token

            resolve([200, filteredUsers]);
            sessionStorage.setItem("role", filteredUsers.role);
            // console.log("ru",filteredUsers.role)
          } else {
            // else return error
            resolve([401, { message: "Username or password is incorrect" }]);
          }
        }, 1000);
      });
    });

  // for leave table listing
  mock
    .onPost("http://localhost:3001/leave/findAllLeaves")
    .reply(function (config) {
      return new Promise(function (resolve, reject) {
        setTimeout(async function () {
          // get parameters from post request
          let params = JSON.parse(config.data);
          const udata = {
            emp_id: params.empID,
            leave_from: params.startDate,
            leave_to: params.endDate,
            reason: params.reason,
            status: params.status,
          };
          // find if any user matches login credentials

          let result = await fetch(
            "http://localhost:3001/leave/findAllLeaves",
            {
              method: "GET",
              headers: {
                ContentType: "application/json",
                Accept: "application/json",
              },
              // body: JSON.stringify(udata),
            }
          );

          const result1 = await result.json();
          const filteredUsers = result1.data;
          console.log(result1);
          console.log(filteredUsers);

          if (result1.status === "success") {
            // if login details are valid return user details and fake jwt token

            resolve([200, filteredUsers]);
            sessionStorage.setItem("role", filteredUsers.role);
            // console.log("ru",filteredUsers.role)
          } else {
            // else return error
            resolve([401, { message: "Username or password is incorrect" }]);
          }
        }, 1000);
      });
    });

  //     mock.onPost('/register/').reply(function (config) {
  //         return new Promise(function (resolve, reject) {
  //             setTimeout(function () {
  //                 // get parameters from post request
  //                 let params = JSON.parse(config.data);

  //                 // add new users
  //                 let [firstName, lastName] = params.fullname.split(' ');
  //                 let newUser: UserData = {
  //                     id: users.length + 1,
  //                     username: firstName,
  //                     password: params.password,
  //                     firstName: firstName,
  //                     lastName: lastName,
  //                     role: 'Admin',
  //                     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
  //                 };
  //                 users.push(newUser);

  //                 resolve([200, newUser]);
  //             }, 1000);
  //         });
  //     });

  //     mock.onPost('/forget-password/').reply(function (config) {
  //         return new Promise(function (resolve, reject) {
  //             setTimeout(function () {
  //                 // get parameters from post request
  //                 let params = JSON.parse(config.data);

  //                 // find if any user matches login credentials
  //                 let filteredUsers = users.filter((user) => {
  //                     return user.email === params.email;
  //                 });

  //                 if (filteredUsers.length) {
  //                     // if login details are valid return user details and fake jwt token
  //                     let responseJson = {
  //                         message: "We've sent you a link to reset password to your registered email.",
  //                     };
  //                     resolve([200, responseJson]);
  //                 } else {
  //                     // else return error
  //                     resolve([
  //                         401,
  //                         {
  //                             message: 'Sorry, we could not find any registered user with entered username',
  //                         },
  //                     ]);
  //                 }
  //             }, 1000);
  //         });
  //     });
}

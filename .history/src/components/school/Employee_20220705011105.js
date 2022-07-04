import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import Navbar from "../Navbar";

function Employee() {
  const url = "https://michegwwe.herokuapp.com/employees";
  const [data, setData] = useState([]);
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  const columns = [
    {
      title: "id",
      field: "id",
      validate: (rowData) =>
        rowData.id === undefined || rowData.id === ""
          ? "Required"
          : true,
    },
    {
      title: "NAMES",
      field: "full_names",
      validate: (rowData) =>
        rowData.full_names === undefined || rowData.full_names === ""
          ? "Required"
          : true,
    },
    {
      title: "role",
      field: "role",
      validate: (rowData) =>
        rowData.role === undefined || rowData.role === "" ? "Required" : true,
    },
    {
      title: "National Id_Number",
      field: "id_number",
      validate: (rowData) =>
        rowData.id_number === undefined || rowData.id_number === ""
          ? "Required"
          : true,
    },
    {
      title: "salary",
      field: "salary",
      validate: (rowData) =>
        rowData.salary === undefined || rowData.salary === "" ? "Required" : true,
    },
  ];
  return (
    <Navbar /<
    <div className="App">
      {/* <h1 align="center">STUDENTS TABLE</h1> */}
      {/* <h4 align='center'>CRUD operation with Json-Server (with Validation) in Material Table</h4> */}
      <MaterialTable
        title="Student Table"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              //Backend call
              fetch(url, {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(newData),
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getEmployees();
                  resolve();
                });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              //Backend call
              fetch(url + "/" + oldData.employee_no, {
                method: "PATCH",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(newData),
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getEmployees();
                  resolve();
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              //Backend call
              fetch(url + "/" + oldData.employee_no, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getEmployees();
                  resolve();
                });
            }),
        }}
      />
    </div>
  );
}

export default Employee;

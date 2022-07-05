import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Navbar from "../Navbar";

function Employee() {
  const [data, setData] = useState([]);
  const url = "https://michegwwe.herokuapp.com/employees";
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
        rowData.id === undefined || rowData.id === "" ? "Required" : true,
    },
    {
      title: "fathers_full_names",
      field: "fathers_full_names",
      validate: (rowData) =>
        rowData.fathers_full_names === undefined ||
        rowData.fathers_full_names === ""
          ? "Required"
          : true,
    },
    {
      title: "fathers_contacts",
      field: "fathers_contacts",
      validate: (rowData) =>
        rowData.fathers_contacts === undefined ||
        rowData.fathers_contacts === ""
          ? "Required"
          : true,
    },
    {
      title: "Nationafathers_emaill Id_Number",
      field: "fathers_email",
      validate: (rowData) =>
        rowData.fathers_email === undefined || rowData.fathers_email === ""
          ? "Required"
          : true,
    },
    {
      title: "salary",
      field: "salary",
      validate: (rowData) =>
        rowData.salary === undefined || rowData.salary === ""
          ? "Required"
          : true,
    },
    {
      title: "salary",
      field: "salary",
      validate: (rowData) =>
        rowData.salary === undefined || rowData.salary === ""
          ? "Required"
          : true,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      {/* <h1 align="center">STUDENTS TABLE</h1> */}
      {/* <h4 align='center'>CRUD operation with Json-Server (with Validation) in Material Table</h4> */}
      <MaterialTable
        title="Employee Table"
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

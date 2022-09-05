import React, { useState, useEffect } from "react";

import MaterialTable from "@material-table/core";
import Container from "@material-ui/core/Container";
import UserHeader from '../partials/UserHeader';

function Student() {
  // const url = "https://michegwwe.herokuapp.com/students";
  const url = "https://kacrailsserver.herokuapp.com/students";
  const [data, setData] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  const columns = [
    {
      title: "classroom",
      field: "classroom.name",
      validate: (rowData) =>
        rowData.classroom.name === undefined || rowData.classroom.name === ""
          ? "Required"
          : true,
    },
    {
      title: "NAMES",
      field: "names",
      validate: (rowData) =>
        rowData.names === undefined || rowData.names === ""
          ? "Required"
          : true,
    },
    {
      title: "id",
      field: "id",
      validate: (rowData) =>
        rowData.id === undefined || rowData.id === "" ? "Required" : true,
    },
    {
      title: "DateOfBirth",
      field: "DateOfBirth",
      validate: (rowData) =>
        rowData.DateOfBirth === undefined || rowData.DateOfBirth === ""
          ? "Required"
          : true,
    },
    // {
    //   title: "level",
    //   field: "level",
    //   validate: (rowData) =>
    //     rowData.level === undefined || rowData.level === "" ? "Required" : true,
    // },
  ];

  return (
    <div className=" app">
      {/* <UserHeader /> */}
      <Container>
      {/* <Container maxWidth="90%"> */}
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
                    getStudents();
                    resolve();
                  });
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                //Backend call
                fetch(url + "/" + oldData.id, {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(newData),
                })
                  .then((resp) => resp.json())
                  .then((resp) => {
                    getStudents();
                    resolve();
                  });
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                //Backend call
                fetch(url + "/" + oldData.id, {
                  method: "DELETE",
                  headers: {
                    "Content-type": "application/json",
                  },
                })
                  .then((resp) => resp.json())
                  .then((resp) => {
                    getStudents();
                    resolve();
                  });
              }),
          }}
        />
      </Container>
    </div>
  );
}

export default Student;

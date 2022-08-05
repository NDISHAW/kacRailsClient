import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table'
// import Navbar from '../Navbar';

function MTStudet() {
  const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  const url = "http://localhost:3000/students";
  const [data, setData] = useState([]);
  useEffect(() => {
    getStudents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getStudents = () => {
    fetch(url, { header: header })
      .then((resp) => resp.json())
      .then((data) => setData(data));
  };

  // async function getStudents() {
  //   try {
  //     const response = await fetch( url, {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // getStudents();

  const columns = [
    {
      title: "NAMES",
      field: "names",
      validate: (rowData) =>
        rowData.names === undefined || rowData.names === "" ? "Required" : true,
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
    {
      title: "classroom_id",
      field: "classroom_id",
      validate: (rowData) =>
        rowData.classroom_id === undefined || rowData.classroom_id === ""
          ? "Required"
          : true,
    },
  ];
  return (
    <div>
      <div className="App">
        {/* <div>
          <Navbar />
        </div> */}
        <MaterialTable
          title="Students Table"
          columns={columns}
          data={data}
          options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                //Backend call
                fetch(url, {
                  method: "PATCH",
                  headers: {
                    accept: "application/json",
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
                  method: "PATCH",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.p(newData),
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
                fetch(url + "/" + oldData.admision_number, {
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
      </div>
    </div>
  );
}
export default MTStudet;


import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Navbar from "../Navbar";

function Employee() {
  const [data, setData] = useState([]);
  const url = "https://michegwwe.herokuapp.com/parents";
  useEffect(() => {
    getParents();
  }, []);

  const getParents = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  const columns = [
    {
      title: "admision_number",
      field: "admision_number",
      validate: (rowData) =>
        rowData.admision_number === undefined || rowData.admision_number === "" ? "Required" : true,
    },
    {
      title: "id",
      field: "id",
      validate: (rowData) =>
        rowData.id === undefined || rowData.id === ""
          ? "Required"
          : true,
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
      title: "fathers_email",
      field: "fathers_email",
      validate: (rowData) =>
        rowData.fathers_email === undefined || rowData.fathers_email === ""
          ? "Required"
          : true,
    },
    {
      title: "fathers_id_no",
      field: "fathers_id_no",
      validate: (rowData) =>
        rowData.fathers_id_no === undefined || rowData.fathers_id_no === ""
          ? "Required"
          : true,
    },
    {
      title: "mothers_full_names",
      field: "mothers_full_names",
      validate: (rowData) =>
        rowData.mothers_full_names === undefined ||
        rowData.mothers_full_names === ""
          ? "Required"
          : true,
    },
    {
      title: "mothers_contacts",
      field: "mothers_contacts",
      validate: (rowData) =>
        rowData.mothers_contacts === undefined ||
        rowData.mothers_contacts === ""
          ? "Required"
          : true,
    },
    {
      title: "mothers_email",
      field: "mothers_email",
      validate: (rowData) =>
        rowData.mothers_email === undefined || rowData.mothers_email === ""
          ? "Required"
          : true,
    },
    {
      title: "mothers_id_no",
      field: "mothers_id_no",
      validate: (rowData) =>
        rowData.mothers_id_no === undefined || rowData.mothers_id_no === ""
          ? "Required"
          : true,
    },
    {
      title: "address",
      field: "address",
      validate: (rowData) =>
        rowData.address === undefined || rowData.address === ""
          ? "Required"
          : true,
    },
    {
      title: "nationality",
      field: "nationality",
      validate: (rowData) =>
        rowData.nationality === undefined || rowData.nationality === ""
          ? "Required"
          : true,
    },
  ];
  return (
    <div className="App">
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar />
        {/* <h1 align="center">STUDENTS TABLE</h1> */}
        {/* <h4 align='center'>CRUD operation with Json-Server (with Validation) in Material Table</h4> */}
        <MaterialTable
          title="Parents Table"
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
                    getParents();
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
                    getParents();
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
                    getParents();
                    resolve();
                  });
              }),
          }}
        />
      </div>
    </div>
  );
}

export default Employee;

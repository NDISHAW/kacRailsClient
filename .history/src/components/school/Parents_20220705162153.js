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
        <div>
            
        </div>
    </div>
  );
}

export default Employee;

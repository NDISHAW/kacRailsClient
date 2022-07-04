import axios from "axios";

import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
function Students() {
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  

  const [addFormData, setAddFormData] = useState({
    Full_names: "",
    admision_number: "",
    date_of_birth: "",
    level: "",
    updated_at: "",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const getData = () => {
    axios("https://michegwwe.herokuapp.com/students").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };
  // const emailFormatter = (data, row) => {
  //   return <span>Email = {data}</span>;
  // };
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    selected: [1, 3],
    clickToEdit: true,
  };
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "admision_number",
      text: "ADM_No",
      filter: textFilter(),

      sort: true,
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: "Please enter numeric value",
          };
        }
        return true;
      },
    },
    {
      dataField: "Full_names",
      text: "Full_Names",
      sort: false,
      editable: true,
    },
    {
      dataField: "date_of_birth",
      text: "Date Of Birth",
      sort: false,
      editable: true,
    },
    // {
    //   dataField: "level",
    //   text: "CLASS",
    //   sort: false,
    //   editable: true,
    // },
    {
      dataField: "level",
      text: "CLASS",
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: "Grade 1",
            label: "Grade 1",
          },
          {
            value: "Grade 2",
            label: "Grade 2",
          },
          {
            value: "Grade 3",
            label: "Grade 3",
          },
          {
            value: "Grade 4",
            label: "Grade 4",
          },
        ],
      },
    },
    {
      dataField: "SAVE",
      text: "SAVE",
      sort: false,
      editable: false,
      type: "button"
    },
  ];
  function handleEditFormChange(e){
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    console.log(newFormData);
    setEditFormData(newFormData);
  };
  function handleAddFormSubmit(e) {
    e.preventDefault();
    const newdata = {
      Full_names: addFormData.Full_names,
      admision_number: addFormData.admision_number,
      date_of_birth: addFormData.date_of_birth,
      level: addFormData.level,
      updated_at: addFormData.updated_at,
    };
    const newDatas = [...data, newdata];
    setData(newDatas);
  }
  // const updateStudent = async (data) => {
  //   data = "Updated";
  //   await axios.put(`http://localhost:9292/students/update`, data.id);
  //   const dataClone = [...data];
  //   const index = dataClone.indexOf(data);
  //   dataClone[index] = { ...data };
  //   setData(dataClone);
  // };
  // const updateStudent = (values) => {
  //   const student = {
  //     Full_names: values.Full_names,
  //     admision_number: values.admision_number,
  //     date_of_birth: values.date_of_birth,
  //     level: values.level,
  //     updated_at: values.updated_at,
  //   }
  //   axios.put(`http://localhost:9292/students/update${values.id}`, student)
  //   .then(res =>
  //     setData(res.data));
  // };
  return (
    <div className="App">
      <form onSubmit={handleAddFormSubmit}>
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory()}
          cellEdit={cellEditFactory({
            mode: "dbclick",
            blurToSave: true,
            nonEditableColumns: () => [1, 2, 3],
          })}
          selectRow={selectRow}
          filter={filterFactory()}
        />
        <button type="submit" onClick={handleEditFormChange}>
          Update STUDENT
        </button>
      </form>

      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Full_names"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormSubmit}
        />
        <input
          type="text"
          name="admision_number"
          required="required"
          placeholder="Enter an admn_number..."
          onChange={handleAddFormSubmit}
        />
        <input
          type="text"
          name="date_of_birth"
          required="required"
          placeholder="Enter a  D.O.B..."
          onChange={handleAddFormSubmit}
        />
        <input
          type="text"
          name="level"
          required="required"
          placeholder="Enter an Grade..."
          onChange={handleAddFormSubmit}
        />
        <button type="submit" onClick={handleAddFormSubmit}>Add</button>
      </form>
    </div>
  );
}

export default Students;

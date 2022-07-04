import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import MaterialTable from "material-table";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    const url = "https://michegwwe.herokuapp.com/students";
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
        title: "admision_number",
        field: "admision_number",
        validate: (rowData) =>
          rowData.admision_number === undefined ||
          rowData.admision_number === ""
            ? "Required"
            : true,
      },
      {
        title: "NAMES",
        field: "Full_names",
        validate: (rowData) =>
          rowData.Full_names === undefined || rowData.Full_names === ""
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
        title: "date_of_birth",
        field: "date_of_birth",
        validate: (rowData) =>
          rowData.date_of_birth === undefined || rowData.date_of_birth === ""
            ? "Required"
            : true,
      },
      {
        title: "level",
        field: "level",
        validate: (rowData) =>
          rowData.level === undefined || rowData.level === ""
            ? "Required"
            : true,
      },
    ];
    log
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <div>
          <div className="p-4 box mt-1 text-center text-white ">
            Hello Welcome :: = -:-{user && user.email}
          </div>
          <div className="d-grid ">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
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
                    getStudents();
                    resolve();
                  });
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                //Backend call
                fetch(url + "/" + oldData.admision_number, {
                  method: "PATCH",
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
    </>
  );
};

export default Home;

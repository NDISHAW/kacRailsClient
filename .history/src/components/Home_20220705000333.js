import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";

const Home = () => {

  };
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <div>
          <div className="d-grid ">
            {/* <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button> */}
          </div>
        </div>
      </div>
      <Table>
        <MTStudet />
      </Table>
    </>
  );

export default Home;

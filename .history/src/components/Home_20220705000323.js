import React from "react";
import { Table } from "react-bootstrap";
import MTStudet from "./MTStudet";

const Home = () => {

  };
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <div>
          <div className="p-4 box mt-1 text-center text-white ">
            Hello Welcome
            {user && user.email}
          </div>
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

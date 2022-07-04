import React from "react";
import { Table } from "react-bootstrap";
import MTStudet from "./school/MTStudet";
import Navbar from "./Navbar";
// import Employee from "./school/Employee";

export default function Home() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div >
      <div style={{ width: "100%", display: "flex" }}>
        <Table>
          <MTStudet />
        </Table>
      </div>
    </div>
  );
}

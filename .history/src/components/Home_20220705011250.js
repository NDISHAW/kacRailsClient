import React from "react";
import { Table } from "react-bootstrap";
import MTStudet from "./school/MTStudet";
import Navbar from "./Navbar";
import Employee from "./school/Employee";

export default function Home() {
  return (
    <div className="App">
      <div style={{ width: "100%", display: "flex", color: "rgb(17,24,39)" }}>
        <Navbar />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <Table>
          <MTStudet />
        </Table>
        <Table>
          <Employee />
        </Table>
      </div>
    </div>
  );
}

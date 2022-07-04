import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";
import Navbar from "./Navbar"

export default function Home(){

 
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <div className="d-grid "></div>
        <Table>
          <MTStudet />
        </Table>
      </div>
    </>
  );
 };
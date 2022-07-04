import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";
import Navbar from "./Navbar"

export default function Home(){

 
  return (
    <>
      <div style={{ width: "100%", display: "flex", color="" }}>
        <Navbar />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <Table>
          <MTStudet />
        </Table>
      </div>
    </>
  );
 };
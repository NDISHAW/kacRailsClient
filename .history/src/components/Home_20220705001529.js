import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";
import Navbar from "./Navbar"

export default function Home(){

 
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <Navbar />
        <Table>
          <MTStudet />
        </Table>
      </div>
    </>
  );
 };
import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";

export default function Home(){

 
  return (
    <>
    <Nav
      <div style={{ width: "400px", display: "flex" }}>
          <Table>
            <MTStudet />
          </Table>
      </div>
    </>
  )
 };
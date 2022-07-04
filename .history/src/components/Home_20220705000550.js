import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";
import Navbar

export default function Home(){

 
  return (
    <>
    <Navbar />
      <div style={{ width: "400px", display: "flex" }}>
          <Table>
            <MTStudet />
          </Table>
      </div>
    </>
  )
 };
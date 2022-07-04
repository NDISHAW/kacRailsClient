import React from "react";
import {Table } from "react-bootstrap";
import MTStudet from "./MTStudet";

export default function Home(){

 
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
          <Table>
            <MTStudet />
          </Table>
      </div>
    </>
  );

 };
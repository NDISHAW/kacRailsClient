import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SideBar from './components/Sidebar/SideBar';
import sidebar_menu from './constants/sidebar-menu';
import index from './components/DashboardHeader/index'
import './App.css';
import Orders from './pages/Orders';
import { Dashboard } from 'akar-icons';

function DashboardApp () {
  return (
    <div className="dashboard-container">
      {/* <DashboardHeader btnText="New Order" /> */}

      <SideBar menu={sidebar_menu} />

      <div className="dashboard-body">
        <div></div>
        <div>{/* <Orders /> */}</div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default DashboardApp;
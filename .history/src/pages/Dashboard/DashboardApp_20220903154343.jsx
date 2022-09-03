import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';

function DashboardApp () {
  return (
    <div className="dashboard-container">
      <SideBar menu={sidebar_menu} />

      <div className="dashboard-body">
        <div>
          <Orders />
        </div>
        <div>
          <Orders />
        </div>

        <div>
          <Orders />
        </div>
        <div>
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default DashboardApp;
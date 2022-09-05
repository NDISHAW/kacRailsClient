import * as React from "react";
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";

function DashboardApp () {
  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.Item to="/posts" primaryText="Posts" leftIcon={<BookIcon />} />
      <Menu.Item
        to="/comments"
        primaryText="Comments"
        leftIcon={<ChatBubbleIcon />}
      />
      <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
      <Menu.Item
        to="/custom-route"
        primaryText="Miscellaneous"
        leftIcon={<LabelIcon />}
      />
    </Menu>
  );
}
export default DashboardApp;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import SideBar from './components/Sidebar/SideBar';
// import sidebar_menu from './constants/sidebar-menu';
// import index from './components/DashboardHeader/index'
// import './App.css';
// import Orders from './pages/Orders';
// import { Dashboard } from 'akar-icons';
// import Student from '../../School/Student';
// // import DashboardHeader from './components/DashboardHeader';
// import { Menu } from "react-admin";

// function DashboardApp () {
//   return (

//       <div className="dashboard-container">
//         <SideBar menu={sidebar_menu} />

//         <div className="dashboard-body">
//           {/* <div><Student /></div> */}
//           <div><Orders /></div>

//           <div></div>
//           <div></div>
//         </div>
//       </div>
//   );
// }

// export default DashboardApp

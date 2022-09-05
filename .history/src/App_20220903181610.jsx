import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter as Router
} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import 'aos/dist/aos.css';
import './css/style.css';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute"
import AOS from 'aos';

import Home from './pages/Home';
import Login from './pages/Login/';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Student from './School/Student';
import Employee from './School/Employee';
// import { Dashboard } from 'akar-icons';
import DashboardApp from "./pages/Dashboard/DashboardApp";
import SideBar from './pages/Dashboard/components/Sidebar/SideBar';
import sidebar_menu from './pages/Dashboard/constants/sidebar-menu';
import Orders from './pages/Dashboard/pages/Orders';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <UserAuthContextProvider>
            <ProtectedRoute>
              <Routes>
                <Route path="*" element={<div></div>} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/locations" element={<Orders />} />
                <Route exact path="/profile" element={<Orders />} />
                <Route exact path="/products" element={<Orders />} />
              </Routes>
            </ProtectedRoute>
          </UserAuthContextProvider>
        </div>
      </div>
    </Container>
  );
}

export default App;

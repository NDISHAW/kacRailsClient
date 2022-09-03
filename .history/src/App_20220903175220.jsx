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
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Student from './School/Student';
import Employee from './School/Employee';
// import { Dashboard } from 'akar-icons';
import DashboardApp from "./pages/Dashboard/DashboardApp";
import SideBar from './pages/Dashboard/components/Sidebar/SideBar';


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
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<Orders />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/locations" element={<Orders />} />
            <Route exact path="/profile" element={<Orders />} />
            <Route exact path="/products" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
    // <Container>
    //   <Row>
    //     <Col>
    //       <UserAuthContextProvider>
    //         <Routes>
    //           <Route
    //             path="/dashboard"
    //             element={
    //               <ProtectedRoute>
    //                 <DashboardApp />
    //                 {/* <MTStudet /> */}
    //                 {/* <Employee /> */}
    //               </ProtectedRoute>
    //             }
    //           />
    //           <Route path="/" element={<Home />} />
    //           <Route path="/signin" element={<Login />} />
    //           <Route path="/home" element={<Home />} />
    //           <Route path="/student" element={<Student />} />
    //           {/* <Route path="/Employee" element={<Employee />} />
    //           <Route path="/parents" element={<Parents />} /> */}
    //           parents
    //         </Routes>
    //       </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    // </Container>

    // <>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/signin" element={<SignIn />} />
    //     <Route path="/signup" element={<SignUp />} />
    //     <Route path="/reset-password" element={<ResetPassword />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/dashboard/students" element={<Student />} />
    //     <Route path="/employee" element={<Employee />} />
    //   </Routes>
    // </>
  );
}

export default App;

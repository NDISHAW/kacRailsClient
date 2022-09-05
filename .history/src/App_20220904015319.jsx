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
// import Dashboard from './pages/Dashboard/Dashboard';
import Student from './School/Student';
import Employee from './School/Employee';
// import { Dashboard } from 'akar-icons';
import DashboardApp from "./pages/Dashboard/DashboardApp/";
import Orders from './pages/Dashboard/pages/Orders';
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor, Employees, Financial, Kanban, Line, Pie, Pyramid, Stacked } from './pages/Dashboard/pages';

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
    //           <Route path="/signin" element={<Login />} />
    //           <Route path="/dashboard" element={<DashboardApp />} />
    //           <Route path="/" element={<Home />} />
    //           <Route path="/dashboard/ecommerce" element={<Ecommerce />} />
    //           <Route path="/dashboard/orders" element={<Orders />} />
    //           <Route path="/dashboard/employees" element={<Employees />} />
    //           <Route path="/dashboard/customers" element={<Customers />} />

    //           {/* apps  */}
    //           <Route path="/kanban" element={<Kanban />} />
    //           <Route path="/editor" element={<Editor />} />
    //           <Route path="/calendar" element={<Calendar />} />
    //           <Route path="/color-picker" element={<ColorPicker />} />

    //           {/* charts  */}
    //           <Route path="/line" element={<Line />} />
    //           <Route path="/area" element={<Area />} />
    //           <Route path="/bar" element={<Bar />} />
    //           <Route path="/pie" element={<Pie />} />
    //           <Route path="/financial" element={<Financial />} />
    //           <Route path="/color-mapping" element={<ColorMapping />} />
    //           <Route path="/pyramid" element={<Pyramid />} />
    //           <Route path="/stacked" element={<Stacked />} />
    //         </Routes>
    //       </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    // </Container>

  );
}

export default App;

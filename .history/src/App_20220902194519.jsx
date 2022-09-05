import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import 'aos/dist/aos.css';
import './css/style.css';
import { UserAuthContextProvider } from "./context"
import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Student from './School/Student';
import Employee from './School/Employee';

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
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                    {/* <MTStudet /> */}
                    {/* <Employee /> */}
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/MTStudet" element={<MTStudet />} />
              <Route path="/Employee" element={<Employee />} />
              <Route path="/parents" element={<Parents />} />
              parents
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>

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

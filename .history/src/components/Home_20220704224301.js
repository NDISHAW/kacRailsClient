import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import MTStudet from './school/MTStudet';
import Students from './Students';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <div>
          <div className="p-4 box mt-1 text-center text-white ">
            Hello Welcome
            {user && user.email}
          </div>
          <h1></h1>
          <div className="d-grid ">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
      <table>
        <MTStudet />
        <Students />
      </table>
    </>
  );
};

export default Home;

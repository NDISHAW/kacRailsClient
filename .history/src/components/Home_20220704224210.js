import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import MTStudet from './school/MTStudet';

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
          <div className="d-grid ">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
      <table>
        <MTStudet />
        <S
      </table>
    </>
  );
};

export default Home;

import { Button } from "@mui/material";
import React from "react";
import { SignOut } from "../firebaseConfig/auth";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  // lgout fun
  const handleLogout = () => {
    SignOut()
      .then(() => {
        alert("logged out successfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "green", textAlign: "center" }}>
        Logged In Siccessfully
      </h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Welcome;

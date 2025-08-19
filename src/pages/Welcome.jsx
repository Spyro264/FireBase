import { Button } from "@mui/material";
import React from "react";
import { SignOut } from "../firebaseConfig/auth";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    SignOut()
      .then(() => {
        alert("logged poout successfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h1>Hey there you are logged in thats y u wer able to seee this page</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Welcome;

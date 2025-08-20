import { Box } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthProvider from "./context/authContext";
import Welcome from "./pages/Welcome";
import LoginWithNumber from "./auth/LoginWithNumber";

const App = () => {
  return (
    <Box>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainpage" element={<Welcome />} />
          <Route path="/loginwithnumber" element={<LoginWithNumber />} />
        </Routes>
      </AuthProvider>
    </Box>
  );
};

export default App;

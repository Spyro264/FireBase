import { Typography, Box, Button } from "@mui/material";
import { SignOut } from "../firebaseConfig/auth";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    SignOut().then(() => navigate("/login"));
  };

  return (
    <Box>
      <NavBar />
      <Typography variant="h1">Welcome to Home Page</Typography>
      <Button onClick={handleSignOut}>SgnOUt</Button>
    </Box>
  );
};

export default Home;

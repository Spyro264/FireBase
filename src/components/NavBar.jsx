import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      height={"8vh"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
      padding={1}
      boxShadow={4}
      borderRadius={2}
    >
      <Box>
        <Typography variant="h4">Firebase Authentication</Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate("/register")}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;

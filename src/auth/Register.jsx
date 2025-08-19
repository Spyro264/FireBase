import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmail } from "../firebaseConfig/auth";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confrimPassowrd, setConfirmPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleRegister = async () => {
    setLoader(true);
    if (!email && !passowrd) return alert("enter valid email and password");

    if (!isRegister) {
      try {
        await createUserWithEmail(email, passowrd).then((res) => {
          if (res.operationType === "signIn") {
            setLoader(false);
            navigate("/mainpage");
          }
        });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Email already exists");
          setLoader(false);
        } else {
          alert(error.message);
          setLoader(false);
        }
      }
    }
  };

  if (loader) {
    return <Typography variant="h1">Loading.......</Typography>;
  }
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* {userLoggedIn && navigate("/")} */}

      <Box
        boxShadow={4}
        borderRadius={2}
        width={"30%"}
        padding={2}
        height={"45vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={3}
      >
        <Box>
          <Typography variant="h4" fontWeight={900}>
            Email :
          </Typography>
          <TextField
            placeholder="enter your mail"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <Typography variant="h4" fontWeight={900}>
            Password :
          </Typography>
          <TextField
            placeholder="enter your password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Box mt={0}>
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

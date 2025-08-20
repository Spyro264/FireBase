import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithGoogle, signInWithEmail } from "../firebaseConfig/auth";
import { useAuth } from "../context/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    if (!email && !passowrd) {
      return alert("enter email and pass");
    }

    if (!isSignIn) {
      setIsSignIn(true);
      try {
        await signInWithEmail(email, passowrd).then((res) => {
          alert("Login Successfully");
          navigate("/mainpage");
        });
      } catch (error) {
        alert(error);
        setIsSignIn(false);
      }
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    console.log("ggge");

    setLoading(true);
    if (!isSignIn) {
      setIsSignIn(true);
      try {
        await signInWithGoogle().then((res) => {
          console.log({ resssss: res });
          if (res.operationType === "signIn") {
            setLoading(false);
            navigate("/mainpage");
          }
          setIsSignIn(false);
        });
      } catch (error) {
        console.log({ error });
        setIsSignIn(false);
      }
    }
  };
  {
    /* {userLoggedIn ? navigate("/") : ""} */
  }

  if (loading) {
    return <h1>Loading ........</h1>;
  }

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"50%"}
        height={"40vh"}
        borderRadius={2}
        boxShadow={4}
        padding={2}
      >
        {/* {email field} */}
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Typography variant="h5" fontWeight={900}>
            Email :
          </Typography>
          <TextField
            placeholder="enter your email"
            type="email"
            sx={{ width: "50%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        {/* {password field} */}
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={2}
          mr={5.5}
        >
          <Typography variant="h5" fontWeight={900}>
            Password :
          </Typography>
          <TextField
            placeholder="enter your email"
            sx={{ width: "50%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Box mt={2} display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            sx={{ fontWeight: 900, fontSize: "12px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ fontWeight: 900, fontSize: "12px", marginLeft: 2 }}
            onClick={handleGoogleSignIn}
          >
            Login using Google
          </Button>
          <Button
            variant="contained"
            sx={{ fontWeight: 900, fontSize: "12px", marginLeft: 2 }}
            onClick={() => navigate("/loginwithnumber")}
          >
            Login with Phone number
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

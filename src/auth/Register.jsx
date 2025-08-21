import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUserWithEmail } from "../firebaseConfig/auth";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  // const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  const [loader, setLoader] = useState(false);

  const handleRegister = async () => {
    setLoader(true);
    if (!email && !passowrd) return alert("enter valid email and password");

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
      flexDirection={"column"}
    >
      {/* {email login} */}
      <Box
        height={"60vh"}
        width={"30%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={5}
        flexDirection={"column"}
        gap={2}
      >
        {/* {welcome text} */}
        <Box>
          <Typography variant="h4" fontWeight={900} textAlign={"center"}>
            Create Account
          </Typography>
        </Box>

        {/* {welcome text} */}
        <Box width={"80%"} mt={1} padding={1}>
          {/* {email field} */}
          <TextField
            placeholder="Email address"
            fullWidth
            type="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* {password filed} */}
          <TextField
            placeholder="Password"
            fullWidth
            type="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
              marginTop: 2,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* login button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "black",
              color: "white",
              mt: 2,
              borderRadius: 50,
              py: 1.5,
            }}
            onClick={handleRegister}
          >
            <Typography variant="h5" fontWeight={500}>
              Submit
            </Typography>
          </Button>

          {/* dont have an account */}
          <Typography textAlign={"center"} mt={2}>
            already have an account ?
            <span style={{ color: "blue" }} onClick={() => navigate("/login")}>
              login in
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

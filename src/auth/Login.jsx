import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithGoogle, signInWithEmail } from "../firebaseConfig/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // email login fun
  const handleEmailLogin = async () => {
    setLoading(true);
    if (!email && !passowrd) {
      setLoading(false);
      return alert("enter email and pass");
    }

    try {
      await signInWithEmail(email, passowrd).then((res) => {
        console.log({ res });
        alert("Login Successfully");
        navigate("/mainpage");
      });
    } catch (error) {
      console.log({ error });
      if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password");
      }
    }

    setLoading(false);
  };

  // google login fun
  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      await signInWithGoogle().then((res) => {
        if (res.operationType === "signIn") {
          setLoading(false);
          navigate("/mainpage");
        }
      });
    } catch (error) {
      console.log({ error });
    }
  };

  if (loading) {
    return <h1>Loading ........</h1>;
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
        width={"25%"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        padding={5}
        flexDirection={"column"}
        gap={2}
      >
        {/* {welcome text} */}
        <Box>
          <Typography variant="h4" fontWeight={900} textAlign={"center"}>
            Welcome Back
          </Typography>
        </Box>

        {/* {welcome text} */}
        <Box width={"80%"} mt={3} padding={1}>
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
            onClick={handleEmailLogin}
          >
            <Typography variant="h5" fontWeight={500}>
              Login
            </Typography>
          </Button>

          {/* dont have an account */}
          <Typography textAlign={"center"} mt={2}>
            Dont hav an account ?{" "}
            <span
              style={{ color: "blue" }}
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </Typography>

          {/* {other login} */}
          <Box mt={2}>
            {/* login with phone */}
            <Button
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "",
                color: "black",
                textAlign: "right",
                borderRadius: 50,
                py: 1.5,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                px: 4,
                mt: 2,
              }}
              startIcon={<LocalPhoneIcon fontSize="small" />}
            >
              <Typography
                variant="h6"
                fontWeight={500}
                sx={{
                  textTransform: "none",
                }}
              >
                Continue with phone
              </Typography>
            </Button>

            {/* login with google */}
            <Button
              variant="outlined"
              fullWidth
              onClick={handleGoogleSignIn}
              sx={{
                backgroundColor: "",
                color: "black",
                textAlign: "right",
                borderRadius: 50,
                py: 1.5,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                px: 4,
                mt: 2,
              }}
              startIcon={<GoogleIcon fontSize="small" />}
            >
              <Typography
                variant="h6"
                fontWeight={500}
                sx={{
                  textTransform: "none",
                }}
              >
                Continue with google
              </Typography>
            </Button>

            {/* login with microsoft */}
            <Button
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "",
                color: "black",
                textAlign: "right",
                borderRadius: 50,
                py: 1.5,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                px: 4,
                mt: 2,
              }}
              startIcon={<MicrosoftIcon fontSize="small" />}
            >
              <Typography
                variant="h6"
                fontWeight={500}
                sx={{
                  textTransform: "none",
                }}
              >
                Continue with Microsoft
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

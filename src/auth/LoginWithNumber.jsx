import { Box, Button, TextField } from "@mui/material";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import React, { useEffect, useState } from "react";
// import { auth } from "../firebaseConfig/firebase";
import { loginWithPhoneNumber } from "../firebaseConfig/auth";

const LoginWithNumber = () => {
  const [number, setNumber] = useState("");
  const auth = getAuth();

  useEffect(() => {
    console.log({ auth });
  }, []);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recapthca", {});
      const confirmation = await loginWithPhoneNumber(auth, number, recaptcha);
      console.log({ confirmation });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Box height={"100vh"}>
      <TextField
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <div id="recapthca"></div>
      <Button onClick={sendOtp} variant="contained" sx={{ mt: 2 }}>
        Send Otp
      </Button>
    </Box>
  );
};

export default LoginWithNumber;

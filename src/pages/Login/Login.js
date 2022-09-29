import React from "react";
import styles from "./styles";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <Box sx={styles.Login}>
        <Box sx={styles.Form} component="form">
          <Typography sx={styles.LoginText}>Login</Typography>
          <TextField label="Email" />
          <TextField label="Password" />
          <Button
            style={{
              minWidth: "52%",
              minHeight: "50px",
            }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            style={{
              minWidth: "52%",
              minHeight: "50px",
            }}
            variant="contained"
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
}

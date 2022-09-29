import React, { useState } from "react";
import styles from "./styles";
import { Box, Typography, Button } from "@mui/material";

import HomeComp from "./HomeComp";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Welcome from "../pages/Welcome/Welcome";
import Contact from "../pages/Contact/Contact";

export default function Header() {
  const [page, setPage] = useState("home");

  const handleButton = (e) => {
    setPage(e.target.id);
  };
  return (
    <>
      <Box>
        <Box sx={styles.Header}>
          <Box sx={styles.Nav}>
            <Box>
              <Typography id="home" sx={styles.Logo} onClick={handleButton}>
                Login App
              </Typography>
            </Box>
            <Box>
              <Button id="login" variant="contained" onClick={handleButton}>
                Login
              </Button>
              <Button
                id="contact"
                variant="contained"
                onClick={handleButton}
                sx={{ ml: "20px" }}
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Box>

        {page == "home" && <HomeComp />}
        {page == "login" && <Login />}
        {page == "register" && <Register />}
        {page == "welcome" && <Welcome />}
        {page == "contact" && <Contact />}
      </Box>
    </>
  );
}

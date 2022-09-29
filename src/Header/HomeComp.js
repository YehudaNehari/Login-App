import React from "react";
import styles from "./styles";
import { Box, Typography, Button } from "@mui/material";

export default function HomeComp(params) {
  return (
    <>
      <Box sx={styles.HomeComp}>
        <Typography sx={styles.compText}>
          Hi, My Name Is Yehuda Nehari. <br />
          <strong>Welcome To My Login App!</strong>
        </Typography>
      </Box>
    </>
  );
}

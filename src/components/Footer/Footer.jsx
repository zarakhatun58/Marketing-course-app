import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      py={3}
      color="white"
      style={{ backgroundColor: "green" }}
    >
      <Typography variant="body2">
        &copy; 2024 BesidesU. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Typography, Box, Container } from "@mui/material";
import CourseBanner from "../CourseBanner/CourseBanner";
import CourseList from "../CourseList/CourseList";
import SocialMedia from "../SocialMedia/SocialMedia";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <Container>
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Welcome to BesidesU
        </Typography>
        <Typography variant="h5" color="textSecondary">
          AI-enabled Digital Marketing Institute
        </Typography>
        <CourseBanner />
        <CourseList />
        <Testimonials />
        <SocialMedia />
      </Box>
    </Container>
  );
};

export default Home;

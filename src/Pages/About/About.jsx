import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          BesidesU is an innovative AI-enabled Digital Marketing Institute
          offering comprehensive courses to students and professionals. Our
          mission is to empower individuals with the skills and knowledge needed
          to excel in the dynamic field of digital marketing.
        </Typography>
        <p>
          Our Vision We envision a world where anyone, anywhere has the power to
          transform their lives through learning.
        </p>
        <p style={{ fontSize: "30px" }}>Our story</p>
        <p>
          BesideU was founded by Daphne Koller and Andrew Ng in 2012 with a
          vision of providing life-transforming learning experiences to learners
          around the world. Today, BesideU is a global platform for online
          learning and career development that offers anyone, anywhere, access
          to online courses and degrees from leading universities and companies.
          BesideU received B Corp certification in February 2021, which means
          that we have a legal duty not only to our shareholders, but to also
          make a positive impact on society more broadly, as we continue our
          efforts to reduce barriers to world-class education for all.
        </p>
        <p>Join our global community and start learning today!</p>
        <Link to="/contact">
          <button className="join-button">Join Now</button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Box, CssBaseline } from "@mui/material";
import Home from "./components/Home/Home";
import CourseList from "./components/CourseList/CourseList";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "@mui/icons-material";
import Register from "./components/SignUp/Register";
import Digital from "./components/CoursesPage/Digital";
import Social from "./components/CoursesPage/Social";
import BuyForm from "./components/BuyNow/BuyForm";
import SignIn from "./components/Login/SignIn";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ContentMarketing from "./components/CoursesPage/ContentMarketing";
import EmailMarketing from "./components/CoursesPage/EmailMarketing";
import GoogleAds from "./components/CoursesPage/GoogleAds";

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Header />
        <Box my={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/social" element={<Social />} />
            <Route path="/buy" element={<BuyForm />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contentMarketing" element={<ContentMarketing />} />
            <Route path="/emailMarketing" element={<EmailMarketing />} />
            <Route path="/googleAds" element={<GoogleAds />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

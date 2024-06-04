import React, { Fragment, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import john from "../../Assets/images/teacher1.jpg";
import smith from "../../Assets/images/teacher2.jpg";
import rahul from "../../Assets/images/teacher3.jpg";
import jackey from "../../Assets/images/teacher4.jpg";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Social Media Marketer",
    title: "This is the best digital marketing course I have ever taken!",
    image: john,
    paragraph: `“ I was an EMT for many years before I joined the bootcamp. I’ve
    been looking to make a transition and have heard some people who
    had an amazing experience here. I signed up for the free intro
    course and found it incredibly fun! I enrolled shortly
    thereafter. The next 12 weeks was the best - and most grueling -
    time of my life. Since completing the course, I’ve successfully
    switched careers, working as a Software Engineer at a VR
    startup. ”`,
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "digital Marketer",
    title: "The AI tools taught in the course are amazing and very practical.",
    paragraph: `“ I was an EMT for many years before I joined the bootcamp. I’ve
    been looking to make a transition and have heard some people who
    had an amazing experience here. I signed up for the free intro
    course and found it incredibly fun! I enrolled shortly
    thereafter. The next 12 weeks was the best - and most grueling -
    time of my life. Since completing the course, I’ve successfully
    switched careers, working as a Software Engineer at a VR
    startup. ”`,
    image: smith,
  },
  {
    id: 3,
    name: "Alian Smith",
    designation: "Facebook Marketer",
    title: "The AI tools taught in the course are amazing and very practical.",
    paragraph: `“ I was an EMT for many years before I joined the bootcamp. I’ve
    been looking to make a transition and have heard some people who
    had an amazing experience here. I signed up for the free intro
    course and found it incredibly fun! I enrolled shortly
    thereafter. The next 12 weeks was the best - and most grueling -
    time of my life. Since completing the course, I’ve successfully
    switched careers, working as a Software Engineer at a VR
    startup. ”`,
    image: rahul,
  },
  {
    id: 4,
    name: "Enrich Smith",
    designation: "Ads Marketer",
    title: "The AI tools taught in the course are amazing and very practical.",
    paragraph: `“ I was an EMT for many years before I joined the bootcamp. I’ve
    been looking to make a transition and have heard some people who
    had an amazing experience here. I signed up for the free intro
    course and found it incredibly fun! I enrolled shortly
    thereafter. The next 12 weeks was the best - and most grueling -
    time of my life. Since completing the course, I’ve successfully
    switched careers, working as a Software Engineer at a VR
    startup. ”`,
    image: jackey,
  },
  {
    id: 5,
    name: "James william",
    designation: "Online Marketer",
    title: `I received a job offer mid-course, and the subjects I learned
    were current, if not more so, in the company I joined. I
    honestly feel I got every penny’s worth.`,
    paragraph: `“ I was an EMT for many years before I joined the bootcamp. I’ve
    been looking to make a transition and have heard some people who
    had an amazing experience here. I signed up for the free intro
    course and found it incredibly fun! I enrolled shortly
    thereafter. The next 12 weeks was the best - and most grueling -
    time of my life. Since completing the course, I’ve successfully
    switched careers, working as a Software Engineer at a VR
    startup. ”`,
    image: jackey,
  },
  {
    id: 6,
    name: "Furkan Giray",
    designation: "Content Creator",
    title: `I received a job offer mid-course, and the subjects I learned
    were current, if not more so, in the company I joined. I
    honestly feel I got every penny’s worth.`,
    paragraph: `“ I was an EMT for many years before I joined the bootcamp. I’ve
    been looking to make a transition and have heard some people who
    had an amazing experience here. I signed up for the free intro
    course and found it incredibly fun! I enrolled shortly
    thereafter. The next 12 weeks was the best - and most grueling -
    time of my life. Since completing the course, I’ve successfully
    switched careers, working as a Software Engineer at a VR
    startup. ”`,
    image: jackey,
  },
];

const Testimonials= () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} sm={6} md={4}>
            <div className="item-card">
              <div className="profile">
                <img src={testimonial.image} alt="" />
                <div className="information">
                  <div className="stars icon">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>{testimonial.name}</p>
                  <span>{testimonial.designation}</span>
                </div>
              </div>
              <Fragment>
                <div className="paragraph">
                  {isReadMore
                    ? testimonial.paragraph.slice(0, 100)
                    : testimonial.paragraph}
                  <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ color: "green" }}
                  >
                    {isReadMore ? "...read more" : " show less"}
                  </span>
                </div>
              </Fragment>
              <div className="icon">
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

import React from "react";
import introImg from "../../Assets/images/mastry.jpg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Digital.css";

const ContentMarketing = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          fontWeight: "600",
          marginBottom: "30px",
        }}
      >
        {" "}
        Content Creation Marketing Course Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={12}>
          <Card className="card">
            <div className="card-img">
              <CardMedia
                component="img"
                height="350"
                image={introImg}
                alt="sdsd"
              />
            </div>
            <div className="card-content">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: "600",
                  }}
                >
                  Choose the Digital Marketing Course That Aligns Best With Your
                  Educational Goals
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textAlign: "left" }}
                >
                  Get on the fast track to a career in digital marketing. In
                  this certificate program, you'll learn in-demand skills at
                  your own pace, no degree or experience required.
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontSize: "25px", fontWeight: "600" }}
                  >
                    What We'll Learn
                  </Typography>
                  <ol className="custom-tick-list">
                    <li>
                      Learn the fundamentals of digital marketing and e-commerce
                      to gain the skills needed to land an entry-level job
                    </li>
                    <li>
                      Measure marketing performance through analytics and
                      present insights
                    </li>
                    <li>
                      Attract and engage customers through digital marketing
                      channels like search and email
                    </li>
                    <li>
                      Build e-commerce stores, analyze online performance, and
                      grow customer loyalty
                    </li>
                  </ol>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontSize: "25px", fontWeight: "600" }}
                  >
                    Skills you'll gain
                  </Typography>
                  <ul className="ul-lists ">
                    <li className="list-new">
                      Search Engine Optimization (SEO)
                    </li>
                    <li className="list-new">E-Commerce</li>
                    <li className="list-new">Email Marketing</li>
                    <li className="list-new">Display advertising</li>
                    <li className="list-new">Marketing</li>
                  </ul>
                </div>
                <Typography variant="body2" color="text.secondary">
                  Duration: 6 months
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: $100
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instructor: Naveen Bhattnagar
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/buy">
                  <Button className="buy-button">Buy</Button>
                </Link>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentMarketing;

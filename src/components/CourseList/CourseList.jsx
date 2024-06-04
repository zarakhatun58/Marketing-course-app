import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import seoImg from "../../Assets/images/seo.jpg";
import introImg from "../../Assets/images/intro.jpg";
import contentImg from "../../Assets/images/content.jpg";
import analysisImg from "../../Assets/images/analysis.jpg";
import creationImg from "../../Assets/images/creation.jpg";
import emailImg from "../../Assets/images/email.jpg";
import googleImg from "../../Assets/images/google.jpg";
import mastryImg from "../../Assets/images/mastry.jpg";
import affiliateImg from "../../Assets/images/affiliate.png";
import { Link, useNavigate } from "react-router-dom";
import "./Course.css";
import SearchIcon from "@mui/icons-material/Search";
import useAuth from "../../hooks/useAuth";

const courses = [
  {
    id: 1,
    title: "Introduction to Digital Marketing",
    description:
      "Learn the basics of digital marketing, including SEO, social media, email marketing, and more.",
    duration: "4 weeks",
    level: "Beginner",
    price: "$199",
    instructor: "John Doe",
    image: introImg,
    testimonials: [
      {
        student: "Alice Smith",
        feedback:
          "A great introduction to the world of digital marketing. Highly recommend!",
      },
      {
        student: "Bob Johnson",
        feedback:
          "Learned a lot from this course. The instructor was very knowledgeable.",
      },
    ],
  },
  {
    id: 2,
    title: "Advanced SEO Techniques",
    description:
      "Deep dive into advanced SEO techniques to boost your website's ranking on search engines.",
    duration: "6 weeks",
    level: "Advanced",
    price: "$299",
    instructor: "Jane Roe",
    image: seoImg,
    testimonials: [
      {
        student: "Charlie Brown",
        feedback:
          "This course took my SEO skills to the next level. Worth every penny!",
      },
      {
        student: "Danielle Green",
        feedback: "Excellent course with lots of practical tips and insights.",
      },
    ],
  },
  {
    id: 3,
    title: "Social Media Marketing Mastery",
    description:
      "Master social media marketing strategies for Facebook, Instagram, Twitter, and LinkedIn.",
    duration: "8 weeks",
    level: "Intermediate",
    price: "$249",
    instructor: "Mary Jane",
    image: mastryImg,
    testimonials: [
      {
        student: "Edward King",
        feedback:
          "Fantastic course with in-depth coverage of all major social media platforms.",
      },
      {
        student: "Fiona Adams",
        feedback:
          "Gained a lot of valuable insights and strategies. Highly recommend!",
      },
    ],
  },
  {
    id: 4,
    title: "Email Marketing Essentials",
    description:
      "Learn how to create effective email marketing campaigns that convert.",
    duration: "3 weeks",
    level: "Beginner",
    price: "$149",
    instructor: "Chris Lee",
    image: emailImg,
    testimonials: [
      {
        student: "George White",
        feedback:
          "Great course for beginners. Easy to follow and very informative.",
      },
      {
        student: "Hannah Scott",
        feedback:
          "Helped me improve my email marketing campaigns significantly.",
      },
    ],
  },
  {
    id: 5,
    title: "Content Marketing Strategy",
    description:
      "Develop a content marketing strategy that drives traffic and engagement.",
    duration: "5 weeks",
    level: "Intermediate",
    price: "$199",
    instructor: "Lisa Miller",
    image: contentImg,
    testimonials: [
      {
        student: "Ian Baker",
        feedback:
          "Loved this course! It helped me create a solid content marketing plan.",
      },
      {
        student: "Jane Foster",
        feedback:
          "Very practical and insightful. I learned a lot about content marketing.",
      },
    ],
  },
  {
    id: 6,
    title: "Google Ads Mastery",
    description:
      "Become proficient in Google Ads and learn how to create effective ad campaigns.",
    duration: "6 weeks",
    level: "Advanced",
    price: "$299",
    instructor: "Mark Spencer",
    image: googleImg,
    testimonials: [
      {
        student: "Frank Martin",
        feedback:
          "This course helped me get a high ROI on my ad campaigns. Highly recommended!",
      },
      {
        student: "Laura Wilson",
        feedback:
          "The best course for learning Google Ads. Practical and insightful.",
      },
    ],
  },
  {
    id: 7,
    title: "Content Creation for Social Media",
    description:
      "Learn how to create engaging content for social media platforms.",
    duration: "4 weeks",
    level: "Beginner",
    price: "$199",
    instructor: "Sarah Connor",
    image: creationImg,
    testimonials: [
      {
        student: "Nina Perez",
        feedback:
          "Great course! I learned a lot about creating engaging social media content.",
      },
      {
        student: "Jack Daniels",
        feedback:
          "The instructor was very knowledgeable and the content was very useful.",
      },
    ],
  },
  {
    id: 8,
    title: "Analytics and Data Interpretation",
    description:
      "Learn how to analyze digital marketing data and make data-driven decisions.",
    duration: "5 weeks",
    level: "Intermediate",
    price: "$249",
    instructor: "David Clark",
    image: analysisImg,
    testimonials: [
      {
        student: "Michael Brown",
        feedback:
          "This course helped me understand how to use data to drive marketing decisions.",
      },
      {
        student: "Olivia Martinez",
        feedback: "Very informative course with lots of practical examples.",
      },
    ],
  },
  {
    id: 9,
    title: "Affiliate Marketing",
    description:
      "Learn how to set up and run successful affiliate marketing campaigns.",
    duration: "6 weeks",
    level: "Advanced",
    price: "$299",
    instructor: "Jessica Alba",
    image: affiliateImg,
    testimonials: [
      {
        student: "Paul Walker",
        feedback:
          "The best course on affiliate marketing I've taken. Highly recommend!",
      },
      {
        student: "Emily Clark",
        feedback:
          "Learned a lot about affiliate marketing strategies. Very practical.",
      },
    ],
  },
];

const CourseList = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const toggleCartVisible = () => {
    setCartVisible(!cartVisible);
  };
  const addToCart = (course) => {
    const updatedCart = [...cart, course];
    setCart(updatedCart);
    const totalPrice = updatedCart.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item.price.replace("$", "")),
      0
    );
    setTotal(totalPrice);
    toggleCartVisible();
  };
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleBuyClick = (courseId) => {
    if (user && user.email) {
      navigate("/buy");
    } else {
      navigate("/signIn");
    }
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
        Our Courses
      </Typography>
      <Grid container justifyContent="center" style={{ marginBottom: "30px" }}>
        <Grid item xs={12} md={7.5} style={{ margin: "auto" }}>
          <TextField
            variant="outlined"
            size="small"
            type="search"
            placeholder="Search here..."
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%", // Set width to 100%
                borderRadius: "30px",
                height: "50px",
              },
              ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                alignItems: "center",
                position: "relative",
                borderRadius: "30px",
                height: "50px",
                paddingRight: " 0px !important",
                [theme.breakpoints.down("sm")]: {
                  // Adjust styles for small screens
                  height: "39px",
                  maxWidth: "100%",
                },
              },
            }}
            style={{
              maxWidth: "100%",
              minWidth: "100%",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="search-root">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={cartVisible ? 10 : 12}>
          <Grid container spacing={4}>
            {filteredCourses.map((course) => (
              <Grid item key={course.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.image}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontSize: "15px" }}
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Duration: {course.duration}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Price: {course.price}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Instructor: {course.instructor}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginBottom: "15px",
                      }}
                    >
                      <div>
                        <Button
                          className="buybtn"
                          onClick={() => handleBuyClick(course.id)}
                        >
                          Buy
                        </Button>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <Button
                          className="cartBtn"
                          onClick={() => addToCart(course)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {cartVisible && (
          <Grid item xs={12} md={2}>
            <div style={{ marginTop: "20px" }}>
              <div className="cartDiv">
                <div className="container-s">
                  <h4>
                    Cart{" "}
                    <span className="price" style={{ color: "black" }}>
                      <i className="fa fa-shopping-cart"></i>{" "}
                      <b>{cart.length}</b>
                    </span>
                  </h4>
                  {cart.map((item, index) => (
                    <p key={index}>
                      <a href="/" className="title">
                        {item.title}
                      </a>{" "}
                      <span className="price">{item.price}</span>
                    </p>
                  ))}
                  <hr />
                  <p>
                    Total{" "}
                    <span className="price" style={{ color: "black" }}>
                      <b>${total.toFixed(2)}</b>
                    </span>
                  </p>
                  <Link to="/buy">
                    <Button>Pay Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default CourseList;

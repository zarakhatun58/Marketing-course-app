import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    subject: "",
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country list from an external API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_00w6k4f",
        "template_ayaz2j5",
        formData,
        "z-m40QutSjra48zUP"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    setFormData({
      firstname: "",
      lastname: "",
      country: "",
      subject: "",
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={6} style={{ margin: "auto" }}>
        <div
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontWeight: "600",
            marginBottom: "30px",
          }}
        >
          Contact Us
        </div>
        <div class="container">
          <form onSubmit={handleSubmit}>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={formData.firstname}
              onChange={handleChange}
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={formData.lastname}
              onChange={handleChange}
            />

            <label for="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
              value={formData.subject}
              onChange={handleChange}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;

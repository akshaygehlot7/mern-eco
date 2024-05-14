import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import akshay from "../../../Assets/images/akshay.jpeg";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={akshay}
              alt="Founder"
            />
            <Typography>Akshay Gehlot</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @akshaygehlot. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <div className="aboutSectionLinks">
              <a href="https://instagram.com/meabhisingh" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
              <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
                <FacebookIcon className="FacebookIconSvgIcon" />
              </a>
              <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
                <LinkedInIcon className="LinkedInIconSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Home.css";
import Frame16 from "../../assets/Frame16.png";
import Buttons from "../../components/Buttons";
import Reviews from "../../components/Reviews";
import { FaMessage } from "react-icons/fa6";
import { PiTelegramLogoThin } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Artboard41png from "../../assets/Artboard41.png";
import Frame from "../../assets/Frame.png";

const Home = () => {
  return (
    <>
      <div className="homepage-hero">
        <div className="hero-content">
          <div className="customer-img">
            <img src={Frame16} alt="customer Image Loading" />
            <h1 className="customer-h1">Your Trusted All-In-One</h1>
            <h2 className="customer-h2">
              <i>Travel Companion</i>
            </h2>
            <p className="customer-p">
              Find and Book Hotels, Flights, Car Rentals, and Unique Experiences
              Across the Globe Tailored Recommendations for Every Journey
            </p>
            <div className="btn">
              <Buttons />
            </div>
          </div>
        </div>
      </div>

      <div className="aboutus-container">
        <div className="aboutus-content">
          <div className="aboutus-content-container">
            <h1 className="aboutus-h1">About us</h1>
            <p className="aboutus-p">
              Travel Smart is your one-stop destination for all your travel
              planning needs. Whether you're dreaming of a tropical getaway, a
              cultural adventure, or a city break, we're here to help you plan
              the perfect trip
            </p>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <h1>What People Say </h1>
        <p className="reviews-p">
          Discover how Travel Smart has helped others plan unforgettable
          adventures. Read real reviews from travelers just like you who have
          experienced the benefits of our personalized recommendations and
          hassle-free booking process
        </p>

        <div className="review-section">
          <Reviews />
        </div>
      </div>

      <div className="contact-us-section">
        <div className="contact-us-bg1">
          <div className="contact-form">
            <div className="contact-form-header">
              <h1 className="contact-h1">Get in Touch</h1>

              <p>
                Have a question? Need Assistance ? we're <br /> Here to Help !
              </p>
            </div>

            <form action="" className="form-content">
              <div className="contact-first-box">
                <div className="send-msg">
                  <h3>Send a Message</h3> <FaMessage />
                </div>
                <div className="contact-form-input">
                  <div>
                    <input type="text" placeholder="First Name" />
                  </div>

                  <div>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="contact-form-input">
                  <div>
                    <input type="number" placeholder="Phone" />
                  </div>

                  <div>
                    <input type="email" placeholder="Last Name" />
                  </div>
                </div>

                <div className="contact-form-input">
                  <div className="input-company">
                    <input
                      className="input-company"
                      type="text"
                      placeholder="Group or Company"
                    />
                  </div>
                </div>

                <div className="contact-form-input">
                  <div className="input-company">
                    <input
                      className="input-company"
                      type="text"
                      placeholder="How Can we help?"
                    />
                  </div>
                </div>

                <button className="form-submit">
                  Submit
                  <span className="message-icon">
                    <PiTelegramLogoThin />
                  </span>
                </button>
              </div>
              <div className="contact-second-box">
                <div>
                  <h3>Contact Info</h3>
                  <p className="mail">
                    <FaMessage /> travelsmart@gmail.com
                  </p>
                  <p className="social-links">
                    <PiTelegramLogoThin />
                    <BsTwitterX /> <CiFacebook /> <FaInstagram />
                  </p>
                </div>

                <div className="frame-image">
                  <img className="frame-img" src={Frame} alt="" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className="contact-us-bg2"></div>
      </div>

      <div className="Footer-section">
        <div className="footer-container">
          <ul className="footer-content">
            <li className="footer-item-header">About</li>
            <li className="footer-items">
              <a href="#">About</a>
            </li>
            <li className="footer-items">
              <a href="#">Submit on Issue</a>
            </li>
            <li className="footer-items">
              <a href="#">Github Repo</a>
            </li>
            <li className="footer-items">
              <a href="#">Slack</a>
            </li>
          </ul>
          <ul className="footer-content">
            <li className="footer-item-header">Getting Started</li>
            <li className="footer-items">
              <a href="#">Introduction</a>
            </li>
            <li className="footer-items">
              <a href="#">Documentation</a>
            </li>
            <li className="footer-items">
              <a href="#">Usage</a>
            </li>
            <li className="footer-items">
              <a href="#">Globals</a>
            </li>
            <li className="footer-items">
              <a href="#">Accomodations</a>
            </li>
            <li className="footer-items">
              <a href="#">Collections</a>
            </li>
          </ul>
          <ul className="footer-content">
            <li className="footer-item-header">Resources</li>
            <li className="footer-items">
              <a href="#">API</a>
            </li>
            <li className="footer-items">
              <a href="#">Form Validation</a>
            </li>
            <li className="footer-items">
              <a href="#">Visibilty</a>
            </li>
            <li className="footer-items">
              <a href="#">Community</a>
            </li>

            <li className="footer-items">
              <a href="#">Marketplace</a>
            </li>
          </ul>
          <ul className="footer-content">
            <li className="footer-item-header">Social Media</li>
            <li className="footer-items">
              <p className="footer-p">
                Follow us on Social media to find out the latestupdates on our
                Progress
              </p>
            </li>
            <li className="footer-items">
              <BsTwitterX /> <CiFacebook /> <FaInstagram />
            </li>
          </ul>
        </div>

        <div className="copyright-section">
          <div>
            <h4>@2024 Travel Smart. All Rights Reserved</h4>
          </div>
          <ul className="policy">
            <li>Privary Policy</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
          <img className="logo" src={Artboard41png} alt="Logo" />
        </div>
      </div>
    </>
  );
};
export default Home;

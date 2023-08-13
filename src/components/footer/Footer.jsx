import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import FooterForm from "./footer-form/FooterForm";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <FooterForm />
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Beiliaev Nikolay
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">BN © 2023</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://facebook.com"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link> */}
            <a
              className="social-icon-link telegram"
              href="https://telegram.me/Kolyvayko"
              aria-label="Twitter"
            >
              <i className="fab fa-telegram" />
            </a>
            <a
              className="social-icon-link viber"
              href="viber://chat/?number=%2B380955021826"
              aria-label="LinkedIn"
            >
              <i className="fab fa-viber" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

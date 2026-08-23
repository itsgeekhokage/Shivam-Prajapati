/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer_inner">
        <div className="footer_top">
          <div className="footer_brand">
            <h3>Shivam Prajapati</h3>
            <p>Product Engineer — Full Stack &amp; AI Systems</p>
          </div>
          <div className="footer_links">
            <div className="footer_col">
              <h4>Navigate</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/edu">Education</Link>
              <Link to="/skill">Skills</Link>
            </div>
            <div className="footer_col">
              <h4>More</h4>
              <Link to="/project">Selected Work</Link>
              <Link to="/exp">Experience</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/fixCall">Book a Call</Link>
            </div>
            <div className="footer_col">
              <h4>Social</h4>
              <a href="https://www.linkedin.com/in/shivam-prajapati-66ba92226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Shivam36998" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/shivamprajapati__7/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com/gunehgar__7" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <span>© {new Date().getFullYear()} Shivam Prajapati · Built with React</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

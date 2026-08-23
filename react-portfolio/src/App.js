/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from "./components/Project";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import "./light.css";
import "./responsive.css";
import SingleProject from "./parts/SingleProject";
import Experience from "./components/Experience";
import MailModel from "./bits/MailModel";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/singleProject" element={<SingleProject />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fixCall" element={<MailModel />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;

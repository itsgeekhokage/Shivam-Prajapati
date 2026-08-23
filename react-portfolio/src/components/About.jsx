/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SocialCard from "../parts/SocialPallete";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const About = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    setTimeout(scrollToTop, 200);
  }, []);

  return (
    <motion.div
      id="about"
      className="about_main_div"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="about_upper_row">
        <motion.div
          className="about_left_div"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src="/images/fullPhoto.png"
            alt=""
          />
          <div></div>
        </motion.div>
        <motion.div
          className="about_right_div"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1>About Me</h1>
          {[
            `I'm Shivam Prajapati — a product engineer and Associate (Product
            & Growth) at Dhruv Research. I own products end-to-end: architecture,
            delivery, and iteration on live traffic. IIT (BHU) Varanasi
            graduate, Class of 2025.`,
            `My core stack is TypeScript and Python across React, Next.js,
            Node.js, and FastAPI, backed by PostgreSQL, MongoDB, Docker, and
            cloud deployment. I write code that survives contact with
            production — tested with Jest and Vitest, built to be maintained.`,
            `On the AI side, I've shipped voice-fraud detection running on
            10,000+ daily audio submissions, transcript-analysis microservices,
            RAG pipelines, and transformer-based code review. I care about
            models that get deployed, not demos.`,
            `Representative outcomes: analytics processing cut from 8 hours to
            10 minutes, 99% of manual reporting automated, a vendor-CRM
            migration that took a 2–7 day workflow down to 30 minutes, and a
            scraping suite that reduced manual effort by 90%.`,
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <p>{text}</p>
            </motion.div>
          ))}

          <div className="about_lower_row">
            <motion.div
              className="about_lower_first_row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text_blue">
                Based in: <span className="text_normal">India</span>
              </div>
              <div className="text_blue">
                Current Role:{" "}
                <span className="text_normal">
                  Associate — Product &amp; Growth, Dhruv Research
                </span>{" "}
              </div>
              <div className="text_blue">
                Education:{" "}
                <span className="text_normal">IIT (BHU) Varanasi, 2025</span>{" "}
              </div>
            </motion.div>
            <div className="about_lower_second_row">
              <SocialCard />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

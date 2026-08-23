/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import IconCards from "../bits/IconCards";
import { GitHub } from "@mui/icons-material";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ContactPage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    setTimeout(scrollToTop, 200);
  }, []);

  const socialItems = [
    { icon: <CallIcon />, text: "Book a Call", link: "/fixCall" },
    { icon: <GitHub />, text: "GitHub", link: "https://github.com/Shivam36998" },
    { icon: <LinkedInIcon />, text: "LinkedIn", link: "https://www.linkedin.com/in/shivam-prajapati-66ba92226/" },
    { icon: <InstagramIcon />, text: "Instagram", link: "https://www.instagram.com/shivamprajapati__7/" },
    { icon: <TwitterIcon />, text: "X (Twitter)", link: "https://twitter.com/gunehgar__7" },
  ];

  return (
    <motion.div
      id="contact"
      className="contact"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="contact_upper_div"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's Talk
        </motion.h1>
        <motion.h6
          className="contact_sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Open to conversations about product engineering, AI systems, and
          data-heavy problems.
        </motion.h6>
        <motion.div
          className="cont_first_row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="contact_mail_button">
            <a href="mailto:shivam.prajapati.codes@gmail.com">
              Mail me at: shivam.prajapati.codes@gmail.com
            </a>
          </button>
          <button className="resume_button">
            <a
              href="https://drive.google.com/file/d/1JLecJ3tV9JvqQ2DLyBEGFWJfLF5Xp94i/view?usp=sharing"
              target="_blank"
              rel="noreferrer">
              Download Resume
            </a>
          </button>
        </motion.div>
      </motion.div>
      <div className="contact_right_div">
        <div className="contact_social_media">
          {socialItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <IconCards
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

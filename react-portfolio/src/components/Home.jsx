/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import IconCards from "../bits/IconCards";
import CallIcon from "@mui/icons-material/Call";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import ShortAbout from "../parts/ShortAbout";
import ShortSkills from "../parts/ShortSkills";
import ShortProject from "../parts/ShortProject";
import ShortExp from "../parts/ShortExp";
import HireButton from "../parts/HireButton";

// Page transition wrapper
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Stagger children
const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const fadeRight = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

const iconVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Home = () => {
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
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div id="home" className="home">
        <motion.div
          className="home_intro_area"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="text_blue" variants={fadeRight}>
            Associate — Product &amp; Growth · Dhruv Research
          </motion.h1>
          <motion.h1 className="text_normal" variants={fadeRight}>
            Shivam Prajapati
          </motion.h1>
          <motion.h2 className="text_blue" variants={fadeRight}>
            <TypeAnimation
              sequence={[
                "Product Engineer",
                2000,
                "AI Systems Engineer",
                2000,
                "Full-Stack Developer",
                2000,
                "Backend Architect",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </motion.h2>
          <motion.p className="text_normal" variants={fadeUp}>
            I design, build, and ship production systems end-to-end — analytics
            platforms, AI microservices, and data pipelines processing
            hundreds of thousands of records daily. IIT (BHU) Varanasi, Class
            of 2025.
          </motion.p>
          <motion.div
            className="home_stats"
            variants={fadeUp}
            initial="initial"
            animate="animate"
          >
            {[
              { num: "8h → 10 min", label: "Pipeline processing, redesigned" },
              { num: "300K+", label: "Daily records automated" },
              { num: "5+", label: "Production systems owned" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="home_stat"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
              >
                <span className="home_stat_num">{stat.num}</span>
                <span className="home_stat_label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="homeicons">
            {[
              { icon: <CallIcon />, text: "Book a Call", link: "/fixCall" },
              {
                icon: <CloudDownloadIcon />,
                text: "Download Resume",
                link: "https://drive.google.com/file/d/1znHWJS6fgoGC4rj9tWQb257wpH4Orzd0/view?usp=sharing",
              },
              {
                icon: <WebStoriesIcon />,
                text: "View Work",
                link: "/project",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={iconVariants}
                initial="initial"
                animate="animate"
              >
                <IconCards
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="home_image_area"
          variants={scaleIn}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="home_image_circle"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/profilebw.png"
              alt="Shivam Prajapati"
              className="home_masked_profile"
            />
          </motion.div>
        </motion.div>
      </div>

      <ShortAbout />
      <ShortSkills />
      <ShortProject />
      <ShortExp />
      <HireButton />
    </motion.div>
  );
};

export default Home;

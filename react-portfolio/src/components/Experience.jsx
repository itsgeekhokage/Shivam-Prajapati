/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import experience from "../assets/experience";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Item = ({ item, index }) => {
  return (
    <motion.div
      className="exp_item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="exp_timeline_icon"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        viewport={{ once: true }}
      >
        <WorkHistoryIcon />
      </motion.div>
      <motion.div
        className="exp_card"
        whileHover={{
          y: -4,
          transition: { duration: 0.3 },
        }}
      >
        <h1>{item.company}</h1>
        <div className="exp_card_second_row">
          <h3 className="text_orange">{item.title}</h3>
          <p>{item.date}</p>
        </div>
        <div>
          <ul>
            {item.description.map((point, key) => {
              return <li key={key}>{point}</li>;
            })}
          </ul>
        </div>
        {item.links.length > 0 && (
          <div>
            <span className="text_orange">Links: </span>
            {item.links.map((link, key) => (
              <a
                href={link.link}
                className="exp_links"
                key={key}>
                {link.text}
              </a>
            ))}
          </div>
        )}
        {item.projects.length > 0 && (
          <div>
            <span className="text_orange">Shipped: </span>
            {item.projects.map((link, key) => (
              <a
                href={link.link}
                className="exp_links"
                key={key}>
                {link.text}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const professional = experience.filter((item) => item.type !== "campus");
  const campus = experience.filter((item) => item.type === "campus");

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
      className="exp"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Experience
      </motion.h1>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        3+ years shipping production systems — from survey infrastructure
        processing 300K+ daily responses to AI microservices and analytics
        platforms.
      </motion.h6>
      <div>
        <div className="exp_list_area">
          {professional.map((item, key) => {
            return (
              <Item
                item={item}
                key={key}
                index={key}
              />
            );
          })}
        </div>
        <motion.div
          className="exp_list_area"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="exp_section_title">Campus Leadership — IIT BHU</h2>
          {campus.map((item, key) => {
            return (
              <Item
                item={item}
                key={key}
                index={key}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;

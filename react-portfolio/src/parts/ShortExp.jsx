/** @format */

import React from "react";
import { motion } from "framer-motion";
import styles from "./ShortExp.module.css";
import experience from "../assets/experience";
import { useNavigate } from "react-router-dom";

const Card = ({ item, index }) => {
  let navigate = useNavigate();
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onClick={() => navigate("/exp")}
    >
      <h1>{item.company}</h1>
      <div>
        <span>{item.title}</span>
        <span>{item.date}</span>
      </div>
    </motion.div>
  );
};

const ShortExp = () => {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className={styles.pagePart}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <h1>Experience</h1>
        <h6>
          Owning products end-to-end — measurable outcomes on live traffic,
          from architecture to deployment
        </h6>
      </motion.div>
      <div className={styles.pagePart}>
        {experience
          .filter((item) => item.type !== "campus")
          .slice(0, 3)
          .map((item, key) => (
            <Card
              key={key}
              item={item}
              index={key}
            />
          ))}
        <Card
          item={{
            company: "See More",
            title: "Full history — professional & campus leadership",
            date: "",
            link: "/exp",
          }}
          index={3}
        />
      </div>
    </motion.div>
  );
};

export default ShortExp;

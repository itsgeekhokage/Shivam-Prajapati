/** @format */

import React from "react";
import { motion } from "framer-motion";
import projects from "../assets/projects";
import styles from "./ShortProject.module.css";
import { useNavigate } from "react-router-dom";

const ShortProject = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={styles.row}>
        <h2>Selected Work</h2>
        <span onClick={() => navigate("/project")}>
          <div>View All</div>
        </span>
      </div>

      <div className={styles.list}>
        {projects.professional.slice(0, 3).map((item, key) => {
          return (
            <motion.div
              className={styles.card}
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: key * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => navigate("/singleProject", { state: item })}
            >
              <div className={styles.imgbox}>
                <img
                  src={item.frontImage}
                  alt=""
                />
              </div>
              <div className={styles.name}>
                {item.name}
                <span> View details</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <span className={styles.bottom} onClick={() => navigate("/project")}>
        <div>View All</div>
      </span>
    </motion.div>
  );
};

export default ShortProject;

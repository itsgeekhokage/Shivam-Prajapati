/** @format */

import React from "react";
import { motion } from "framer-motion";
import styles from "./ShortAbout.module.css";
import { Link } from "react-router-dom";

const ShortAbout = () => {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <ul>
          <li>
            <strong>Current:</strong> Associate — Product &amp; Growth at Dhruv
            Research, owning products end-to-end.
          </li>
          <li>
            <strong>Track record:</strong> Cut analytics processing from 8
            hours to 10 minutes; automated 300K+ daily records; shipped AI
            systems running on live traffic.
          </li>
          <li>
            <strong>Stack:</strong> TypeScript, Python, React, Node.js,
            FastAPI, PostgreSQL, Docker.
          </li>
          <li>
            <strong>Education:</strong> B.Tech, IIT (BHU) Varanasi — Class of
            2025.
          </li>
          <li>
            Full background on the <Link to={"/about"}>about page</Link> —
            selected work <Link to={"/project"}>here</Link>.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ShortAbout;

/** @format */

import React from "react";
import { motion } from "framer-motion";
import styles from "./ShortSkills.module.css";

const Circle = ({ text, index }) => {
  return (
    <motion.div
      className={styles.circle}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    >
      {text}
    </motion.div>
  );
};

const ShortSkills = () => {
  let skills = [
    "Python",
    "JavaScript",
    "SQL",
    "React.js",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Fastify",
    "Prisma ORM",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "LangChain",
    "LangGraph",
    "RAG",
    "AI Agents",
    "MCP",
    "AWS",
    "Docker",
    "Kubernetes",
    "System Design",
  ];

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>SkillSet Overview</h2>
      <div>
        {skills.map((item, key) => (
          <Circle
            text={item}
            key={key}
            index={key}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ShortSkills;

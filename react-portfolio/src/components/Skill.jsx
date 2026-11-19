/** @format */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const allCategories = [
  {
    title: "Languages",
    emoji: "💻",
    accent: "#f7df1e",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    accent: "#61dafb",
    items: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Responsive Design" },
      { name: "Performance Optimization" },
    ],
  },
  {
    title: "Backend & APIs",
    emoji: "⚙️",
    accent: "#68a063",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Fastify" },
      { name: "REST APIs" },
      { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Authentication" },
      { name: "Background Workers" },
      { name: "Microservices" },
      { name: "Database Optimization" },
      { name: "System Design" },
    ],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    accent: "#47a248",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "AI / ML",
    emoji: "🤖",
    accent: "#ff6b6b",
    items: [
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "LLM Applications" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG" },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
      { name: "Structured Outputs" },
      { name: "LLM Evaluation" },
      { name: "Conversational Memory" },
      { name: "Streaming" },
    ],
  },
  {
    title: "Agentic Engineering",
    emoji: "🧠",
    accent: "#a855f7",
    items: [
      { name: "MCP" },
      { name: "Agent Orchestration" },
      { name: "Tool Calling" },
      { name: "Context Management" },
      { name: "Token Optimization" },
      { name: "Skills" },
      { name: "Agent Control" },
      { name: "AI-Assisted Development" },
      { name: "Coding Agents" },
    ],
  },
  {
    title: "Cloud & Tools",
    emoji: "☁️",
    accent: "#38bdf8",
    items: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Cursor" },
      { name: "OpenCode" },
      { name: "Vitest" },
      { name: "k6" },
    ],
  },
];

const Skill = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filters = ["All", ...allCategories.map(c => c.title)];
  const displayed = activeFilter === "All"
    ? allCategories
    : allCategories.filter(c => c.title === activeFilter);

  return (
    <motion.div
      className="skill_page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header */}
      <motion.div
        className="skill_header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1>Skills & Technologies</h1>
        <p>Tools and technologies I work with daily</p>
      </motion.div>

      {/* Filter Pills */}
      <motion.div
        className="skill_filters"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {filters.map((f) => (
          <button
            key={f}
            className={`skill_filter_pill ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Categories Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          className="skill_grid"
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {displayed.map((cat, catIndex) => (
            <motion.div
              className="skill_card"
              key={cat.title}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: catIndex * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              style={{ "--card-accent": cat.accent }}
            >
              <div className="skill_card_header">
                <span className="skill_card_emoji">{cat.emoji}</span>
                <h3>{cat.title}</h3>
                <span className="skill_card_count">{cat.items.length}</span>
              </div>
              <div className="skill_chips">
                {cat.items.map((item, i) => (
                  <motion.div
                    className="skill_chip"
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.06 + i * 0.04,
                    }}
                    whileHover={{
                      scale: 1.06,
                      boxShadow: `0 4px 16px ${cat.accent}33`,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="skill_chip_icon"
                      />
                    )}
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Stats */}
      <motion.div
        className="skill_stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {[
          { num: "3", label: "Languages" },
          { num: "12+", label: "Backend & Systems" },
          { num: "20+", label: "AI / ML & Agentic" },
          { num: "9", label: "Cloud & Tools" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="skill_stat"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="skill_stat_num">{stat.num}</span>
            <span className="skill_stat_label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skill;

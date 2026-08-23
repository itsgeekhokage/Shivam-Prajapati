/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HireButton = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      style={{
        position: "fixed",
        right: "2rem",
        bottom: "1.2rem",
        zIndex: 100,
        cursor: "pointer",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/contact")}
    >
      <div
        style={{
          background: "var(--primary-gradient)",
          borderRadius: "12px",
          padding: "0.9rem 2rem",
          color: "#fff",
          fontWeight: 800,
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem",
          boxShadow: "var(--shadow-glow)",
          transition: "box-shadow 0.3s ease",
          letterSpacing: "-0.01em",
        }}
      >
        Get in Touch
      </div>
    </motion.div>
  );
};

export default HireButton;

/** @format */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Education = () => {
  let [tran, setTran] = useState(0);
  let [full, setFull] = useState(0);
  let [content, setContent] = useState(
    "Hover a milestone on the timeline to view details"
  );

  const general = (
    <p className="moving-element move-top">
      <h1 className="text_blue"> Education </h1>
      <p className="text_normal">
        {" "}
        Academic timeline — IIT (BHU) Varanasi and earlier
      </p>
    </p>
  );

  const HighSchool = (
    <>
      <h1 className="text_normal"> High School </h1>
      <h3 className="text_normal"> St. Xavier's Sr. Sec. School</h3>
      <p className="text_normal"> Police Line Road, Kannauj</p>
      <h2 className="text_white"> Percentage - 96.2%</h2>
      <h3 className="text_normal">
        {" "}
        Subjects :- Maths, Science, Information Technology, English, Hindi,
        Social Science
      </h3>
    </>
  );

  const Intermediate = (
    <>
      <h1 className="text_orange"> InterMediate </h1>
      <h3 className="text_normal"> St. Xavier's Sr. Sec. School</h3>
      <p className="text_normal"> Police Line Road, Kannauj</p>
      <h2 className="text_white"> Percentage - 95.2%</h2>
      <h3 className="text_normal">
        {" "}
        Subjects :- Maths, Physics, Chemistry, Information Technology, English,
        Physical Education
      </h3>
    </>
  );

  const BTech = (
    <>
      <h1 className="text_orange"> Bachelor Of Technology </h1>
      <h3 className="text_normal"> Indian Institute of Technology, Varanasi</h3>
      <h2 className="text_white"> GPA :- 8.14 / 10</h2>
      <h3 className="text_normal">
        {" "}
        Branch - Pharmaceutical Engineering and Technology
      </h3>
      <h3 className="text_normal">
        {" "}
        Duration: 2021 – 2025
      </h3>
    </>
  );

  const fullHandler = () => {
    if (full === 0) {
      setFull(1);
    } else {
      setFull(0);
    }
  };

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
      id="education"
      className="education"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="ed_description"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {general}
      </motion.div>

      <AnimatePresence mode="wait">
        {full === 0 ? (
          <motion.div
            className="ed_main_row"
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="education_timeline"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="education_line"></div>
              <div className="education_timeBoxes">
                {[
                  { year: "2019", label: "High School", data: HighSchool },
                  { year: "2021", label: "InterMediate", data: Intermediate },
                  { year: "2025", label: "B. Tech", data: BTech },
                ].map((item, i) => (
                  <motion.div
                    className="education_timeBox"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    onMouseOver={() => {
                      setContent(item.data);
                      setTran(1);
                    }}
                    onMouseLeave={() => {
                      setContent(
                        "Hover a milestone on the timeline to view details"
                      );
                      setTran(0);
                    }}
                  >
                    <div className="ed_box text_normal">{item.year}</div>
                    <div className="ed_lines"></div>
                    <motion.div
                      className="ed_circle"
                      whileHover={{ scale: 1.8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    ></motion.div>
                    <div className="ed_lines"></div>
                    <div className="ed_box text_normal"> {item.label} </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="ed_edFullBox"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={
                content ===
                "Hover a milestone on the timeline to view details"
                  ? { height: "auto", color: "rgb(238, 255, 0)" }
                  : {}
              }
            >
              {content}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="ed_main_row"
            key="fullview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[HighSchool, Intermediate, BTech].map((edu, i) => (
              <motion.div
                className="ed_edFullBox"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {edu}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="full_ed_button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button onClick={fullHandler}>
          {full === 0 ? "Read Full Timeline" : "Back"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Education;

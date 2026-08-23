/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projects from "../assets/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Projects = () => {
  const filters = [
    "FrontEnd",
    "BackEnd",
    "FullStack",
    "HTML",
    "CSS",
    "JS",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "Socket",
    "Material UI",
    "MongoDB",
    "SQL",
  ];

  let [projectList, setProjectList] = useState(projects);

  let [isProjectAll, setIsProjectAll] = useState(false);

  const navigate = useNavigate();

  const projectAllHandler = () => {
    document.querySelector(".projects_area").style.height = "auto";
    setIsProjectAll(true);
  };
  const projectLessHandler = () => {
    document.querySelector(".projects_area").style.height = "60vh";
    setIsProjectAll(false);
  };

  const passCardData = (data) => {
    navigate("/singleProject", { state: data });
  };

  const FrontCard = ({ item, index }) => {
    const {
      id,
      name,
      category,
      tags,
      filters,
      description,
      code,
      link,
      frontImage,
      images,
    } = item;
    let taglist = "";
    for (let i = 0; i < filters.length; i++) {
      taglist += "#";
      taglist += filters[i];
      taglist += " ";
    }
    return (
      <motion.div
        className="project_card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: (index % 3) * 0.1,
          ease: [0.4, 0, 0.2, 1],
        }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="project_card_hidden">
          <div className="project_card_icons">
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer">
              <span>
                <GitHubIcon />
                Code
              </span>
            </a>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer">
              <span>
                <LanguageIcon />
                Live
              </span>
            </a>

            <span onClick={() => passCardData(item)}>
              <FullscreenIcon />
              More
            </span>
          </div>
          <div className="project_card_tags">
            {tags.slice(0, 8).map((tg, ind) => {
              return <span key={ind}>{tg}</span>;
            })}
          </div>
        </div>
        <img
          onClick={() => passCardData(item)}
          className="project_card_front_image"
          src={frontImage}
          alt={name}
        />
        <div className="project_card_title">{name}</div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="projects_area">
        {projectList.map((item, index) => (
          <FrontCard
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

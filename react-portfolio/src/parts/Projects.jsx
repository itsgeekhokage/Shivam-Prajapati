/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projects from "../assets/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LockIcon from "@mui/icons-material/Lock";

const groups = [
  {
    key: "professional",
    title: "Professional Projects",
    subtitle: "Shipped at work and client engagements",
    items: projects.professional,
  },
  {
    key: "personal",
    title: "Personal Projects",
    subtitle: "Side experiments — currently in the lab",
    items: projects.personal,
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const passCardData = (data) => {
    navigate("/singleProject", { state: data });
  };

  const FrontCard = ({ item, index }) => {
    const { name, tags, code, link, frontImage, comingSoon } = item;
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
            {comingSoon ? (
              <span className="project_card_coming">
                <LockIcon />
                Soon
              </span>
            ) : (
              <>
                {code && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span>
                      <GitHubIcon />
                      Code
                    </span>
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span>
                      <LanguageIcon />
                      Live
                    </span>
                  </a>
                )}
              </>
            )}
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
        {comingSoon && (
          <div className="project_card_soon">Coming Soon</div>
        )}
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
      {groups.map((group) => (
        <React.Fragment key={group.key}>
          <div className="project_section_title">
            <h2>{group.title}</h2>
            <span>{group.subtitle}</span>
          </div>
          <div className="projects_area">
            {group.items.map((item, index) => (
              <FrontCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;

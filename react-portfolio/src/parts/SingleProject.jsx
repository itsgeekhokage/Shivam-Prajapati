/** @format */

import React, { useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useLocation, useNavigate } from "react-router-dom";

const SingleProject = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  useEffect(() => {
    if (!data) {
      navigate("/project", { replace: true });
    }
  }, [data, navigate]);

  if (!data) return null;

  const {
    name,
    category,
    tags,
    description,
    code,
    link,
    frontImage,
    comingSoon,
  } = data;

  return (
    <div className="project_fc">
      <CancelIcon
        className="cancalIcon"
        onClick={() => navigate("/project")}
      />
      <div className="project_fc_left_div">
        <img
          className="project_fc_image"
          src={frontImage}
          alt={name}
        />
        <h1 className="text_normal">{name}</h1>
        <h3 className="text_blue bold">Category: {category}</h3>
        <p className="project_tags text_normal bold">
          {tags.map((item, key) => (
            <li key={key}>{item} </li>
          ))}
        </p>
      </div>
      <div className="project_fc_right_div">
        {comingSoon ? (
          <>
            <h1>Coming Soon</h1>
            <div className="project_fc_coming">
              <RocketLaunchIcon className="project_fc_coming_icon" />
              <p className="text_normal">
                This one is still in the lab — being built and polished right
                now. Check back soon.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1>Overview</h1>
            <ul
              id="projectDesc"
              className="project_desc text_normal">
              {description.map((des, index) => (
                <li key={index}>{des}</li>
              ))}
            </ul>
            <div className="project_button_box">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="project_button text_normal">
                    <LanguageIcon />
                    View Live
                  </button>
                </a>
              )}
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="project_button text_normal">
                    <GitHubIcon />
                    View Code
                  </button>
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProject;

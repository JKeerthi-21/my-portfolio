import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/keerthi.jonnala.5" target="_blank">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/keerthi_jonnala/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/keerthi-jonnala-28b051190/" target="_blank">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://twitter.com/keerthi__j" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hey there!, I'm <span className="highlighted-text">Keerthi Jonnala</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "Software Developer",
                    1000,
                    "Full stack Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of developing secure and reliable software applications.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="keerthiJonnalaResume.pdf" download="Keerthi_Jonnala__Resume.pdf">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

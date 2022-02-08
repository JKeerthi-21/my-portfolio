import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Technical Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C++", ratingPercentage: 95 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Data Structures", ratingPercentage: 95 },
    { skill: "DBMS", ratingPercentage: 89 },
    { skill: "OOP", ratingPercentage: 97 },
    { skill: "Computer Networks", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "AWS", ratingPercentage: 75 },
    { skill: "SQL", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Mongo DB", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Path Finding Visualizer ",
      duration: { fromDate: "AUG 2020", toDate: "OCT 2020" },
      description:
        "Depicts the shortest path between starting and ending points on a grid even with a barrier of any shape, also through the other nodes(if any) using Dijkstra's Algorithm.",
      subHeading: "Technologies Used:  HTML, CSS, Javascript, React JS, Bootsrap",
    },
    {
      title: "Student Placement Analyzer ",
      duration: { fromDate: "JUN 2021", toDate: "AUG 2021" },
      description:
        "A machine learning model, which predicts recruiting companies for students based on the previous 5 years student’s data.",
      subHeading:
        "Technologies Used:  Python, Pandas, Machine Learning.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "DEC 2021", toDate: "JAN 2022" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Institute of Technology (NIT), Durgapur"}
        subHeading={"COMPUTER SCIENCE AND ENGINEERING [Score: 80%]"}
        fromDate={"2018"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Raman Bhavan - I"}
        subHeading={"MPC [Score: 96%]"}
        fromDate={"2016"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Dr.KKR Gowtham High School"}
        subHeading={"High School [Score: 98%]"}
        fromDate={"2014"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"32 Crayons"}
          subHeading={"SOFTWARE ENGINEER INTERN"}
          fromDate={"MAR 2021"}
          toDate={"AUG 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a Software Engineer Intern at a tech start-up named 32 Crayons at Bangalore.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed the frontend and backend infrastructure of Giftperf and Holcal system using HTML, CSS,
JavaScript, React JS, and Django (Python).
          </span>
          <br />
          <span className="resume-description-text">
            - Followed team established working agreements and definition of done via practices such as test-driven
development, pair programming, continuous integration, etc.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Consistently delivered the updated UI versions of all of those.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learning new technologies"
        description="Being a tech enthusiast, I always love to learn new technologies and consistently applying them."
      />
      <ResumeHeading
        heading="Playing Chess"
        description="I have always found Chess interesting and challenging. I have secured Bronze in Inter NIT National Level Chess Competition in 2019."
      />
      <ResumeHeading
        heading="Playing Badminton"
        description="I like to challenge my reflexes a lot while competing in badminton tournaments."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

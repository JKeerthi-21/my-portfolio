import React from "react";
import Typical from "react-typical";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"Projects"}
      />
      <div className="main-work">
      <div className="projects">
      <span className="box">

      <h4>Path Finding Visualizer</h4>
      <br/>
      <p className="tech-stack">Tech Stack: HTML, CSS, JavaScript, React JS, Bootstrap</p>
      <br/>
      <p>Depicts the shortest path between starting and ending points on a grid even with a barrier of any shape, also through the other nodes(if any) using Dijkstra's Algorithm.</p>
      <br/>
      <a href="https://jkeerthi-21.github.io/Pathfinding-Visualizer/" target="_blank"><button className="view-btn">Take a look!</button></a>
      
      </span>


      <span className="box"><h4>Portfolio</h4><br/>
      <p className="tech-stack">Tech Stack: React JS, Bootstrap</p><br/>
      <p>A Personal Portfolio website to showcase all my details and projects at one place.</p><br/>
      <a href="" target="_blank"><button className="view-btn">Take a look!</button></a>
      </span>
      </div>


      <div className="projects">
      <span className="box">

      <h4>Meme Generator</h4><br/>
      <p className="tech-stack">Tech Stack: React JS, Bootstrap</p><br/>
      <p>Generates random meme images(collected from a sample api) with text at the top and bottom taken as user input.</p><br/>
      <a href="https://jkeerthi-21.github.io/Pathfinding-Visualizer/" target="_blank"><button className="view-btn">Take a look!</button></a>
      
      </span>


      <span className="box"><h4>E-commerce Website</h4><br/>
      <p className="tech-stack">Tech Stack: MERN Stack, Redux</p><br/>
      <p>Online ecommerce website for showcasing and selling products onlne with payment system integration.</p>
      <br/>
      <a href="https://jkeerthi-21.github.io/Pathfinding-Visualizer/" target="_blank"><button className="view-btn">Take a look!</button></a>
      </span>
      </div>

      <div className="projects">
      <span className="box">

      <h4>Calculator</h4><br/>
      <p className="tech-stack">Tech Stack: HTML, CSS, JavaScript</p><br/>
      <p>A basic calculator that performs mathematical operations.</p>
      <br/>
      <a href="https://jkeerthi-21.github.io/Calculator/" target="_blank"><button className="view-btn">Take a look!</button></a>
      
      </span>


      <span className="box"><h4>Student Placement Analyzer</h4><br/>
      <p className="tech-stack">Tech Stack: Python, Pandas, Machine Learning</p><br/>
      <p>A machine learning model, which predicts recruiting companies for students based on the previous 5 years student’s data like specialization, skills, previous intern experience, salary expectation, location preference, etc.</p>
      <br/>
      </span>
      </div>

</div>
    </div>
  );
}

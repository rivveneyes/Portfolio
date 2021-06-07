import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function ResumeBody() {
  return (
    <div className="projects-body">
      <div className="heading">Have A Look</div>
      <Carousel
        interval={2000}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <a
          href="https://github.com/rivveneyes/Rock-Paper-Scissors
            "
        >
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/Rock-Paper-Scissors/main/resources/R-P-S-thumbnail.png"
              alt="nan"
            />
            <p className="legend">
              Play Rock-Paper-Scissors against the computer
            </p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/calculator-app">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/calculator-app/main/Calculator-App.png"
              alt="nan"
            />
            <p className="legend">Calculator</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/forms-project">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/forms-project/main/Contact%20Form.png"
              alt="nan"
            />
            <p className="legend">Simple Form</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/clock-project">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/clock-project/main/Clock%20project.png"
              alt="nan"
            />
            <p className="legend">Clock</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/To-Do-App">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/To-Do-App/main/thumnail.png"
              alt="nan"
            />
            <p className="legend">Make a todo list with this application</p>
          </div>
        </a>
      </Carousel>
    </div>
  );
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function ResumeBody() {
  return (
    <div className="resume-body">
      <div className="heading">Have A Look</div>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <a
          href="https://github.com/rivveneyes/Rock-Paper-Scissors
            "
        >
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/Rock-Paper-Scissors/main/resources/R-P-S-thumbnail.png"
              alt="nan"
            />
            <p className="legend">Rock-Paper-Scissors</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/calculator-app">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/calculator-app/main/Calculator-App.png"
              alt="nan"
            />
            <p className="legend">Legend 2</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/forms-project">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/forms-project/main/Contact%20Form.png"
              alt="nan"
            />
            <p className="legend">Legend 3</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/clock-project">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/clock-project/main/Clock%20project.png"
              alt="nan"
            />
            <p className="legend">Legend 4</p>
          </div>
        </a>
        <a href="https://github.com/rivveneyes/To-Do-App">
          <div>
            <img
              src="https://raw.githubusercontent.com/rivveneyes/To-Do-App/main/thumnail.png"
              alt="nan"
            />
            <p className="legend">Legend 5</p>
          </div>
        </a>
      </Carousel>
    </div>
  );
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function ProjectsBody() {
  return (
    <div className="projects-body">
      <h2 className="heading morepage-heading">Have A Look</h2>
      <div className="flex-content">
        <section>
          <h1>A little About Me</h1>

          <p>
            Im a self-taught web developer who grew up on a computer, over time
            I would wonder how every thing works together from website to the
            dynamic data they display. I'm at the point now were I pursue that
            information day by day.It start with a &#10094;HELLO WORLD &#10095;
            in HTML and will never end, I try to know some thing I didnt know
            yesterday.
          </p>
        </section>
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
                src="https://github.com/rivveneyes/Rock-Paper-Scissors/raw/main/Rock-Paper-Scissors.png"
                alt="nan"
              />
              <p className="legend">
                Play Rock-Paper-Scissors against a computer
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
    </div>
  );
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function ResumeBody() {
  return (
    <div className="projects-body">
      <h2 className="heading">Have A Look</h2>
      <div className="flex-content">
        <section>
          <span>
            <strong>About my journey</strong>
          </span>
          <p>
            Im a self-taught web developer aiming to become proficient in both
            front and back-end web development.I've had an interest in web
            development for a few years now and have enjoyed every part about it
            from the hard to the harder. Every application I've created I try
            challenge my self along with writing efficient and 'readable
            code',not just creating spaghetti code.Some days my favorite thing
            is writing CSS for a static website I made.Other days I'll add
            another piece of functionality to one of my apps.Steping into
            learning the react library has been a huge exploration, just
            changing the way I think about building some thing.From reuseable
            components to handling state and especially understanding react's
            life-cycle methods. This is my passion I chose this over many others
            things to do in my day to day ever since my first 'HELLO WORLD' in
            HTML I've been hooked,learning all the interesting quirks in every
            language.
          </p>
          <hr />
          <p>
            -HTML tags and their many different attributes along their inital
            way of displaying them selves,
            <br />
            -CSS's many ways to go about styling some thing and how those styles
            get interpreted in different browsers,
            <br />
            -JavaScript declaring variables in a function only gives you access
            to them within the scope of that function.
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

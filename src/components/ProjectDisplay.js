import React from "react";
import Project from "./Project";

export default function ProjectDisplay() {
  return (
    <>
      <div className="projects-container">
        {projectInformation.map((project) => (
          <Project key={project.title} information={project} />
        ))}
      </div>
    </>
  );
}

const projectInformation = [
  {
    title: "Github Finder App",
    github: "https://github.com/rivveneyes/github-api-search",
    src: "https://raw.githubusercontent.com/rivveneyes/github-api-search/main/Gitgub-api-app.png",
    link: "https://githubfiner1357.netlify.app/",
    info: "This project was deployed to Netlify, and was created with React,CSS and a library. The App's function is to Sears users using github's api. For A more indepth description along with project files click on my github link provided.",
  },
  {
    title: "Snake Game App",
    src: "https://raw.githubusercontent.com/rivveneyes/SNAKE-GAME/main/Snake-Game.png",
    github: "https://github.com/rivveneyes/SNAKE-GAME",
    link: "https://rivveneyes.github.io/SNAKE-GAME/",
    info: "This snake game was built with HTML,CSS and JS. This project was a lot of fun, but while building I made a lot of bugs and had to debug a lot along the way.Wich inturn gave me alot of practice with the developer tool.",
  },
  {
    title: "Expense-Tracker",
    src: "https://raw.githubusercontent.com/rivveneyes/react-expense-tracker/main/React-expense-tracker.png",
    github: "https://github.com/rivveneyes/react-expense-tracker",
    link: "https://react-expence-tracker.herokuapp.com/",
    info: "This expense-tracker app was build with react and includes basic bootstrap-5 styling.I found bootstrap's documentation verry easy to follow but, personally I still enjoy writing my own css.Still a great learning experience for combinding react with bootstrap and seeing how to implement them together.",
  },
  {
    title: "Recipe App",
    src: "https://raw.githubusercontent.com/rivveneyes/react-simple-recipe-project/main/Recipe%20App.png",
    github: "https://github.com/rivveneyes/react-simple-recipe-project",
    link: "https://recipers-app.netlify.app/",
    info: "This recipe app was build with react and styles using css, there is simple functionality such as adding,deleteing and editing recipes.I also added localStorage functionality along with simple media queries for responsiveness.",
  },
];

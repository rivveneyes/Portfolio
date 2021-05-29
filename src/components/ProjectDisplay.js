import React from "react";
import Project from "./Project";

export default function ProjectDisplay() {
  return (
    <>
      <h2 className="heading"> -Skills-</h2>
      <div className="skills-container">
        <ol className="list-1">
          <li>
            <b>languages:</b>
          </li>
          <li>-HTML</li>
          <li>-CSS</li>
          <li>-Java Scipt</li>
          <li>-REACT 'library'</li>
        </ol>
        <ol className="list-3">
          <li>
            <b>Familair With:</b>
          </li>
          <li>-Git</li>
          <li>Linux</li>
          <li>-Boot-strap</li>
          <li>-Java Scipt libraries</li>

          <li>-API</li>
        </ol>
        <ol className="list-2">
          <li>
            <b>Deployed:</b>
          </li>
          <li>-Github/pages</li>
          <li>-Netlify</li>
          <li>-Heroku</li>
        </ol>
      </div>

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
    title: "Git Hub Finder API",
    github: "https://github.com/rivveneyes/github-api-search",
    src: "https://raw.githubusercontent.com/rivveneyes/github-api-search/main/Gitgub-api-app.png",
    link: "https://githubfiner1357.netlify.app/",
    info: "This project was deployed to Netlify, and was created with React,CSS and a library. The App's function is to Sears users using github's api. For A more indepth description along with project files click on my github link provided.",
  },
  {
    title: "Snake Game App",
    src: "https://raw.githubusercontent.com/rivveneyes/SNAKE-GAME/main/Snake-Game.png",
    link: "https://github.com/rivveneyes/SNAKE-GAME",
    info: "This snake game was built with HTML,CSS and JS. This project was a lot of fun, but while building I made a lot of bugs and had to debug a lot along the way.Wich inturn gave me alot of practice with the developer tool.",
  },
  {
    title: "Project Three",
    src: "https://motsandco.com/wp-content/uploads/avatar-1-300x300.png",
    info: "Ea ipsum ullamco quis incididunt nisi occaecat adipisicing id ipsum eiusmod ut est ipsum. Non velit id ipsum labore exercitation veniam culpa cupidatat velit deserunt non aute. Ullamco eu mollit duis do dolore.",
  },
  {
    title: "Project Four",
    src: "https://motsandco.com/wp-content/uploads/avatar-1-300x300.png",
    info: "Ea ipsum ullamco quis incididunt nisi occaecat adipisicing id ipsum eiusmod ut est ipsum. Non velit id ipsum labore exercitation veniam culpa cupidatat velit deserunt non aute. Ullamco eu mollit duis do dolore.",
  },
];

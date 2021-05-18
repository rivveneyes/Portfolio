import React from "react";
import Project from "./Project";

export default function ProjectDisplay() {
  return (
    <div className="projects-container">
      {projectInformation.map((project) => (
        <Project key={project.title} information={project} />
      ))}
    </div>
  );
}
const projectInformation = [
  {
    title: "Snake Game",
    url: "https://raw.githubusercontent.com/rivveneyes/SNAKE-GAME/main/Snake%20Game.png",
    info: "This snake game was built with HTML,CSS and JS. This project was a lot of fun, but while building I made a lot of bugs and had to debug a lot along the way.Wich inturn gave me alot of practice with the developer tool.",
  },
  {
    title: "Project Two",
    url: "https://motsandco.com/wp-content/uploads/avatar-1-300x300.png",
    info: "Ea ipsum ullamco quis incididunt nisi occaecat adipisicing id ipsum eiusmod ut est ipsum. Non velit id ipsum labore exercitation veniam culpa cupidatat velit deserunt non aute. Ullamco eu mollit duis do dolore.",
  },
  {
    title: "Project Three",
    url: "https://motsandco.com/wp-content/uploads/avatar-1-300x300.png",
    info: "Ea ipsum ullamco quis incididunt nisi occaecat adipisicing id ipsum eiusmod ut est ipsum. Non velit id ipsum labore exercitation veniam culpa cupidatat velit deserunt non aute. Ullamco eu mollit duis do dolore.",
  },
  {
    title: "Project Four",
    url: "https://motsandco.com/wp-content/uploads/avatar-1-300x300.png",
    info: "Ea ipsum ullamco quis incididunt nisi occaecat adipisicing id ipsum eiusmod ut est ipsum. Non velit id ipsum labore exercitation veniam culpa cupidatat velit deserunt non aute. Ullamco eu mollit duis do dolore.",
  },
];

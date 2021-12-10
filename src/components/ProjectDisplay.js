import React from "react";
import Project from "./Project";

export default function ProjectDisplay() {
  return (
    <>
      <span className="project-title">My Projects</span>
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
    info: "This project was built with 'React library' and using github's API.Project may take a moment to spin up",
  },
  {
    title: "Social",
    src: "https://github.com/rivveneyes/social-media/blob/main/social.png?raw=true",
    github: "https://github.com/rivveneyes/social-media/tree/main",
    link: "https://rivveneyes.github.io/social-media/",
    info: "This was a rough coppy of a facebook home page.The main purpose of this project was to work with js/jquery and scss.",
  },
  {
    title: "Expense-Tracker",
    src: "https://raw.githubusercontent.com/rivveneyes/react-expense-tracker/main/React-expense-tracker.png",
    github: "https://github.com/rivveneyes/react-expense-tracker",
    link: "https://react-expence-tracker.herokuapp.com/",
    info: "The expense tracker uses `React library` and boot-strap for layout.Project may take a moment to spin up",
  },
  {
    title: "News Letter Mockup",
    src: "https://raw.githubusercontent.com/rivveneyes/news-page/main/newletter-mockup.png",
    github: "https://github.com/rivveneyes/news-page/tree/main",
    link: "https://rivveneyes.github.io/news-page/",
    info: "This was a mockup news letter site created in html,css.",
  },
];

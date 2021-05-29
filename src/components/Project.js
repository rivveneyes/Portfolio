import React from "react";

export default function Project({ information }) {
  const { title, src, link, github, info } = information;
  return (
    <div className="project-card">
      <label>{title}</label>
      <a target="_blank" rel="noreferrer" href={link}>
        <img src={src} alt={title} />
      </a>
      <p>
        <a href={github} rel="noreferrer">
          *Github
        </a>
        <br />
        {info}
      </p>
    </div>
  );
}

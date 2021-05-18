import React from "react";

export default function Project({ information }) {
  const { title, url, info } = information;
  return (
    <div className="project-card">
      <label>{title}</label>
      <img src={url} alt={title} />
      <p>{info}</p>
    </div>
  );
}

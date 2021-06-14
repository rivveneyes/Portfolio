import React from "react";

export default function SkillsDisplay() {
  return (
    <div className="skills-container">
      <h2 className="heading"> -Skills-</h2>
      <div className="skills-display">
        <ol className="list-1">
          <li>
            <b>languages:</b>
          </li>
          <li>-HTML</li>
          <li>-CSS</li>
          <li>-JavaScript</li>
          <li>-REACT 'library'</li>
        </ol>
        <ol className="list-3">
          <li>
            <b>Worked With:</b>
          </li>
          <li>-Git</li>
          <li>-Github</li>
          <li>-Linux</li>
          <li>-Boot-strap</li>
          <li>-JavaScript libraries</li>
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
    </div>
  );
}

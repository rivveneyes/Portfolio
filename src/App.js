import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDisplay from "./components/ProjectDisplay";
import ResumeBody from "./components/ResumeBody";
import SkillsDisplay from "./components/SkillsDisplay";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SkillsDisplay />
            <ProjectDisplay />
          </Route>
          <Route exact path="/more-projects">
            <ResumeBody />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

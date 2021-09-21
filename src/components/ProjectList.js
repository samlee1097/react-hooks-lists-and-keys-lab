import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((component)=>{
          return (
            <div key= {component.id}>
            <ProjectItem name={component.name} about={component.about} technologies = {component.technologies}/>
            </div>
          )
        })
      }</div>
    </div>
  );
}

export default ProjectList;

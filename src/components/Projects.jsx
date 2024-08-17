import React, { useEffect, useState } from 'react';
import projectsData from '../assets/projects.json';
import githubIcon from '../assets/icons/github.svg';
import websiteIcon from '../assets/icons/website.svg';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="py-12 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="flex flex-col items-center mt-8">
          {projects.map((project, index) => (
            <div key={index} className="card w-full md:w-2/3 bg-base-100 shadow-xl m-4">
              <figure>
                <img src={project.image} alt={project.name} className="w-full h-64 object-cover"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <img src={githubIcon} alt="GitHub" className="w-6 h-6 icon"/>
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <img src={websiteIcon} alt="Website" className="w-6 h-6 icon"/>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

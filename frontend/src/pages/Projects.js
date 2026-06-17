import { useEffect, useState } from "react";
import axios from "axios";


function Projects() {

  const [projects, setProjects] = useState([]);


  useEffect(() => {

    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);



  return (

    <div>

      <h1>My Projects</h1>

      <div className="project-container">

        {
          projects.map((project) => (

            <div className="project-card" key={project.project_id}>

              <h2>{project.title}</h2>

              <p>
                {project.description}
              </p>

              <p>
                <b>Technologies:</b> {project.technologies}
              </p>


              <a 
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>


              <br />


              <a
                href={project.demo_link}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>


            </div>

          ))
        }

      </div>

    </div>

  );
}


export default Projects;
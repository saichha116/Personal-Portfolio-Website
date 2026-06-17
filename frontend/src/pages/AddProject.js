import { useState } from "react";
import axios from "axios";

function AddProject() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    github_link: "",
    demo_link: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .post(
        "http://localhost:5000/projects",
        formData
      )
      .then(() => {

        alert("Project Added Successfully!");

        setFormData({
          title: "",
          description: "",
          technologies: "",
          github_link: "",
          demo_link: ""
        });

      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>

      <h1>Add Project</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="technologies"
          placeholder="Technologies"
          value={formData.technologies}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="github_link"
          placeholder="GitHub Link"
          value={formData.github_link}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="demo_link"
          placeholder="Demo Link"
          value={formData.demo_link}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Project
        </button>

      </form>

    </div>
  );
}

export default AddProject;
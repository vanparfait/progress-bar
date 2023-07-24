import React, { useState } from "react";
import "./TechnoAdd.css";

const TechnoAdd = ({ handleAddTechno }) => {
  const [techno, setTechno] = useState({
    technoName: "",
    technoCategory: "",
    technoDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTechno(techno);
    //technos.push(techno);
    setTechno({
      technoName: "",
      technoCategory: "",
      technoDescription: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechno({ ...techno, [name]: value });
  };

  return (
    <div className="technoadd">
      <h1>Add a Techno</h1>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="technoname">Name:</label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            value={techno.technoName}
            type="text"
            name="technoName"
            id="technoname"
          />
          <br />
          <label htmlFor="technocategory">Category:</label>
          <br />
          <select
            onChange={(e) => handleChange(e)}
            value={techno.technoCategory}
            name="technoCategory"
            id="technocategory"
          >
            <option value="">Select a category</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="">Others</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description:</label>
          <br />
          <textarea
            value={techno.technoDescription}
            onChange={(e) => handleChange(e)}
            name="technoDescription"
            id="technoDescription"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default TechnoAdd;

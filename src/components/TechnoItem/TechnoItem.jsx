import React from "react";
import "./TechnoItem.css";

const TechnoItem = ({ techno, handleDelete }) => {
  return (
    <div className="card">
      <h3>Name</h3>
      <p> {techno.technoName} </p>
      <h3>Category</h3>
      <p>{techno.technoCategory}</p>
      <h3>Description</h3>
      <p>{techno.technoDescription}</p>
      <footer>
        <button
          className="btn-delete"
          onClick={() => handleDelete(techno.technoid)}
        >
          Delete
        </button>
      </footer>
    </div>
  );
};

export default TechnoItem;

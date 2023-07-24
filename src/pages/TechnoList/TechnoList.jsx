import React from "react";
import "./TechnoList.css";
import TechnoItem from "../../components/TechnoItem/TechnoItem";

const TechnoList = ({ technos, handleDelete }) => {
  return (
    <div className="techno-list">
      <h1>All Technos</h1>
      <div>
        {technos.map((techno) => (
          <TechnoItem
            techno={techno}
            key={techno.technoid}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnoList;

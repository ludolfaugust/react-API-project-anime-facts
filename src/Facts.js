import React from "react";

function Facts({ name, image }) {
  return (
    <div className="anime-box">
      <h2 className="anime-name">{name}</h2>
      <img src={image} alt="anime" className="anime-image" />
    </div>
  );
}

export default Facts;

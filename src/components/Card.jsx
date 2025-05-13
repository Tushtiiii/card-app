import React from "react";
import '../App.css'
import Cardcontainer from "./Cardcontainer";


const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="cardWrapper">
      <div className="gradientBorder">
        <div className="cardContent">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="image"
              loading="lazy"
            />
          )}
          <h2 className="title">{title}</h2>
          <p className="description" > {description}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Card;


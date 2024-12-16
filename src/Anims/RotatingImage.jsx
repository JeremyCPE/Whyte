import React from "react";

const RotatingImage = ({ imageUrl, altText, speed = "3s", style }) => {
  return (
      <div
        >
        <img
          src={imageUrl}
          alt={altText}
          className=" h-1/4 animate-spin ${speed} linear infinite  absolute w-16 h-16"
          style={style}
        />
      </div>
  );
};

export default RotatingImage;
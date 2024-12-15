import React from "react";

const RotatingImage = ({ imageUrl, altText, speed = "3s" }) => {
  return (
    <div className="flex inset-0 pointer-events-none overflow-hidden h-screen w-screen scale-50">
      <div
        className={`h-1/4 animate-spin ${speed} linear infinite `}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RotatingImage;
import React, { useState } from 'react';


function VideoCarousel({ videos, currentIndex, handleChevron }) {

  return (
    <div className="relative">
      <div className="aspect-video relative group cursor-pointer">
        <iframe 
          src={"https://www.youtube.com/embed/" + videos[currentIndex].id}
          alt={videos[currentIndex].title}
          className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default VideoCarousel;
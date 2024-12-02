import React, { useState } from 'react';
import VideoCarousel from './VideoCarousel';
import VideoThumbnails from './VideoThumbnails';

const videos = [
  {
    id: "jfKfPfyJRdk",
    title: "Live Performance",
  },
  {
    id: "1F3OGIFnW1k",
    title: "My ennemy",
  },
  {
    id:"pujlYPEyfP0",
    title:"Hole",
  },
  {
    id:"SSmtjD0DGrk",
    title:"Happiness"
  },
  {
    id:"P4aRJGm--U0",
    title:"Staying up all night"
  }
];

function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold transform -rotate- text-center text-white mb-16">Video</h2>
        
        <div className="space-y-8">
          <VideoCarousel videos={videos} currentIndex={currentIndex} handleChevron={setCurrentIndex} />
          <VideoThumbnails 
            videos={videos}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
        </div>
      </div>
  );
}

export default VideoSection;
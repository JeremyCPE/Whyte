import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

function VideoThumbnails({ videos, currentIndex, onSelect }) {

  const nextSlide = () => {
    onSelect((currentIndex) => (currentIndex + 1) % videos.length);
  };
  
  const prevSlide = () => {
    onSelect((currentIndex) =>
      currentIndex === 0 ? videos.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
    <div className="flex no-scrollbar">
      {[...videos, ...videos, ...videos].map((video, index) => (
        <div 
          key={index} 
          className="min-w-[33.33%] aspect-video flex transition-transform duration-500 ease-in-out relative group"
          onClick={() => onSelect(index % videos.length)}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
                  <span className="absolute inset-0 bg-black/50 opacity-0 cursor-pointer group-hover:opacity-100 flex items-center justify-center transition-opacity" >
                    <div className=" text-white text-lg font-bold flex">
                    <Play className="w-8 h-8 animate-wiggle text-lg font-bold items-center flex flex-col "/> 
                    </div>
                  </span>
                  <img 
                    src={"https://img.youtube.com/vi/" + video.id + "/0.jpg"}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
          </div>
      ))}
    </div>
      {/* Navigation Buttons */}
      <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
      <ChevronRight className="w-6 h-6" />
    </button>
    </div>
  );
}
export default VideoThumbnails;
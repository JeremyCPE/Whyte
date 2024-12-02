import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
          className={`min-w-[33.33%] aspect-video relative group cursor-pointer flex transition-transform duration-500 ease-in-out 
            ring-10 ring-[#cc4414] ring-offset-2 rounded-lg`}
          onClick={() => onSelect(index % videos.length)}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <img 
            src={"https://img.youtube.com/vi/" + video.id + "/0.jpg"}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
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
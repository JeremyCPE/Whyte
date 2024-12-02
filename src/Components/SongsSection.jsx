import React, {useState} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const releases = [
  {
    id:1,
    link: "jfKfPfyJRdk",
    src: "https://i.scdn.co/image/ab67616d00001e02ac6d4eec75a423b6d9ffd94b",
    type:"single",
    title: "Staying up all night",
  },
  {
    id:2,
    link: "1F3OGIFnW1k",
    src : "https://i.scdn.co/image/ab67616d00001e025dbb8e662d462466c0b22971",
    type: "single",
    title: "Sunday walks",
  },
  {
    id:3,
    link: "1F3OGIFnW1k",
    src : "https://i.scdn.co/image/ab67616d00001e02ea15b21dfbbaadc36203ba83",
    type: "album",
    title: "Way out",
  },
];

function SongSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % releases.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? releases.length - 1 : prevIndex - 1
    );
  };


  return (      
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold transform -rotate- text-center text-white mb-16">Release</h2>
        <div>
          <div className="relative h-full w-2/4 max-w-1xl mx-auto overflow-hidden">
            {/* Carousel Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {releases.map((release) => (
                <div key={release.id} className="w-full flex-shrink-0 flex justify-center">
                <img 
                src={release.src}
                alt={release.title}
                className="w-full h-full aspect-square">
                </img>
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

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {releases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
          
        </div>
          {/* Title */ }
          <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="bg-white/90 text-[#6A7B76] py-2 px-4 rounded-lg shadow-lg inline-block">
                    {releases[currentIndex].title}
                  </p>
      </div>
    </div>
    
    </div>
    </div>
  );
}

export default SongSection;
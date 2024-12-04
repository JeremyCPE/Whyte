import React, { useState } from "react";
import { Music2 } from 'lucide-react';


const releases = [
  {
    id: 1,
    link: "jfKfPfyJRdk",
    src: "https://i.scdn.co/image/ab67616d00001e02ac6d4eec75a423b6d9ffd94b",
    type: "single",
    title: "Staying up all night",
  },
  {
    id: 2,
    link: "1F3OGIFnW1k",
    src: "https://i.scdn.co/image/ab67616d00001e025dbb8e662d462466c0b22971",
    type: "single",
    title: "Sunday walks",
  },
  {
    id: 3,
    link: "1F3OGIFnW1k",
    src: "https://i.scdn.co/image/ab67616d00001e02ea15b21dfbbaadc36203ba83",
    type: "album",
    title: "Way out",
  },
  {
    id: 4,
    link: "1F3OGIFnW1k",
    src: "https://i1.sndcdn.com/artworks-Rkn4Fv7moP5tY5P0-3PafOQ-t500x500.jpg",
    type: "title",
    title: "Santé",
  },
];

function SongSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const newIndex = Math.round(scrollLeft / e.target.offsetWidth);
    setCurrentIndex(newIndex);
  };

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
          <div className="relative h-full mx-auto">
            {/* Carousel Container */}
            <div
              className="flex overflow-x-scroll scrollbar-hide space-x-4"
            >
              {releases.map((release,index) => (
                <div 
                key={index} 
                className={"md:w-[31%] w-[91%] flex-shrink-0 flex justify-center"}
                >
                  <div className="relative group">
                  <a className="absolute inset-0 bg-black/50 opacity-0 cursor-pointer hover:opacity-100 flex items-center justify-center transition-opacity" 
                    href={release.link} target="_blank">
                  
                  <div className="text-white text-lg font-bold items-center flex flex-col space-y-10" > 
                    <Music2 className="flex w-8 h-8 animate-wiggle"/> {release.title}  <p> Click to listen ! </p>
                  </div>
                  </a>
                  <img 
                  src={release.src}
                  alt={release.title}
                  className="w-full h-full aspect-square">
                  </img>
                </div>
                </div>
              ))}
          </div>
      </div>
    </div>
    
    </div>
  );
}

export default SongSection;
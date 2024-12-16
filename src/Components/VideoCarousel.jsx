import React from 'react';

function VideoCarousel({ videos, currentIndex, handleChevron }) {
  return (
    <div className="relative">
      <div className="aspect-video relative group cursor-pointer">
        <iframe 
          src={"https://www.youtube.com/embed/" + videos[currentIndex].id}
          alt={videos[currentIndex].title}
          className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-500"
        />
        
        {/* Chevron buttons - only visible on mobile (sm:hidden) */}
        <button 
          onClick={() => handleChevron('prev')}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full sm:hidden"
          aria-label="Previous video"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        <button 
          onClick={() => handleChevron('next')}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full sm:hidden"
          aria-label="Next video"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default VideoCarousel;
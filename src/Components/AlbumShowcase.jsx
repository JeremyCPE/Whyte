import React from 'react';

function AlbumShowcase() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-center mb-16 text-white transform -rotate-2">
          My New Album! 
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex group">
            <div className="relative hand-drawn p-3 bg-white transform rotate-2">
              <img 
                src="https://i.scdn.co/image/ab67616d00001e02ea15b21dfbbaadc36203ba83"
                alt="Whyte"
                className="rounded-lg transition-transform duration-300 group-hover:scale-105 hand-drawn"
              />
            </div>
          </div>
          
          <div className="space-y-6 hand-drawn bg-white/90 p-8">
            <h3 className="font-heading text-3xl font-bold text-black-600 transform -rotate-1">
              Way out
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed transform rotate-1">
              A magical collection of songs I wrote under the stars! ⭐️
              Each melody is like a colorful crayon drawing come to life through music.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-4 transform -rotate-1">
                <span className="text-black-600">When:</span>
                <span>June 19 2023</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-black-600">Style:</span>
                <span>Pop</span>
              </div>
              <div className="flex items-center space-x-4 transform rotate-1">
                <span className="text-black-600">Made By:</span>
                <span>Dreamscape Records</span>
              </div>
            </div>
            <button className="hand-drawn-random bg-[#cc4414] text-white px-8 py-3 font-bold hover:bg-[#a33610] transition-colors transform rotate-2">
              Listen to the Magic! 🎵
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumShowcase;

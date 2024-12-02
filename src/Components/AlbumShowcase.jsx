import React from 'react';

function AlbumShowcase() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-center mb-16 text-white transform -rotate-2">
          My New Album! 
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative hand-drawn p-3 bg-white transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Midnight Dreams Album Cover"
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="space-y-6 hand-drawn bg-white/90 p-8">
            <h3 className="font-heading text-3xl font-bold text-black-600 transform -rotate-1">
              Midnight Dreams
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed transform rotate-1">
              A magical collection of songs I wrote under the stars! ⭐️
              Each melody is like a colorful crayon drawing come to life through music.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-4 transform -rotate-1">
                <span className="text-black-600">When:</span>
                <span>October 15, 2023</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-black-600">Style:</span>
                <span>Happy Tunes & Magical Beats</span>
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

import React from 'react';
import { Play } from 'lucide-react';

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/66af176a9ccda9ebdecbb5a3/66af3bad5a631306c413353f_a_whyte_l.jpg"
          alt="album"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl font-bold text-white mb-6 ">
          <h1 className="text-9xl font-sztempel">WAY OUT</h1>
          <button className="bg-[#cc4414] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#a33610] transition-colors">
            <Play className="w-5 h-5" />
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
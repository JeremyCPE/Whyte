import React from 'react';
import { Play } from 'lucide-react';
import {socialLinks} from '../Data/socialLinks';


function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black z-10">
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
      <div className='hidden md:flex px-4' >
        <div className="grid gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-2 transform transition-all duration-300 hover:scale-110"
            >
                <div className="text-white-400">{link.icon}</div>
            </a>
          ))}
          
        </div>
      </div>
    </div>
  );
}
export default Hero;
import React from 'react';
import { socialLinks } from '../Data/socialLinks';

function SocialLinks() {

  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-4xl font-bold mb-12 text-white  transform -rotate-2">
          Let's Be Friends! 
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
              style={{ transform: `rotate(${(index % 2 === 0 ? 3 : -3)}deg)` }}
            >
              <div className="hand-drawn bg-white p-6 flex flex-col items-center space-y-2">
                <div className={link.color}>{link.icon}</div>
                <span className="text-sm font-medium text-gray-700">{link.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SocialLinks;
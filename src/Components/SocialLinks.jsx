import React from 'react';
import { Instagram, Twitter, Youtube, Music, Facebook } from 'lucide-react';

function SocialLinks() {
  const socialLinks = [
    {
      name: 'Spotify',
      icon: <Music className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}} />,
      url: 'https://spotify.com',
      color: 'text-green-600 hover:text-green-700'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}} />,
      url: 'https://instagram.com',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'X',
      icon: <Twitter className="w-8 h-8 animate-wiggle"  style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://twitter.com',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://youtube.com',
      color: 'text-red-600 hover:text-red-700'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://facebook.com',
      color: 'text-blue-600 hover:text-blue-700'
    }
  ];

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
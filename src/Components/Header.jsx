import { React, useState } from 'react';
import { Music2,Menu, X} from 'lucide-react';
import {socialLinks} from '../Data/socialLinks';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music2 className="w-8 h-8 text-[#cc4414]" />
          <span className="text-2xl font-bold">WHYTE</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#release" className="hover:text-[#cc4414] transition-colors">Release</a>
          <a href="#video" className="hover:text-[#cc4414] transition-colors">Video</a>
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleMenu}>
          {isOpen ? (
                <X className="w-6 h-6 hover:text-[#cc4414] cursor-pointer transition-colors" />
              ) : (
                <Menu className="w-6 h-6 hover:text-[#cc4414] cursor-pointer transition-colors" />
              )}
          </button>
        </div>
        </div>

      <nav>
      <div className={('md:hidden', isOpen ? 'block' : 'hidden')} >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black text-white p-4 justify-items-center font-heading text-2xl">
        <a href="#release" className="hover:text-[#cc4414] transition-colors block px-4 py-4 text-lg">Release</a>
        <a href="#video" className="hover:text-[#cc4414] transition-colors block px-4 py-4">Video</a>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
                <div className={link.color}>{link.icon}</div>
            </a>
          ))}
        </div>
        </div>
      </div>
      </nav>
    </header>
  );
}

export default Header;
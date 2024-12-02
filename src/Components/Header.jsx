import React from 'react';
import { Music2,Search,User } from 'lucide-react';

function Header() {
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
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 hover:text-[#cc4414] cursor-pointer transition-colors" />
          <User className="w-6 h-6 hover:text-[#cc4414] cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
}

export default Header;
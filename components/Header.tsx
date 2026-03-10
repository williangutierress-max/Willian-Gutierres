
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-black text-xl tracking-tighter text-black">PROMPT<span className="text-black bg-neon px-1 ml-1 rounded">MASTER</span></div>
        <a 
          href="#pricing"
          className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all active:scale-95"
        >
          QUERO O PACK
        </a>
      </div>
    </header>
  );
};

export default Header;

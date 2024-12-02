import React from 'react';

function DoodleOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="absolute w-full h-full opacity-[0.03]">
        <pattern id="doodle-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M20,20 Q30,5 40,20 T60,20" stroke="currentColor" fill="none" className="text-purple-600" />
          <path d="M70,50 L75,45 L80,50 L75,55 Z" className="text-pink-600" />
          <circle cx="30" cy="70" r="5" className="text-pink-600" />
          <path d="M80,80 Q85,75 90,80 T100,80" stroke="currentColor" fill="none" className="text-purple-600" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>
    </div>
  );
}

export default DoodleOverlay;
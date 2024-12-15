import React from 'react';

const StarAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * -20}s`,
          }}
        >
          <div className="w-full h-full bg-orange-200/70 rounded-full" />
        </div>
      ))}
    </div>
  );
};

export default StarAnimation;
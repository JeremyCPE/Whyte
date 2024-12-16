// src/Components/FlowerBackground.jsx
import React, { useState } from 'react';
import flower1 from '../assets/flower_1.png';
import flower2 from '../assets/flower_2.png';
import RotatingImage from '../Anims/RotatingImage';

function FlowerBackground() {
  const [flowers, setFlowers] = useState([]);
  const MAX_FLOWERS = 12;

  const addFlower = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const flower = Math.random() > 0.5 ? flower1 : flower2;
    const newFlower = {
      id: Date.now(),
      type: flower,
      x: x,
      y: y,
    };
    setFlowers(prev => {
      if (prev.length >= MAX_FLOWERS) {
        // Remove the oldest flower(s) and add the new one
        return [...prev.slice(1), newFlower];
      }
      // Add new flower if under the limit
      return [...prev, newFlower];
    });
    console.log('Added flower at:', e.clientX, e.clientY);
  };

  return (
    <div 
      className="absolute inset-0"
      onClick={addFlower}
      style={{ 
        pointerEvents: 'auto',
        zIndex: 20
      }}
    >
      {flowers.map((flower) => (
        <RotatingImage
          key={flower.id}
          imageUrl={flower.type}
          altText="flower"
          speed="3s"
          style={{
            left: `${flower.x}px`,
            top: `${flower.y}px`,
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>
  );
}

export default FlowerBackground;
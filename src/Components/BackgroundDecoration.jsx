import React from 'react';
import { Heart, Flower } from 'lucide-react';
import flower1 from "../assets/flower_1.png";
import flower2 from "../assets/flower_2.png";
import RotatingImage from '../Tools/RotatingImage';

function BackgroundDecoration() {
  const decorations = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 1,
    isHeart: Math.random() > 0.5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-1">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="absolute animate-pulse"
          style={{
            left: `${decoration.x}%`,
            top: `${decoration.y}%`,
            transform: `rotate(${decoration.rotation}deg) scale(${decoration.scale})`,
            transition: 'transform 0.5s ease-in-out',
            opacity: 0.1
          }}
        >
          {decoration.id%4 == 0 ?
            (
            decoration.isHeart ? (
            <RotatingImage imageUrl = {flower1} altText="flower1"/>
            ) : (
            <RotatingImage imageUrl = {flower2} altText="flower1"/>
          )) : (
          decoration.isHeart ? (
            <Heart className="w-8 h-8 text-orange-400" />
          ) : (
            <Flower className="w-8 h-8 text-orange-400" />
            ))}
        </div>
      ))}
    </div>
  );
}

export default BackgroundDecoration;
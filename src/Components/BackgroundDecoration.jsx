import React from 'react';
import { Heart, Flower } from 'lucide-react';
import flower1 from "../assets/flower_1.png";
import flower2 from "../assets/flower_2.png";
import RotatingImage from '../Anims/RotatingImage';
import FlowerAnimation from '../Anims/FlowerAnimation';
import StarAnimation from '../Anims/StarAnimation';

function BackgroundDecoration() {

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-orange-950/30" />
    <FlowerAnimation/>
    <StarAnimation/>
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_70%)]" />
    </div>
    
  );
}

export default BackgroundDecoration;
import React from 'react';

const FlowerPetal = ({ rotation, scale }: { rotation: number; scale: number }) => (
  <div
    className="absolute bg-orange-500/20"
    style={{
      width: `${scale * 16}px`,
      height: `${scale * 16}px`,
      transform: `rotate(${rotation}deg) translateY(-${scale * 10}px)`,
      borderRadius: '50% 50% 50% 0',
    }}
  />
);

const Flower = ({ posX, posY, scale }: { posX: number; posY: number; scale: number }) => {
  return (
    <div
      className="absolute animate-float"
      style={{
        left: `${posX}%`,
        top: `${posY}%`,
        transformOrigin: 'center',
        animationDelay: `${Math.random() * -20}s`,
      }}
    >
      {[0, 72, 144, 216, 288].map((rotation, i) => (
        <FlowerPetal key={i} rotation={rotation} scale={scale} />
      ))}
      <div 
        className="absolute bg-orange-400/30 rounded-full"
        style={{
          width: `${scale * 16}px`,
          height: `${scale * 16}px`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

const FlowerAnimation = () => {
  const flowers = React.useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      posX: Math.random() * 100,
      posY: Math.random() * 100,
      scale: 0.5 + Math.random() * 1.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {flowers.map((flower, i) => (
        <Flower key={i} {...flower} />
      ))}
    </div>
  );
};

export default FlowerAnimation;
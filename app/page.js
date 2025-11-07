'use client';

import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(prev => prev + 90);
  };

  return (
    <main className="container">
      <div className="logo-wrapper">
        <div
          className={`logo ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="plus-horizontal"></div>
          <div className="plus-vertical"></div>
          <div className="circle-accent"></div>
        </div>
        <h1 className="logo-text">Plus</h1>
        <p className="subtitle">Click the logo to rotate • Hover for effects</p>
      </div>
    </main>
  );
}

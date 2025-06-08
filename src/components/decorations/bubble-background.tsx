
"use client";

import { useEffect, useState } from 'react';
import type React from 'react';

const NUM_BUBBLES = 20;

interface BubbleStyle {
  left: string;
  animationDelay: string;
  animationDuration: string;
  width: string;
  height: string;
  backgroundColor: string;
  transformAmplitude: number;
}

export function BubbleBackground() {
  const [bubbles, setBubbles] = useState<BubbleStyle[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: BubbleStyle[] = [];
      const colors = [
        'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.3)', // Increased opacity
        'hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.25)',  // Increased opacity
        'hsla(var(--secondary-h), var(--secondary-s), var(--secondary-l), 0.28)', // Increased opacity
      ];

      for (let i = 0; i < NUM_BUBBLES; i++) {
        const size = Math.random() * 45 + 15; // 15px to 60px
        const txAmplitude = Math.random() * 5 + 1; // Random amplitude for side sway: 1 to 6

        newBubbles.push({
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 15 + 15}s`, // 15s to 30s
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          transformAmplitude: (Math.random() > 0.5 ? 1 : -1) * txAmplitude,
        });
      }
      setBubbles(newBubbles);
    };

    // Ensure CSS variables are available before generating bubbles
    // This is a simple way; for critical scenarios, one might check getComputedStyle
    const timeoutId = setTimeout(generateBubbles, 100); 

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
      {bubbles.map((style, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: style.left,
            width: style.width,
            height: style.height,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
            backgroundColor: style.backgroundColor,
            '--float-tx-amp': style.transformAmplitude,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

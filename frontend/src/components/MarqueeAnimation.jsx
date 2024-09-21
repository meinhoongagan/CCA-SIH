// MarqueeAnimation.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MarqueeItem from './MarqueeItem';

const MarqueeAnimation = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.offsetWidth;
    const itemWidth = marquee.firstChild.offsetWidth;
    const itemsNeeded = Math.ceil(window.innerWidth / itemWidth) + 1;

    // Clone items to create a continuous loop
    for (let i = 0; i < itemsNeeded; i++) {
      marquee.appendChild(marquee.firstChild.cloneNode(true));
    }

    const animate = (reverse = false) => {
      gsap.to(marquee, {
        x: reverse ? 0 : -itemWidth,
        duration: 5,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          gsap.set(marquee, { x: reverse ? -itemWidth : 0 });
        },
      });
    };

    const handleScroll = (e) => {
      gsap.killTweensOf(marquee);
      if (e.deltaY > 0) {
        animate();
      } else {
        animate(true);
      }
    };

    // Start the animation
    animate();

    // Add event listener
    window.addEventListener('wheel', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('wheel', handleScroll);
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <div className=" flex w-screen overflow-hidden bg-cyan-400 h-20 text-center">
      <div ref={marqueeRef} className="flex">
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
      </div>
    </div>
  );
};

export default MarqueeAnimation;
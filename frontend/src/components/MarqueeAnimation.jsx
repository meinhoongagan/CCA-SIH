// MarqueeAnimation.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import MarqueeItem from './MarqueeItem';


const MarqueeAnimation = () => {

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        gsap.to('.marque', {
          x: '-200%',
          duration: 2 ,
          repeat: -1,
          ease: 'none',
        });
        gsap.to('.marque img', {
          rotate: 180,
        });
      } else {
        gsap.to('.marque', {
          x: '0%',
          duration:2,
          repeat: -1,
          ease: 'none',
        });
        gsap.to('.marque img', {
          rotate: 0,
        });
      }
    };

    // Add event listener
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    
      <div id="move">
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
        <MarqueeItem text="TAKE THE TEST" imgSrc="./arrow-br.svg" />
      </div>
    
  );
};

export default MarqueeAnimation;

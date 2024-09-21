// MarqueeItem.js
import React from 'react';

const MarqueeItem = ({ text, imgSrc }) => {
  return (
    <div className="flex items-center whitespace-nowrap px-4">
      <h1 className="text-lg font-bold">{text}</h1>
      <img src={imgSrc} alt="img" className="ml-2 h-6 w-6" />
    </div>
  );
};

export default MarqueeItem;
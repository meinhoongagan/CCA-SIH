// MarqueeItem.js
import React from 'react';

const MarqueeItem = ({ text, imgSrc }) => {
  return (
    <div className="marque">
      <h1>{text}</h1>
      <img src={imgSrc} alt="img" />
    </div>
  );
};

export default MarqueeItem;

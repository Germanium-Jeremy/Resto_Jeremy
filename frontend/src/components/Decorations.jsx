import React from 'react';
import Image1 from '../assets/Potage.webp';

const Decorations = () => {
  const topPositions = ["top-[5%]", "top-[20%]", "top-[40%]", "top-[60%]", "top-[90%]"];
  const leftPositions = ["left-[10%]", "left-[30%]", "left-[50%]", "left-[70%]", "left-[90%]"];
  const heights = ["h-[10%]", "h-[20%]", "h-[30%]", "h-[40%]", "h-[50%]"];
  const widths = ["w-[10%]", "w-[20%]", "w-[30%]", "w-[40%]", "w-[50%]"];
  
  let randomNumber = Math.floor(Math.random() * 10) + 1; 
  
  const manyImages = () => {
    return Array.from({ length: randomNumber }).map((_, index) => {
      let randomTop = Math.floor(Math.random() * topPositions.length);
      let randomLeft = Math.floor(Math.random() * leftPositions.length);
      let randomHeight = Math.floor(Math.random() * heights.length);
      let randomWidths = Math.floor(Math.random() * widths.length);

      return (
        <img 
          key={index}
          src={Image1} 
          alt="Decoration" 
          className={`absolute ${heights[randomHeight]} ${widths[randomWidths]} opacity-5 ${topPositions[randomTop]} ${leftPositions[randomLeft]}`}
        />
      );
    });
  };

  return (
    <div className='fixed right-0 left-0 top-0 bottom-0'>
      {manyImages()}
    </div>
  );
};

export default Decorations;
import React from 'react'

function Poster1() {
  const imageStyle = {
    width: '50vw', 
    height: '80vh', 
    objectFit: 'contain', // Ensures the image scales properly
  };

  return (
    <div className='flex justify-end bg-[#2FA8B6]'>
      <img src='./poster12.png' style={imageStyle} className='shadow-lg'></img>
    </div>
  )
}

export default Poster1

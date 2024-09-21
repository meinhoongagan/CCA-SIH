import React from 'react'

const Poster2 = () => {
    const imageStyle = {
        width: '50vw', 
        height: '80vh', 
        objectFit: 'contain', // Ensures the image scales properly
    
      };
    
      return (
        <div className='flex justify-start bg-[#B0AFA7]'>
          <img src='./poster2.png' style={imageStyle} className='shadow-lg'></img>
        </div>
      )
}

export default Poster2

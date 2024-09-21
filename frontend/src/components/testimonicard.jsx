import React from 'react'

const Testimonicard = ({className}) => {
  return (
    
    <div className={`max-sm:w-4/5 max-sm:h-64 mt-8 mb-8 ${className}`}>
        <img src="image-from-rawpixel-id-15189329-png.png" alt="Review" className="review" />
        <p className="name">Santoshi Mishra</p>
        <p className="university">UIT-RGPV, Bhopal</p>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus officia eius tenetur totam et laudantium quam aliquam deleniti veritatis? Sit hic voluptates reprehenderit obcaecati?
        </p>
    </div>
  )
}

export default Testimonicard

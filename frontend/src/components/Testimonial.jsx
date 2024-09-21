import React from 'react';
// import reviewImg from '../assets/image-from-rawpixel-id-15189329-png.png';

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="test-card">
        <img src={reviewImg} alt="review" className="review" />
        <p className="name">Santoshi Mishra</p>
        <p className="university">UIT-RGPV, Bhopal</p>
        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus officia eius tenetur totam et laudantium quam aliquam deleniti veritatis?</p>
      </div>
    </div>
  );
}

export default Testimonial;

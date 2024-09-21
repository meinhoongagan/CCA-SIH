// Testimonial.js
import React from 'react';
import Testimonicard from './testimonicard'

const Testimonial = () => {
  return (
    <>
     <div className='w-screen h-[40vw] bg-gradient-to-t from-customBlue to-customWhite flex flex-col items-center gap-4'>
      <h1 className="font-serif text-5xl font-medium bg-transparent mt-8">Reviews</h1>
      <div className="testimonial">
      {/* <h1 >Testimonial</h1> */}
      <Testimonicard className="test-card"/>
      <Testimonicard className="test-card"/>
      <Testimonicard className="test-card"/>
      </div>
     </div>
    </>
  );
};

export default Testimonial;

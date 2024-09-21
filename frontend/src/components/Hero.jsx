// Hero.js
import React from 'react';
import Button from './button';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="bold">
          <span>Expert</span> Career Guidance, <br />
          <span>Better</span> College Prospects
        </p>
        <p className="info">
          A career counselling platform to help you navigate your career path with the help of our expert certified counselors
        </p>
        <Button className="auth expert">Chat with an Expert</Button>
        {/* <button className="auth expert">Chat with an Expert</button> */}
      </div>

      <div className="hero-img">
        <div className="img img1">
          <p className="title">Class 9th & 10th</p>
          <p className="sub-title">Guidance For</p>
          <p className="para1">Stream and subject <br/>combinations</p>
          <img src="image-from-rawpixel-id-13020188-png.png" alt="Class 9th & 10th" loading="lazy" />
        </div>
        <div className="img img2">
          <p className="title">Class 11th & 12th</p>
          <p className="sub-title">Guidance For</p>
          <p className="para2">Courses and <br/>college selection</p>
          <img src="girlwithbag.png" alt="Class 11th & 12th" loading="lazy" />
        </div>
        <div className="img img3">
          <p className="title">Study Abroad</p>
          <p className="sub-title">End to End Guidance for</p>
          <p className="para">Foreign universities Application</p>
          <img src="image-from-rawpixel-id-15191080-png.png" alt="Study Abroad" loading="lazy" />
        </div>
        <div className="img img4">
          <p className="title">College Student</p>
          <p className="sub-title">Guidance For</p>
          <p className="para4">Career transition and <br/> Course selection</p>
          <img src="image-from-rawpixel-id-15238002-png.png" alt="College Student" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

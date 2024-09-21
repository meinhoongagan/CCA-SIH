import React from 'react';
// import img1 from '../assets/image-from-rawpixel-id-13020188-png.png';
// import img2 from '../assets/image-from-rawpixel-id-15236493-png.png';
// import img3 from '../assets/image-from-rawpixel-id-15191080-png.png';
// import img4 from '../assets/image-from-rawpixel-id-15238002-png.png';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="bold"><span>Expert</span> Career Guidance, <br /><span>Better</span> College Prospects</p>
        <p className="info">A career counselling platform to help you navigate your career path with the help of our expert certified counselors.</p>
        <button className="auth expert">Chat with an Expert</button>
      </div>

      <div className="hero-img">
        <div className="img img1">
          <p className="title">Class 9th & 10th</p>
          <p className="sub-title">Guidance For</p>
          <p className="para1">Stream and subject combinations</p>
          <img src={img1} alt="Class 9th & 10th" />
        </div>
        <div className="img img2">
          <p className="title">Class 11th & 12th</p>
          <p className="sub-title">Guidance For</p>
          <p className="para2">Courses and college selection</p>
          <img src={img2} alt="Class 11th & 12th" />
        </div>
        <div className="img img3">
          <p className="title">Study Abroad</p>
          <p className="sub-title">End to End Guidance for</p>
          <p className="para">Foreign universities Application</p>
          <img src={img3} alt="Study Abroad" />
        </div>
        <div className="img img4">
          <p className="title">College Student</p>
          <p className="sub-title">Guidance For</p>
          <p className="para4">Career transition and Course selection</p>
          <img src={img4} alt="College Student" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

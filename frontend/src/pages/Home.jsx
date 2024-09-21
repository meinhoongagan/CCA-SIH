import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Questions from '../components/Questions';
import Cards from '../components/Cards';
import MarqueeAnimation from '../components/MarqueeAnimation';
import Poster1 from '../components/Poster1';
import Poster2 from '../components/poster2';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero />
      <MarqueeAnimation/>
      <Cards/>
      <Poster1/>
      <Testimonial />
      <Questions />
      <Poster2/>
    </div>
  )
}

export default Home

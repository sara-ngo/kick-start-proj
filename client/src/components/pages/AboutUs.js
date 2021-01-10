import React from 'react';
import '../../App.css';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';
import About from '../about/About';

function AboutUs() {
  document.documentElement.scrollTop = 0; 
  return (
    <>
      <About />
      <Cards />
      <Footer />
    </>
  );
}

export default AboutUs;
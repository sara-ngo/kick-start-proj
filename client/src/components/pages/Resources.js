import React from 'react';
import '../../App.css';
import Info from '../resources/Info';
import Footer from '../footer/Footer';

function Resources() {
  document.documentElement.scrollTop = 0; 
  return (
    <>
      <Info />
      <Footer />
    </>
  );
}

export default Resources;
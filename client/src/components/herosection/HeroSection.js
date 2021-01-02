import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>TAKE THE QUIZ</h1>
      <p>Reveal your political leanings</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

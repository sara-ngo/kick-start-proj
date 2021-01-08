import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>TAKE THE QUIZ</h1>
      <p>Reveal your political leanings</p>

      <div className='hero-btns'>
        <Link to='/SignUp'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </Link>

        <Link to='/AboutUs'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            LEARN MORE
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
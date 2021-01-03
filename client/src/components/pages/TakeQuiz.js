import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/quiz/TakeQuiz.css';
import { Button } from '../button/Button';
import Footer from '../footer/Footer';

function TakeQuiz() {
  return (
    <>
      <div className="container">
        <div className="col-md text-start">
          <h1 style={{color:"black"}}>We supposed to ask users to register for an account before taking this quiz</h1>
        </div>
        <div className="text-center">
          
        <Link to='/Quiz'>
          <Button
            className='btns'
            buttonStyle='btn--form'
            buttonSize='btn--large'
          >
            Let Start
          </Button>
        </Link>
        <Link to='/'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Go Back
          </Button>
        </Link>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TakeQuiz;

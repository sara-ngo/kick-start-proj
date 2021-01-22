import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import GoBackBtn from "./../GoBackBtn";
import { Button } from '../button/Button';
import '../../components/quiz/TakeQuiz.css';


function TakeQuiz() {
  return (
    <>
      <div className="container">
        <div className="text-start">
          <h2>***An account may be required in order to take the quiz***</h2>
          <h2>Important: This quiz has 20 multiple choice questions. There is no time limit but you cannot resume your quiz after you quit, so try to do it in one sitting. 
          All submissions are final, meaning you cannot go back to the previous question to change your answer. 
          When you are ready, click the "Start" button below.</h2>
        </div>
        
        <div className="text-center">
          <Link to="/Quiz">
            <Button buttonStyle='btn--form' buttonSize='btn-medium'>
              Start
            </Button>
          </Link>
          <GoBackBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TakeQuiz;

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
          <h2>(We supposed to ask user to register for an account before taking the quiz)</h2>
          <h2>This quiz has 20 multiple choice questions which determines the political party that best suits your interests.
          There is no time limited but please finish the quiz at one sitting since you can't resume your quiz after you quit. 
          Give careful consideration to your answers because you can't go back to the previous question to change your answer. 
          When you ready, click on "Let Start" button below to start your quiz.</h2>
        </div>
        
        <div className="text-center">
          <Link to="/Quiz">
            <Button buttonStyle='btn--form' buttonSize='btn-medium'>
              Let Start
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

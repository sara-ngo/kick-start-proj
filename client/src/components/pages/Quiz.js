import React from 'react';
import '../../components/quiz/TakeQuiz.css';
import Questions from "./../../containers/Questions";
import Footer from '../footer/Footer';

function Quiz() {
  return (
    <>
      <div className="container">
        <div className="text-start">
          <Questions />
        </div>
        
        <div className="text-center">
          {/* <GoBackBtn /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Quiz;

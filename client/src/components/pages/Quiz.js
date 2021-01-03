import React from 'react';
import '../quiz/TakeQuiz.css';
import Questions from "./../../containers/Questions";
import Footer from '../footer/Footer';

export default function Quiz() {
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

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import GoBackBtn from "./../GoBackBtn";
import '../../components/quiz/TakeQuiz.css';


function TakeQuiz() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="col-md text-start">
          <h2 style={{color: "#8585A4"}}>This quiz has 20 multiple choice questions which determines the political party that best suits your interests.
          There is no time limited but please finish the quiz at one sitting since you can't resume your quiz after you quit. 
          Give careful consideration to your answers because you can't go back to the previous question to change your answer. 
          When you ready, click on "Let Start" button below to start your quiz.</h2>
        </div>
        <div className="text-center">
          <Link to="/Quiz">
          <button className="btn rounded" type="button" style={{ backgroundColor: "rgb(60, 60, 108)", color: "white", marginRight:"5px" }}>Let Start</button>
          </Link>
          <GoBackBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TakeQuiz;

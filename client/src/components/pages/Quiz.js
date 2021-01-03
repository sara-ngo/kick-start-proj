import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Questions from "./../../containers/Questions";
import GoBackBtn from "./../GoBackBtn";
import Footer from '../footer/Footer';

export default function TakeQuiz() {
  return (
    <>
      <div className="container mb-5">
        <div className="col-md text-start">
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

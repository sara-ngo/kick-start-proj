import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Comments from "./../../containers/Comments";
import Footer from '../footer/Footer';
import GoBackBtn from "./../GoBackBtn";

export default function CommentPage() {
  return (
    <>
      <div className="container mt-4 mb-5">
        <h1 style={{color: "rgb(60, 60, 108)"}}>Disscussion Forum</h1>
        <div className="col-md text-start">
          <Comments />
        </div>
        <div className="text-center">
          <GoBackBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}

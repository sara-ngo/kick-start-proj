import React from 'react';
import '../../containers/Comments/discussion.css';
import Comments from "./../../containers/Comments";
import Footer from '../footer/Footer';
import GoBackBtn from "./../GoBackBtn";

export default function CommentPage() {
  return (
    <>
      <div className="container">
        <h1>Discussion Forum</h1>
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

import React from 'react';
import '../../containers/Comments/discussion.css';
import Comments from "./../../containers/Comments";
import Footer from '../footer/Footer';
import GoBackBtn from "./../GoBackBtn";
import GoUp from "./../GoUp";
export default function CommentPage() {
  return (
    <>
      <div className="Container">
        <h1>Discussion Forum</h1>
        <div className="text-start">
          <Comments />
        </div>
        <div className="text-center">
          <GoUp />
        </div>
      </div>
      <Footer />
    </>
  );
}

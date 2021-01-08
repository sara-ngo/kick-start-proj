import React from 'react';
import Comments from "./../../containers/Comments";
import Footer from '../footer/Footer';
import GoUp from "./../GoUp";
import '../../containers/Comments/discussion.css';

export default function CommentPage() {
  return (
    <>
      <div className="discussion-panel">
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

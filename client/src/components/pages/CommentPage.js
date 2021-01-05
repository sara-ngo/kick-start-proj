import React from 'react';
import Comments from "./../../containers/Comments";
import Footer from '../footer/Footer';
import GoUp from "./../GoUp";
export default function CommentPage() {
  return (
    <>
      <div className="mt-5">
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

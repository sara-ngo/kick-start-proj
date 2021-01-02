import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Comments from "./../../containers/Comments";

export default function CommentPage() {
  return (
    <>
      <div className="container mt-4">
        <h1 style={{color: "rgb(60, 60, 108)"}}>Disscussion Forum</h1>
        <div className="col-md text-start">
          <Comments />
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="btn rounded" type="button" style={{ backgroundColor: "rgb(60, 60, 108)", color: "white" }}>Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Questions from "./../../containers/Questions";

export default function TakeQuiz() {
  return (
    <>
      <div className="container">
        <div className="col-md text-start">
          <h1 style={{color:"black"}}>some content will be here</h1>
        </div>
        <div className="text-center">
          <Link to="/Quiz">
          <button className="btn rounded" type="button" style={{ backgroundColor: "rgb(60, 60, 108)", color: "white", marginRight:"5px" }}>Let Start</button>
          </Link>
          <Link to="/">
            <button className="btn rounded" type="button" style={{ backgroundColor: "rgb(60, 60, 108)", color: "white" }}>Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

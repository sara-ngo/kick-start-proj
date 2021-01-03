import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Questions from "../../containers/Questions";

export default function Quiz() {
  return (
    <>
      <div className="container">
        <div className="col-md text-start">
          <Questions />
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

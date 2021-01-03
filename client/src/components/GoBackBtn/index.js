import React from 'react';
import { Link } from 'react-router-dom';

const GoBackBtn = () => {
    return (
        <Link to="/">
            <button className="btn rounded" type="button" style={{ backgroundColor: "rgb(60, 60, 108)", color: "white" }}>Go Back</button>
        </Link>
    )
}
export default GoBackBtn;
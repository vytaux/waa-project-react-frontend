import React from "react";
import {Link} from "react-router-dom";
import './Missing.css';

const Missing = () => {

    return (
        <div className="not-found-page">
            <div className="content">
                <h1>Oops!</h1>
                <h2>Sorry, the page you're looking for cannot be found...</h2>
                <Link to='/'>Go Back to Homepage</Link>
            </div>
        </div>
    )
}

export default Missing;
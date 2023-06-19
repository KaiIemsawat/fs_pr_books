import React from "react";
import { Link } from "react-router-dom";

const Navigator = (props) => {
    return (
        <div>
            <h1>Book Shelf</h1>
            <Link className="btn btn-primary" to={"/"}>Home</Link>
            <br />
            <Link className="btn btn-secondary" to={"/addBook/form"}>Add a book to the shelf</Link>
        </div>
    );
};

export default Navigator;

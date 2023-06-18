import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayAll = (props) => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allBooks")
            .then((resp) => {
                console.log(resp);
                setAllBooks(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {allBooks.map((eaBook, index) => (
                <div key={index}>
                    <h2>Title : {eaBook.title}</h2>
                    <h2>Author : {eaBook.author}</h2>
                    <h2>Page : {eaBook.page}</h2>
                    <h2>Description : {eaBook.description}</h2>
                    {eaBook.digitalAvailability ? (
                        <h2>Available for Digital Book</h2>
                    ) : (
                        <h2>Not available for Digital Book</h2>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DisplayAll;

import React, { useState } from "react";
import axios from "axios";

const AddBook = (props) => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        page: 20,
        digitalAvailability: false,
        description: "",
    });
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        //
    };

    const submitHandler = (e) => {
        e.preventDefault();
        //
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title : </label>
                    <input
                        type="text"
                        name="title"
                        onChange={changeHandler}
                        value={book.title}
                    />
                    {errors.title ? (
                        <p className="text-danger">{errors.title.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Author : </label>
                    <input
                        type="text"
                        name="author"
                        onChange={changeHandler}
                        value={book.author}
                    />
                    {errors.author ? (
                        <p className="text-danger">{errors.author.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Page : </label>
                    <input
                        type="number"
                        name="page"
                        onChange={changeHandler}
                        value={book.page}
                    />
                    {errors.page ? (
                        <p className="text-danger">{errors.page.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Description : </label>
                    <textarea
                        type="text"
                        name="description"
                        onChange={changeHandler}
                        value={book.description}
                    />
                    {errors.description ? (
                        <p className="text-danger">
                            {errors.description.message}
                        </p>
                    ) : null}
                </div>
                <div>
                    <label>Digital Version Availability</label>
                    <input
                        type="checkbox"
                        name="digitalAvailability"
                        onChange={changeHandler}
                        value={book.digitalAvailability}
                    />
                    {errors.description ? (
                        <p className="text-danger">
                            {errors.digitalAvailability.message}
                        </p>
                    ) : null}
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddBook;

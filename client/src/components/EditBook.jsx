import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = (props) => {
    const { id } = useParams();
    const nav = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        page: 20,
        description: "",
        digitalAvailability: false,
    });
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        // Need 'if' part to handle true/false checkbox
        if (e.target.name === "digitalAvailability") {
            setBook({
                ...book,
                digitalAvailability: !book.digitalAvailability,
            });
        } else {
            setBook({ ...book, [e.target.name]: e.target.value });
        }
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getOneBook/${id}`)
            .then((resp) => {
                console.log(resp.data);
                setBook(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/editBook/${id}`, book)
            .then((resp) => {
                console.log(resp);
                nav("/");
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };
    return (
        <div>
            <h3>Edit Book's Details</h3>
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
                    <label>Converse Digital Availability</label>
                    <input
                        type="checkbox"
                        name="digitalAvailability"
                        onChange={changeHandler}
                        value={book.digitalAvailability}
                    />
                    {errors.digitalAvailability ? (
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

export default EditBook;

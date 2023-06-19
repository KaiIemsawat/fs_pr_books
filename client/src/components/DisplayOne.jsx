import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const DisplayOne = (props) => {
    const [oneBook, setOneBook] = useState({});
    const { id } = useParams();
    const nav = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getOneBook/${id}`)
            .then((resp) => {
                console.log(resp.data);
                setOneBook(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const deleteHandler = (id) => {
        console.log(id);
        axios
            .delete(`http://localhost:8000/api/deleteBookById/${id}`)
            .then((resp) => {
                nav("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <p>
                <span style={{ fontWeight: "bold" }}>Title : </span>
                {oneBook.title}
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Author : </span>
                {oneBook.author}
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Page : </span>
                {oneBook.page}
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Description : </span>
                {oneBook.description}
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Digital Media : </span>
                {oneBook.digitalAvailability ? (
                    <span>Available for Digital Book</span>
                ) : (
                    <span>Not available for Digital Book</span>
                )}
            </p>
            <br />
            <button
                className="btn btn-danger"
                onClick={() => deleteHandler(oneBook._id)}>
                Delete
            </button>
        </div>
    );
};

export default DisplayOne;

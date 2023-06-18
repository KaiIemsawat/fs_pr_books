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

    return <div>AddBook</div>;
};

export default AddBook;

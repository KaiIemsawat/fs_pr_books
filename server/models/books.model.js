const BookModel = new mongoose.Schma(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minLength: [2, "The title must be at least 2 characters"],
            maxLength: [50, "The title can not exceed 50 characters"],
        },
        page: {
            type: Number,
            required: [true, "Number of page is required"],
            min: [20, "Number can't be less than 20"],
            validate: {
                validator: Number.isInteger,
                message: "Please input whole number",
            },
        },
        digitalAvailability: {
            tybe: Boolean,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minLength: [3, "The description must be 3 characters or longer"],
            maxLength: [500, "The description must not exceed 500 characters"],
        },
    },
    { timestamps: true }
);

const Book = mongoose.model("Book", BookModel);
module.exports = Book;

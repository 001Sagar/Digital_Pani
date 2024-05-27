const Book = require('../models/bookSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//API for AddBook
module.exports.AddBook = async function (req, res) {
    try {
        const { title, author, publish_year } = req.body;
        const book = new Book({ title, author, publish_year });
        const new_book = await book.save();
        console.log(new_book);
        return res.status(200).json({
            status: 200,
            success: true,
            userData: new_book,
            message: "Book Details Saved Successfully"
        })
    } catch (error) {
        console.log("Error in the AddBook", error);
        return res.status(500).json({
            status: 500,
            error: error.message,
            messsage: "Get Server Error"
        })
    }
}

//API for GetBooks
module.exports.getbook = async function (req, res) {
    try {
        const { author, publish_year } = req.body;
        const filter = {}
        if (author) filter.author = author;
        if (publish_year) filter.publish_year = publish_year;

        const book = await Book.find(filter).exec();

        return res.status(200).json({
            status: 200,
            success: true,
            data: book ?? [],
            message: "Get Book Details Successfully"
        })
    } catch (error) {
        console.log("Error in the getbook API ", error);
        return res.status(200).json({ error: error.message })
    }
}


// API for update the Book Details
module.exports.bookupdate = async function (req, res) {
    try {
        const { title } = req.body;
        const book = await Book.findOne({ title: title })
        const updated_data = req.body;
        delete updated_data.book;
        if (!book) {
            return res.status(404).json({ message: "Book is not found" })
        }

        const updatedbook = await Book.findOneAndUpdate(
            { title: title },
            { $set: updated_data },  // Use $set to update fields
            { new: true }  // Use new: true to return the updated document
        );
        return res.status(200).json({
            message: "Updated Successfully",
            updatedbook
        })

    } catch (error) {
        console.log("Error in Updated Book Details ", error);
        return res.status(500).json({ error: error.message })
    }
}

// API for Delete the Book Details
module.exports.deleteBook = async function (req, res) {
    try {
        const { title } = req.body;
        const book = await Book.findOne({ title: title })
        if (!book) {
            return res.status(404).json({ message: "EmailId is not found" })
        }

        const del = await Book.findByIdAndDelete(book._id, {
            id: book._id
        })
        return res.status(200).json({
            message: "Deleted Successfully",
            del
        })
    } catch (error) {
        console.log("Error in Deleting Book ", error);
        return res.status(200).json({ error: error.message });
    }
}
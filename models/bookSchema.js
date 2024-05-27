const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title :{
     type : String,
     required : true,
     index: true,
    },
    author : {
        type : String,
        required : true,
        index: true,
    },
    publish_year : {
        type : String,
        required : true,
    },

} , {
    timestamps : true
})

const book = new mongoose.model('Book', BookSchema);
module.exports = book;
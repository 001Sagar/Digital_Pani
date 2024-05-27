const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username :{
      type : String,
      required : true,
      unique : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true,
    },
    phoneNumber :{
        type : String,
        required : true,
        unique : true
    }
} , {
    timestamps : true
})

const user = new mongoose.model('user_details' ,UserSchema)


module.exports = user
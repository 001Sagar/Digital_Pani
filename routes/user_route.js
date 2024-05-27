const route = require('express').Router();

const user = require('../controllors/user_controllor.js');
const jwt = require('../utility/jsonwebtoken.js');
const book = require('../controllors/book_controllors.js');


// User CRUD API's
route.post('/SignUp', user.SignUp);
route.get('/login', user.login);
route.put('/updatepassword', jwt.authenticate, user.updatepassword);
route.delete('/delete_user', jwt.authenticate, user.delete);

// Book CRUD API's
route.post('/BookAdd', jwt.authenticate, book.AddBook);
route.get('/getBook', jwt.authenticate, book.getbook);
route.put('/updateBook', jwt.authenticate, book.bookupdate)
route.delete('/deletBook', jwt.authenticate, book.deleteBook)

module.exports = route
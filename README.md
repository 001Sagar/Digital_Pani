# BOOK Management System RESTful API

`Book Management System` This repository contains the source code for a RESTful API built for a Book Management System using Node.js, JavaScript, MongoDB ans Expressjs. The goal of this project is to provide a well-structured backend API for managing tasks, enabling users to create, read, update, and delete .books

## Installation

Get started quickly by installing the package using npm:
npm install


### Features :

`USER CRUD Operations`: Users can perform the following operations on tasks:
User Can SignUP
User can login by emailId and Password
User can Update his Details
User Can Delete the Account


`Book CRUD Operations`: Users can perform the following operations on tasks:
Create a new Book
Retrieve Book details by author, publish_year
Update Book information
Delete a Book


### Database MongoDB: 
Tasks are stored in a MongoDB database, allowing for efficient data management and retrieval.

### Authroization
For Autthorization , I have Used `JSONWEBTOKEN`, whch is create on login and authorized the user in further Actions taken by user.


### API Documentation :
For detailed information on how to use the API, refer to the API documentation. You can access the documentation at: `http://localhost:3000/docs`


### start :
You can start the server by using this command `npm start`

## License
node-cron is under [ISC License](https://github.com/001Sagar/Task_Management_System/blob/master/LICENSE.md).

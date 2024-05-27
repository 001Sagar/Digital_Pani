const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Connect to MongoDB Atlas cluster
const username = encodeURIComponent('Sagar');
const password = encodeURIComponent('Sagar@9760');
const hostname = 'cluster0.ozi7tg0.mongodb.net';
const dbName = 'Digital_Pani'; // Replace 'yourDatabaseName' with your actual database name

const uri = `mongodb+srv://${username}:${password}@${hostname}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = `mongodb://127.0.0.1:27017/test`
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB Atlas cluster', uri);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB:'));
db.once('open', () => {
    console.log('Server is connected to MongoDB::Database');
});

module.exports = db;
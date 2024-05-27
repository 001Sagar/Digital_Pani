const { error } = require('console');
const express = require('express');
const app = express();
const port = 8000 || process.env.PORT;

app.get('/', (req,res) =>{
    res.send("<h1>Yeah !Server is Run</h1>")
})

// Using BodyParse
app.use(express.json());
app.use(express.urlencoded({extended : true}))


// Connect with DataBase
const db = require('./config/mongoose.js')


// Require the Routes
const route = require('./routes/user_route.js')
app.use('/api', route);


app.listen(port , (err) =>{
    if(err){
        console.log("Error in Run the Server ", ere);
    }
    console.log(`Server is Run on Port :: ${port}`)
})

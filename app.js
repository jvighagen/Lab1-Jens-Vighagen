
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Post = require('./models/Post');
require('dotenv/config');

// middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const userRoute = require('./routes/user');
app.use('/api/users', userRoute);


// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => { console.log("Connected to DB!");
});



app.listen(3000, () => {
    console.log("listening to port 3000");
});


// mongodb+srv://Jvighagen:<password>@jensdb.vobqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
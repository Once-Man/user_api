const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>(console.log(`DB is connected at ${DB_URL}`)));

app.use(userRoutes);

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on ${PORT}`);
});




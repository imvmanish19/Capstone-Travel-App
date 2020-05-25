const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let projectData = {};

//Instantaiation of express class

const app = express();

app.use(express.static('src'));

//Setting up middlewares

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.sendFile('src/client/views/index.html');
});

app.post('/', (req,res) => {
    // const temperature = req.body.temp;
    // const summary = req.body.summary;
    // const data = {
    //     temperature: temperature,
    //     summary: summary
    // };
    // projectData = data;
    // res.send(projectData);
    res.send('POST Request');
});



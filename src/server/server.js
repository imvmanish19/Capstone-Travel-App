const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Instantaiation of express class

const app = express();

app.use(express.static('dist'));

//Setting up middlewares

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname +'/../..'+'/dist'});
});

app.post('/', (req,res) => {
    res.send('POST Request');
});

const port = 3002;

app.listen(port, () => {
    console.log('Server started listening at port '+ port)
});

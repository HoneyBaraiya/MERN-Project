const dotenv = require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
require('./conn/conn');

const express = require('express');
const app = express();
app.use(express.json());

// get routes
const route=require('./router/routes')

const port = process.env.PORT;

app.use('/',route);


app.listen(port, () => {
    console.log(`Listening from port ${port}`);
});


const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:"./config.env"})
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(require('./routes/routes'));

//mongodb connection

const con = require("./db/connection.js")
con.then(db =>{
    if(!db) return process.exit(1)
    app.listen(PORT, () =>{
    console.log(`Server started at PORT ${PORT}`);
    })
    app.on('error', err => console.log(`Failed to make HTTP request ${err}`));
}).catch(err => `Connection failed ${err}`);
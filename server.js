const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const home = require('./model/home');

require('ejs');

/********** VARIABLES **********/
let port = process.env.PORT ? process.env.PORT : 3017;

/*********** DB CONNECTION **********/
const db = mysql.createConnection({
    host: 'localhost', // or '127.0.0.1'
    port: 3306,
    database: 'todo',
    user: 'root', // TBD: create new, less powerful user
    password: ''
})

db.connect(err => {

    if (err) {
        throw(err)
    }

    console.log('🚨 Connection to database established 🚨');

})

/***** CREATE THE SERVER ******/
const app = express();

/***** VARIABLES OF EXPRESS ******/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

/******* ROUTING *********/
// GET - HTTP method, that asks to bring some
// data or page, sometimes, in accordance to parameters
app.get('/',home.getSmallHomePage);

/*********LISTENER *********/
app.listen(port, () => {

    console.log(`Listening on the port ${port}`)

})
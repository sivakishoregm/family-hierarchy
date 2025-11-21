const  express = require('express');
const app =  express();
const personRoute = require('./src/routes')
require('dotenv').config();
const db = require('./src/config/dbconnect')

app.use(express.urlencoded({extended: false}))

db(process.env.DB_URI);
app.use('/person', personRoute)

app.listen('3000',()=> {
    console.log("webserver started!")

})
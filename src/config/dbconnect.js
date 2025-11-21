const mongoose = require('mongoose')

const db = (uri)=>{
    mongoose.connect(uri)
    .then(()=> {
        console.log("connected to DB");
    })
    .catch((err)=> {
        console.log("failed to connect DB ", err.errorResponse.msg)
    })
}

module.exports = db;


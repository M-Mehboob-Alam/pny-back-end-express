const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = async() =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log('connection successful!'))
    .catch((error)=> {
        console.log('connection error');  
        console.log(error.message);      
    });

};

module.exports = dbConnect;
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res)=>{
    console.log(`server is started ${PORT}`);
});

const dbConnect = require('./config/Database');
dbConnect();
// cors issues 
app.use(cors());
// importing routes 
const registerUser = require('./routes/user');
const createProduct = require('./routes/product');
// middleware parsing body 
app.use(express.json());
// route mounting 
app.use('/api/v1',registerUser);
app.use('/api/v1',createProduct);



app.get('/', (req, res)=>{
    res.status(200).json({
        success:true,
        message:`<h1>Welcome To Ecommerce</h1>`,
    });
})

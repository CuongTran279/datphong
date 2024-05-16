const express = require('express');
require('dotenv').config();
const cors = require('cors');
import initRoutes from './src/routes'
import connect  from './src/config/connect';

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST","GET","PUT","DELETE"]
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

initRoutes(app)
connect();

const port = process.env.PORT || 8888;
const listener = app.listen(port,()=>{
    console.log(`Server is running ${listener.address().port}`);
})
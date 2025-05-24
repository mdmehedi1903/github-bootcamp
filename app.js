const express = require("express");
const router = require("./src/routes/api");
const app = express();

// security middleware import
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');

// request rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 500,
    message: { error: 'Too many requests, please try again later.' }
})


// security middleware implement
app.use(limiter)
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());




// router
app.use('/api/v1', router)

//undefined routes ===> use this in newer version
app.use((req,res)=>{
    res.status(404).json({status:"failed", data: "404 not found"})
})

//old: 
// app.use("*",(req,res)=>{
//     res.status(404).json({status:"failed", data: "404 not found"})
// })


module.exports = app;
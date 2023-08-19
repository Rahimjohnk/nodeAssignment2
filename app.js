// console.log("Rahim");
// npm init
// npm i nodemon --save-dev
// npm i --seve express

// const http = require('http');
const express = require('express');
const app = express();
app.use('/users',(req, res, next)=>{
    // console.log("server starting 0");
    // next();
    res.send(`
    <h1>users</h1>
    `);
});
app.use('/', (req, res, next)=>{
    // console.log("server starting 0");
    // next();
    res.send(`
    <h1>Rahimjohn</h1>
    `);
});
// app.use((req, res, next)=>{
//     console.log("server starting 1");
// });
console.log("server starting");

// const server = http.createServer(app);
// server.listen(3000);
// or
app.listen(3000);
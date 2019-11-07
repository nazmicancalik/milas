const express = require('express');
const app = express();
const path = require('path');

require('./socket');

app.use(express.static(path.join(__dirname,'public')));

app.get('*',function (req,res) {
    // res.sendFile(path.join(__dirname,'public','index.html'));    
});

app.listen(3002, ()=> {
    console.log("Server listening on port 3002...");
});
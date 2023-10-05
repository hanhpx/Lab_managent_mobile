const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    port:3306,
    database:'lab_management_db'
});

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
});

db.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/data',function(req,res){
    db.query('select * from area', function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});
const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'lab_management_db'
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
});

db.connect(function (error) {
    if (error) console.log(error);
    else console.log("connected");
});

app.get('/dataArea', (req, res) => {
    db.query('select * from area', (error, result) => {
        if (error) console.log(error);
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/dataArea', (req, res) => {
    console.log(req.body);
    var data = {
        Area_Name: req.body.Area_Name,
        Area_ID: req.body.Area_ID,
        Area_Size: req.body.Area_Size,
        Area_Unit: req.body.Area_Unit,
        Area_Type: req.body.Area_Type,
        Area_Locations: req.body.Area_Locations
    };
    db.query('insert into area set ?', data, (error, result) => {
        if (error) console.log(result);
        req.send({
            Area_Name: req.body.Area_Name,
            Area_ID: req.body.Area_ID,
            Area_Size: req.body.Area_Size,
            Area_Unit: req.body.Area_Unit,
            Area_Type: req.body.Area_Type,
            Area_Locations: req.body.Area_Locations
        });
    });
});

app.get('/dataMaterial', (req, res) => {
    db.query('select * from material', (error, result) => {
        if (error) console.log(error);
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/dataMaterial', (req, res) => {
    console.log(req.body);
    var data = {
        Meterial_ID: req.body.Meterial_ID,
        Category: req.body.Category,
        Name: req.body.Name,
        Price: req.body.Price,
        Proceduced_By: req.body.Proceduced_By,
        Quantity: req.body.Quantity,
        Additional_Notes: req.body.Additional_Notes,
        Unit: req.body.Unit,
        Expiration_Date: req.body.Expiration_Date
    };
    db.query('insert into material set ?', data, (error, result) => {
        if (error) console.log(result);
        req.send({
            Meterial_ID: req.body.Meterial_ID,
            Category: req.body.Category,
            Name: req.body.Name,
            Price: req.body.Price,
            Proceduced_By: req.body.Proceduced_By,
            Quantity: req.body.Quantity,
            Additional_Notes: req.body.Additional_Notes,
            Unit: req.body.Unit,
            Expiration_Date: req.body.Expiration_Date
        });
    });
});

app.get('/dataPlant', (req, res) => {
    db.query('select * from plant', (error, result) => {
        if (error) console.log(error);
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/dataPlant', (req, res) => {
    console.log(req.body);
    var data = {
        Plant_Name: req.body.Plant_Name,
        Plant_ID: req.body.Plant_ID,
        Scientific_Name: req.body.Scientific_Name,
        Plant_Desciption: req.body.Plant_Desciption,
        Image: req.body.Image
    };
    db.query('insert into plant set ?', data, (error, result) => {
        if (error) console.log(result);
        req.send({
            Plant_Name: req.body.Plant_Name,
            Plant_ID: req.body.Plant_ID,
            Scientific_Name: req.body.Scientific_Name,
            Plant_Desciption: req.body.Plant_Desciption,
            Image: req.body.Image
        });
    });
});

app.get('/dataTask', (req, res) => {
    db.query('select * from tasks', (error, result) => {
        if (error) console.log(error);
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/dataTask', (req, res) => {
    console.log(req.body);
    var data = {
        Task_ID: req.body.Task_ID,
        Task_Category: req.body.Task_Category,
        Title: req.body.Title,
        Description: req.body.Description,
        Priority: req.body.Priority,
        Due_Date: req.body.Due_Date,
        Status: req.body.Status,
        Assigned_To: req.body.Assigned_To,
        Culture_Plan_ID: req.body.Culture_Plan_ID
    };
    db.query('insert into taks set ?', data, (error, result) => {
        if (error) console.log(result);
        req.send({
            Task_ID: req.body.Task_ID,
            Task_Category: req.body.Task_Category,
            Title: req.body.Title,
            Description: req.body.Description,
            Priority: req.body.Priority,
            Due_Date: req.body.Due_Date,
            Status: req.body.Status,
            Assigned_To: req.body.Assigned_To,
            Culture_Plan_ID: req.body.Culture_Plan_ID
        });
    });
});

app.get('/dataUser', (req, res) => {
    db.query('select * from users', (error, result) => {
        if (error) console.log(error);
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/dataUser', (req, res) => {
    console.log(req.body);
    var data = {
        User_ID: req.body.User_ID,
        User_Name: req.body.User_Name,
        User_Password: req.body.User_Password,
        Full_Name: req.body.Full_Name,
        Phone_Number: req.body.Phone_Number,
        Is_Admin: req.body.Is_Admin,
        email: req.body.email
    };
    db.query('insert into area users ?', data, (error, result) => {
        if (error) console.log(result);
        req.send({
            User_ID: req.body.User_ID,
            User_Name: req.body.User_Name,
            User_Password: req.body.User_Password,
            Full_Name: req.body.Full_Name,
            Phone_Number: req.body.Phone_Number,
            Is_Admin: req.body.Is_Admin,
            email: req.body.email
        });
    });
});
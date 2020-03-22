const express = require('express');
const mysql = require('mysql');
var bodyp = require('body-parser');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodedb'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

app.use(bodyp.urlencoded({ extended: true })); 



app.post('/myaction', function(req, res) {

});


app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE nodetable(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(' table created...');
    });
});


    
    

app.post('/adddata', (req, res) => {
	 var titl = req.body.name;
	 var book= req.body.phone;
	 console.log(titl);
    let post = {title:titl, body:book};
    let sql = 'INSERT INTO nodetable SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.redirect('https://www.youtube.com/');
        
    });
});

// Select posts
app.get('/getdata', (req, res) => {
    let sql = 'SELECT * FROM nodetable';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});


app.listen('2000', () => {
    console.log('Server started on port 2000');
});
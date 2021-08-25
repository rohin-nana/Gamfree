const express = require('express');
const bodyParser = require('body-parser');
const corse = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host     : 'api-database.cnld82kz5dpe.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'rohinnana',
    port     : 3306,
    database: "Free_Games"
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(corse());

app.get('/api/retrieve', (req, res) => {
    const sql = "SELECT * FROM Games";
	db.query(sql, (err, result) => {
		res.send(result)
	});
});

app.listen(3001, () =>{
    console.log('listening on port 3001');
})
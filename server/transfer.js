var mysql = require('mysql')

var db = mysql.createConnection({
    host     : 'api-database.cnld82kz5dpe.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'rohinnana',
    port     : 3306,
    database: "Free_Games"
})

var gameName = "defualtName";
var gameCost = "defaultCost";

const fetch = require("node-fetch");
fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&output=json&upperPrice=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "13431d2bacmshc789064a27013cfp1a1a5ejsn5477790ae001",
		"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
    db.connect(err => {
        if (err) throw err;
        console.log("MySQL connected")
        var sqlDelete = "DELETE FROM Games";
            db.query(sqlDelete, function (err, result) {
                if (err) throw err;
                console.log("Entry Made");
        });
        for (i = 0; i < response.length; i++){
            gameName = response[i].title
            gameCost = response[i].normalPrice
            var sqlAdd = "INSERT INTO Games (Game_Name, Game_Cost) VALUES ('" + gameName + "', " + gameCost + ")";
            db.query(sqlAdd, function (err, result) {
                if (err) throw err;
                console.log("Entry Made");
            });
        }
        db.end();
    });
})
.catch(err => {
	console.error(err);
});
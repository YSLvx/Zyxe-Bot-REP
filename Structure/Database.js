const mysql = require("mysql")
const Database = new mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Pluton Protect"
})

Database.connect(function(err) {

    if(err) throw err;
    console.log("La base de données a bien été chargée.")
})

module.exports = Database;
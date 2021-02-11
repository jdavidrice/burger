// Set up MySQL connection.
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
  });
}
// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  };
  console.log(`Connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
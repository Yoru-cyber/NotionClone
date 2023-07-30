const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "notes",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Conectado");
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/listas", (req, res) => {
  
  connection.query("SELECT * FROM listas", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
     return result;
     
  });
 
});

app.get("/apiResponseTest", (req, res) => {
  res.json({ message: "Hola desde el servidor" });
  res.end();
});

app.listen(port, () => {
  console.log(`A la escucha en puerto ${port}`);
});

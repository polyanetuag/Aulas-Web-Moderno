const bodyParser = require("body-parser");
const express = require("express");

const app = express();

//middlewares
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//requisições

app.get("/teste", (req, res) => res.send("OK"));

app.listen(8080, () => console.log("Executando..."));

import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from "mysql2";
import "dotenv/config";
import log from "./assets/log";
const db_password = process.env.PASSWORD || "pain";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

log("Connecting to MySQL");

let dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: db_password,
  database: "testdb",
});

dbConnection.connect((err) => {
  if (err) throw err;
  log("Connected to DB!");
});

app.get("/users", (req: Request, res: Response) => {
  dbConnection.query("SELECT * FROM users", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  let id = req.params.id;
  dbConnection.query(
    `SELECT * FROM users WHERE id=${id}`,
    (err, result, fields) => {
      if (err) throw err;
      if (result.toString().length <= 0) res.send({ error_code: 404 });
      res.send(result);
    }
  );
});




app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

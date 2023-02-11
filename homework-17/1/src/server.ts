import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from "mysql2";
import "dotenv/config";
import log from "./assets/log";
import { BlogPost } from "./assets/types/types";
import {
  BlogCommentSchema,
  BlogContentsSchema,
  BlogPostSchema,
} from "./assets/types/const";
import { ZodError } from "zod";
const db_password = process.env.PASSWORD || "pain";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

let dbCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: db_password,
  database: "testdb",
});

dbCon.connect((err) => {
  if (err) throw err;
  log("Connected to DB!");
});

app.get("/", (req: Request, res: Response) => {
  res.send(`Available end points :
  <br/> - /Users
  <br/> - /Posts
  <br/> - /Comments
  `);
});

app.get("/users", (req: Request, res: Response) => {
  dbCon.query("SELECT * FROM users", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  let id = req.params.id;
  if (id && id !== "undefined") {
    dbCon.query(`SELECT * FROM users WHERE id=${id}`, (err, result, fields) => {
      if (err) throw err;
      if (result.toString().length <= 0) res.sendStatus(404);
      else res.json(result);
    });
  } else res.sendStatus(404);
});

app.get("/posts", (req: Request, res: Response) => {
  dbCon.query(
    `SELECT
    blog_posts.id         AS id,
    blog_posts.author_id  AS authorId,
    blog_contents.title   AS title,
    blog_contents.excerpt AS excerpt,
    blog_contents.text    AS text,
    blog_contents.image   AS image
    
    FROM blog_posts

    INNER JOIN
    blog_contents ON blog_posts.content_id=blog_contents.id`,
    (err, result, fields) => {
      if (err) throw err;
      if (result.toString().length <= 0) res.send({ error_code: 404 });
      res.send(result);
    }
  );
});

app.get("/posts/:id", (req: Request, res: Response) => {
  let id = req.params.id;
  if (id) {
    dbCon.query(
      `SELECT
    blog_posts.id         AS id,
    blog_posts.author_id  AS authorId,
    blog_contents.title   AS title,
    blog_contents.excerpt AS excerpt,
    blog_contents.text    AS text,
    blog_contents.image   AS image
    
    FROM blog_posts

    INNER JOIN
    blog_contents ON blog_posts.content_id=blog_contents.id

    WHERE blog_posts.id=${id}`,
      (err, result, fields) => {
        if (err) throw err;
        if (result.toString().length <= 0) res.send({ error_code: 404 });
        res.send(result);
      }
    );
  } else res.send({ error_code: 404 });
});

app.get("/comments", (req: Request, res: Response) => {
  let blogId = req.query.blogId;

  if (blogId) {
    dbCon.query(
      `SELECT * FROM blog_comments WHERE blog_id=${blogId}`,
      (err, result, fields) => {
        if (err) throw err;
        if (result.toString().length <= 0) res.send([]);
        else res.send(result);
      }
    );
  } else {
    dbCon.query("SELECT * FROM blog_comments", (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    });
  }
});

app.post("/comments", (req: Request, res: Response) => {
  let x = req.body;
  try {
    let { blog_id, author_id, text } = BlogCommentSchema.parse(x);
    dbCon.query(
      `INSERT INTO blog_comments (blog_id, author_id, text) VALUES (${blog_id}, ${author_id}, '${text}');`,
      (err, result, fields) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (e: any) {
    log("Probably not valid data:", e);
    res.sendStatus(403);
  }
});

app.post("/posts", (req: Request, res: Response) => {
  try {
    let { title, excerpt, text, image, author_id } = BlogPostSchema.parse(
      req.body
    );
    dbCon.query<mysql.ResultSetHeader>(
      `INSERT INTO blog_contents (title, excerpt, text, image)
                 VALUES ('${title}','${excerpt}','${text}','${image}');`,
      (err, result, fields) => {
        if (err) throw err;
        dbCon.query(
          `INSERT INTO blog_posts (content_id, author_id)
              VALUES (${result.insertId}, ${author_id});`,
          (err, result, fields) => {
            if (err) throw err;
            res.send(result);
          }
        );
      }
    );
  } catch (e: any) {
    log("Probably not valid data:", e);
    res.sendStatus(403);
  }
});

app.put("/posts/:id", (req: Request, res: Response) => {
  log(req.body);
  res.sendStatus(404);
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

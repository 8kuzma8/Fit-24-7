import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/submit", (req, res) => {
  res.render("form.ejs");
});

app.post("/submit2", (req, res) => {
  const text = `Name:${req.body.name}; Email:${req.body.email}; Phone:${req.body.phone}; Message:${req.body.message}`;
  fs.writeFile('output.txt', text, (err) => {
      if (err) throw err;
      console.log('Файл успешно сохранен.');
  });
   res.render("thank.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

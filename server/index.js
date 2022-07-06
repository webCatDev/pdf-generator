const path = require("path");
const fsPromises = require("fs").promises;
const express = require("express");
const app = express();
const pdf = require("html-pdf");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const generateHTML = require("./generateHTML");

app.use(cors());
app.use(express.static("/image"))
app.use(express.json());

app.post("/create-pdf", async (req, res) => {
  const id = uuid();
  pdf
    .create(generateHTML(req.body))
    .toFile(path.join(__dirname, "pdf", `${id}.pdf`), (err) => {
      if (err) res.send(Promise.reject());
      res.send(id);
    });
});

app.get("/fetch-pdf/:id", async (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, "pdf", `${id}.pdf`);
  res.setHeader("Content-Type", "application/octet-stream; charset=utf-8");
  res.setHeader("Content-Disposition", 'attachment; filename="newPDF.pdf"');
  res.sendFile(filePath, async () => {
    try {
      await fsPromises.unlink(filePath);
    } catch (err) {
      console.log(err);
    }
     
   });
});

app.all("*", (req, res) => {
  res.status(404).send("Üzgünüz. Bu sayfa henüz oluşturulmadı.");
});

app.listen(5000);

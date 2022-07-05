const path = require('path')
const express = require("express");
const app = express();
const pdf = require("html-pdf");
const cors = require("cors");

var whitelist = ["http://127.0.0.1:3000", "http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());

app.post("/create-pdf", async (req, res) => {
  console.log(req.body);
  pdf
    .create(`<h1 style="color: red; font-size: 4rem">${req.body.text}</h1>`)
    .toFile("./newPDF.pdf", async (err) => {
      if (err) res.send(Promise.reject());
      res.send(Promise.resolve())
    })

});

app.get('/fetch-pdf', (req, res) => {
    res.setHeader("Content-Type" , "application/octet-stream; charset=utf-8")
    res.setHeader("Content-Disposition", 'attachment; filename="newPDF.pdf"')
    res.sendFile(path.join(__dirname, "newPDF.pdf"));
})

app.listen(5000);

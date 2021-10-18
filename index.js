// This route contains a simple version of the first Node Website rewritten using Express


const express = require('express');
const app = express();

const http = require("http");
const path = require("path");


app.use('/css', express.static('css'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get("/contact-me",(req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/404.html'));
});

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
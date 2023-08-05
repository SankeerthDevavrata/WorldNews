//jshint esversion:6

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config()
const port=3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, function() {
  console.log("server started in the port 3000")
})

app.use(express.static("public"));

app.get("/", function(req, res) {
  const query = "india";
  const NewsAPI = require('newsapi');
  const secretAPI=process.env.apiKEY;
  const newsapi = new NewsAPI(secretAPI);
  newsapi.v2.everything({
    q: query,
    language: 'en',
    sortBy: 'relevancy'
  }).then(response => {
    var apiData = response.articles;
    res.render("list", {
      apiData: apiData
    });
  });

})


app.post("/", function(req, res) {
  const query = req.body.newsInput;
  const NewsAPI = require('newsapi');
    const secretAPI=process.env.apiKEY;
  const newsapi = new NewsAPI(secretAPI);
  newsapi.v2.everything({
    q: query,
    language: 'en',
    sortBy: 'relevancy'
  }).then(response => {
    var apiData = response.articles;
    res.render("list", {
      apiData: apiData
    });
  });

})

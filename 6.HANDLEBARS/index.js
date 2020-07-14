const express = require("express");
var exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const config = require("./config");

// Configuring HandleBars
app.set("views", path.join(__dirname, "app/views"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home", { name: "Home" });
});

app.get("/about", function (req, res) {
  res.render("about", { name: "About Us" });
});

app.get("/service", function (req, res) {
  res.render("about", { name: "Service" });
});

app.get("/contact", function (req, res) {
  res.render("about", { name: "Contact" });
});

app.all("*", function (req, res) {
  res.render("error", { name: "Contact" });
});

// Running App on port based on NODE_ENV
app.listen(config.port, () =>
  console.log(`App listening on port ${config.port}!`)
);

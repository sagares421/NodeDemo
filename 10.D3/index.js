const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

const d3nBar = require("./charts/bar/Chart");
const d3nBarData = require("./charts/bar/data.json");

const d3nPie = require("./charts/pie/pieChart");
const d3nPierData = require("./charts/pie/data.json");

app.get("/bar", (req, res) =>
  res.send(d3nBar({ data: d3nBarData }).svgString())
);

app.get("/pie", (req, res) =>
  res.send(d3nPie({ data: d3nPierData }).svgString())
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

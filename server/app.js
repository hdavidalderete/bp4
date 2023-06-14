const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Import routings
const clientRoutes = require("./router/client");

// // Configure body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Header http
app.use(cors());

// // Configure Routes
app.use("/api/client", clientRoutes);

module.exports = app;

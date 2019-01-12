const express = require("express");

const bodyParser = require("body-parser");
const passport = require("./config/passport")();
const userRoutes = require("./routes/user");
const jwt = require("jsonwebtoken");

// controllers
const app = express();

// middleware
app.use(parser.json());
app.use(passport.initialize());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/files", express.static("files"));

const port = 3001;

// server connection
app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");

const parser = require("body-parser");
const passport = require("./config/passport")();

// controllers
const app = express();

// middleware
app.use(parser.json());
app.use(passport.initialize());
app.use(express.static("public"));

// routes
// app.use('/api/dogs', dogController)
// app.use('/api/dogs', dogController)
// app.use('/api/dogs', dogController)
// app.use('/api/dogs', dogController)

const port = 3001;

// server connection
app.listen(port, () => console.log(`Listening on port ${port}`));

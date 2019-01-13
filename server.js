const express = require('express');

const parser = require('body-parser')
const passport = require('./config/passport')()

// controllers


const app = express()

// middleware
app.use(parser.json())
app.use(passport.initialize())
app.use(express.static('public'));

app.use('/files', express.staic('files'))

// routes
// app.use('/api/dogs', dogController)
// app.use('/api/dogs', dogController)
// app.use('/api/dogs', dogController)
// app.use('/api/dogs', dogController)



// server connection
app.listen(3001, () => console.log('Listening on port 3001 :)'))
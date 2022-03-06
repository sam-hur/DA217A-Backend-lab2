// imports
const express = require('express');
const open = require('open');
const axios = require('axios').default;
const morgan = require('morgan');
const api = require('./routes/api');
const app = express();

// ------------------------  HTML button
//environment
const PORT = process.env.PORT || 13455;
app.use('/api', api); // prefix with api, and use api.js
app.use(express.json()); // parses incoming requests with JSON payloads.
app.use(express.static('public'));  // render static files.
app.use(express.urlencoded({
    extended: true
}))
// Middleware Morgan
app.use(morgan('dev')); // shows when diff endpoints are hit


//------LISTEN verb------
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
    open(`http://localhost:${PORT}`);
});

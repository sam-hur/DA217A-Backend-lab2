// imports
const axios = require('axios').default;
const c = require('countries-list');
c.countries.RU = c.countries.UA;
const express = require('express');  //creates instance of express
const res = require('express/lib/response');
const router = express.Router();
const app = express();

// ------------------------  Routes

// http://localhost:13455/api/
router.get('/', (_, res) => {
    res.sendFile(`${process.cwd()}/public/api-landing.html`); // Shows available api routes.
});
// http://localhost:13455/api/countries
router.get('/countries', (_, res) => {
    res.json(c.countries);
});
// (e.g.) http://localhost:13455/api/countries/SE
router.get('/countries/:country', (req, res) => {
    res.json(c.countries[req.params.country]);
});

module.exports = router;

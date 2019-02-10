const express = require('express');
const https = require('https');
const axios = require('axios');
const json = require('circular-json');

const User = require('../models/user');

const router = express.Router();

router.get("/getinfocus", (req, res, next) => {
    axios.get("https://api.iextrading.com/1.0/stock/market/list/infocus")
    .then(response => {
        res.status(200).send(json.stringify(response.data));
    })
    .catch(err => {
        console.log(err);
    });
});

router.get("/getgainers", (req, res, next) => {
  axios.get("https://api.iextrading.com/1.0/stock/market/list/gainers")
    .then(response => {
      res.status(200).send(json.stringify(response.data));
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/getlosers", (req, res, next) => {
  axios.get("https://api.iextrading.com/1.0/stock/market/list/losers")
    .then(response => {
      res.status(200).send(json.stringify(response.data));
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/test", (req, res, next) => {
  axios.get("https://api.iextrading.com/1.0/stock/aapl/chart/1y")
    .then(response => {
      res.status(200).send(json.stringify(response.data));
    })
    .catch(err => {
      console.log(err);
    });
});



module.exports = router;

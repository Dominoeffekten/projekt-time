var express = require('express');
var router = express.Router();
const timeHandler = require("../models/handleTime");
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    h1: 'This is my first site',
  });
});
/* GET time */
router.get('/time',  async function(req, res) { //start login

  res.render('time', { //admin is there
    scriptLink: "./javascripts/time.js",
    h1: "Count down the days",
  });
});
router.post('/time', async function(req, res) { //start login
  console.log(req.body);
  let postTime = await timeHandler.upsertTime(req);
  return res.redirect('/time'); // skip the receipt, return to fp
});
/* Show time */
router.get('/times',  async function(req, res) { //show todo
  let time = await timeHandler.getTime({}, {sort: {created: -1}});
  res.json(time);
});

module.exports = router;

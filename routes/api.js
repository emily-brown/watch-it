var express = require('express');
var router = express.Router();
const axios = require('axios')

require("dotenv").config();

// load .env
require("dotenv").config();

const movieController = require("../controllers/movieController");


// use mongoose
var mongoose = require('mongoose');
//Set up default mongoose connection
// var mongoDB = `mongodb://${process.env.user}:${process.env.password}@${process.env.host}/${process.env.db}`;
// mongoose.connect((process.env.DATABASE_URL || mongoDB), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/3001",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


// Matches with "/api/books"
router.route("/movie/")
  .get(movieController.findAll)
  .post(movieController.create)
  
  
  router.route("/movie/:id")
  .delete(movieController.delete)
  .put(movieController.findOneAndUpdate)

router.get('/movie/:name', function (req, res, next) {
  let url = "https://www.omdbapi.com/?t=" + req.params.name + "&plot=short&apikey=trilogy"
  console.log(url)
  // Make a request
  axios.get(url)
    .then(function (response) {
      // console.log(response)
      res.json(response.data);
    })
});

module.exports = router;

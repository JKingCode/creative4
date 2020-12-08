const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

const User = users.model;
const validUser = users.valid;

const scoreSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    faith: Number,
    hope: Number,
    charity: Number,
    virtue: Number,
    knowledge: Number,
    patience: Number,
    humility: Number,
    diligence: Number,
    obedience: Number,
    lowest: String,
    highest: String,
    total: Number,
    average: Number

});

const Score = mongoose.model('Score', scoreSchema);

/*API Endpoints*/

// create a score
router.post('/', validUser, async (req, res) => {

    score = await Score.findOne({
        user: req.user
      });

      if(score == null){
        console.log(score)
      }
      console.log('highest: ' + req.body.highest);
    score = new Score({
      user: req.user,
      faith: req.body.faith,
      lowest: req.body.lowest,
      highest: req.body.highest,
      total: req.body.total,
      average: req.body.average
    });
    try {
      await score.save();
      return res.send({
        score: score
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

// get last score -- will return the last score from the user
router.get('/', validUser, async (req, res) => {
    let score = null;
    try {
        //console.log(req.user);
        score = await Score.findOne({
          user: req.user
        });
      console.log(score);
      
      return res.send({
        score: score
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

// edit a score
router.put('/', validUser, async (req, res) => {
    if (!req.body.faith || !req.body.total|| !req.body.average) {
      return res.status(400).send({
        message: "please fill in the nessessary information."
      });
    }
    try {
        score = await Score.findOne({
            user: req.user
          });
          console.log(score);
      score.faith = req.body.faith; 
      score.total = req.body.total;
      score.average = req.body.average; 
      score.lowest = req.body.lowest;
      score.highest = req.body.highest;
      await score.save();
      return res.send({
        score: score
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  module.exports = {
    routes: router,
    model: Score,
    valid: validUser
  };
const express = require('express');
const router = express.Router();
const CareerRecommendation = require('../models/CareerRecommendation.models');

// GET all career recommendations
router.get('/', async (req, res) => {
  try {
    const recommendations = await CareerRecommendation.find().populate('user_id career_id');
    res.json(recommendations);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// POST a new career recommendation
router.post('/', async (req, res) => {
  try {
    const { user_id, career_id, score } = req.body;
    let recommendation = new CareerRecommendation({
      user_id,
      career_id,
      score,
    });
    await recommendation.save();
    res.json(recommendation);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

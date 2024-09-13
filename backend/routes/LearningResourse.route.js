const express = require('express');
const router = express.Router();
const LearningResource = require('../models/LearningResource.models');

// GET all learning resources
router.get('/', async (req, res) => {
  try {
    const resources = await LearningResource.find().populate('career_relevance');
    res.json(resources);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

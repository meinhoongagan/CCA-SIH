const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor.models');

// GET all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find().populate('user_id');
    res.json(mentors);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

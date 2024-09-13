const express = require('express');
const router = express.Router();
const MentorshipSession = require('../models/MentorshipSession.models');

// GET all mentorship sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await MentorshipSession.find().populate('mentor_id mentee_id');
    res.json(sessions);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

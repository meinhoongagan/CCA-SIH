const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment.models');

// GET all assessments
router.get('/', async (req, res) => {
  try {
    const assessments = await Assessment.find().populate('user_id');
    res.json(assessments);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// POST a new assessment
router.post('/', async (req, res) => {
  try {
    const { user_id, assessment_type, results } = req.body;
    let assessment = new Assessment({
      user_id,
      assessment_type,
      results,
    });
    await assessment.save();
    res.json(assessment);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

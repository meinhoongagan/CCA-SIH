const express = require('express');
const router = express.Router();
const Career = require('../models/Career.models');

// GET all careers
router.get('/', async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// POST a new career
router.post('/', async (req, res) => {
  try {
    const { title, description, required_skills, education_requirements, salary_range, industry } = req.body;
    let career = new Career({
      title,
      description,
      required_skills,
      education_requirements,
      salary_range,
      industry,
    });
    await career.save();
    res.json(career);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const UserProfile = require('../models/UserProfile.models');

// GET all user profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await UserProfile.find().populate('user_id');
    res.json(profiles);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// POST a new user profile
router.post('/', async (req, res) => {
  try {
    const { user_id, first_name, last_name, date_of_birth, education_level, current_occupation, interests, skills } = req.body;
    let profile = new UserProfile({
      user_id,
      first_name,
      last_name,
      date_of_birth,
      education_level,
      current_occupation,
      interests,
      skills,
    });
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

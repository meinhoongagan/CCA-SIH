const express = require('express');
const router = express.Router();
const User = require('../models/User.models');

// @route   GET /api/users
// @desc    Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/users
// @desc    Create a new user
router.post('/', async (req, res) => {
  const { username, email, password_hash } = req.body;
  try {
    let user = new User({
      username,
      email,
      password_hash,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/users/:id
// @desc    Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/users/:id
// @desc    Update user
router.put('/:id', async (req, res) => {
  const { username, email, password_hash } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, password_hash },
      { new: true }
    );
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json({ msg: 'User removed' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

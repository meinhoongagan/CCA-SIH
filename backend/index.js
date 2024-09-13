const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/db');


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/User.route'));
app.use('/api/user-profiles', require('./routes/UserProfile.route'));
app.use('/api/assessments', require('./routes/Assesment.route'));
app.use('/api/career-recommendations', require('./routes/CareerRecommendation.route'));
app.use('/api/careers', require('./routes/Career.route'));
app.use('/api/learning-resources', require('./routes/LearningResourse.route'));
app.use('/api/mentors', require('./routes/Mentor.route'));
app.use('/api/mentorship-sessions', require('./routes/MentorshipSession.route'));

// Middleware for JSON handling
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
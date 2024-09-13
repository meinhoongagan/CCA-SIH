const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorshipSessionSchema = new Schema({
  mentor_id: { type: Schema.Types.ObjectId, ref: 'Mentor', required: true },
  mentee_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  scheduled_at: { type: Date, required: true },
  duration: { type: Number },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], required: true },
});

module.exports = mongoose.model('MentorshipSession', MentorshipSessionSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  expertise: [String],
  experience_years: { type: Number },
  bio: { type: String },
  availability: { type: Schema.Types.Mixed },
});

module.exports = mongoose.model('Mentor', MentorSchema);

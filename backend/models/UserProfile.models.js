const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_of_birth: { type: Date },
  education_level: { type: String },
  current_occupation: { type: String },
  interests: [String],
  skills: [String],
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);

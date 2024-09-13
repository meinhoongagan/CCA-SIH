const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssessmentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  assessment_type: { type: String, enum: ['personality', 'skills', 'interests'], required: true },
  results: { type: Schema.Types.Mixed },
  taken_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assessment', AssessmentSchema);

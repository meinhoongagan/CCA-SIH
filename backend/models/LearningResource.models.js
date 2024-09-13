const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LearningResourceSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['course', 'webinar', 'article', 'video'], required: true },
  provider: { type: String },
  url: { type: String },
  description: { type: String },
  career_relevance: [{ type: Schema.Types.ObjectId, ref: 'Career' }],
});

module.exports = mongoose.model('LearningResource', LearningResourceSchema);

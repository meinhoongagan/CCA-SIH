const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareerRecommendationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  career_id: { type: Schema.Types.ObjectId, ref: 'Career', required: true },
  score: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CareerRecommendation', CareerRecommendationSchema);

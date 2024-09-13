const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareerSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  required_skills: [String],
  education_requirements: { type: String },
  salary_range: { type: String },
  industry: { type: String },
});

module.exports = mongoose.model('Career', CareerSchema);

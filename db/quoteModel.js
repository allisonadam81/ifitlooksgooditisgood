const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  text: { type: String, required: true, unique: true },
  author: { type: String, required: true }
})

module.exports = mongoose.model('Quote', quoteSchema);
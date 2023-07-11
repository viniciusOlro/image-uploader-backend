const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  buffer: {
    required: true,
    type: Array
  },
  filename: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('Image', dataSchema);
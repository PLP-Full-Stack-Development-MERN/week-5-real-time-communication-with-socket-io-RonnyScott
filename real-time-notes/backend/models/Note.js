const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  content: String,
  roomId: String,
});

module.exports = mongoose.model('Note', noteSchema);
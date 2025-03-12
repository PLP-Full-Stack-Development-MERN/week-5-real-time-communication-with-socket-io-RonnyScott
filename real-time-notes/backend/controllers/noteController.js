const Note = require('../models/Note');

const getNote = async (req, res) => {
  const { roomId } = req.params;
  const note = await Note.findOne({ roomId });
  res.json(note || { content: '', roomId });
};

const saveNote = async (req, res) => {
  const { roomId } = req.params;
  const { content } = req.body;
  let note = await Note.findOne({ roomId });

  if (note) {
    note.content = content;
  } else {
    note = new Note({ content, roomId });
  }

  await note.save();
  res.json(note);
};

module.exports = { getNote, saveNote };
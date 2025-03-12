const express = require('express');
const { getNote, saveNote } = require('../controllers/noteController');
const router = express.Router();

router.get('/:roomId', getNote);
router.post('/:roomId', saveNote);

module.exports = router;
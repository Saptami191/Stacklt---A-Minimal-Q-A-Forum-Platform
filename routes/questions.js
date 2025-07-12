
const express = require('express');
const { getAllQuestions, postQuestion } = require('../controllers/questionController');
const router = express.Router();

router.get('/', getAllQuestions);
router.post('/', postQuestion);

module.exports = router;

const Question = require('../models/Question');

const getAllQuestions = async (req, res) => {
  const questions = await Question.find().sort({ createdAt: -1 });
  res.json(questions);
};

const postQuestion = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newQuestion = new Question({ title, description });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: 'Failed to post question' });
  }
};

module.exports = { getAllQuestions, postQuestion };

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4005;

app.use(cors());
app.use(express.json());

let quizzes = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

// Get all quizzes
app.get('/api/quizzes', (req, res) => {
    res.json(quizzes);
});

// Get a quiz by id
app.get('/api/quizzes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quiz = quizzes.find(q => q.id === id);
    if (quiz) {
        res.json(quiz);
    } else {
        res.status(404).json({ message: "Quiz not found" });
    }
});

// Create a new quiz
app.post('/api/quizzes', (req, res) => {
    const { question, options, answer } = req.body;
    const newQuiz = {
        id: quizzes.length ? quizzes[quizzes.length - 1].id + 1 : 1,
        question,
        options,
        answer
    };
    quizzes.push(newQuiz);
    res.status(201).json(newQuiz);
});

// Update a quiz
app.put('/api/quizzes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { question, options, answer } = req.body;
    const quizIndex = quizzes.findIndex(q => q.id === id);
    if (quizIndex !== -1) {
        quizzes[quizIndex] = { id, question, options, answer };
        res.json(quizzes[quizIndex]);
    } else {
        res.status(404).json({ message: "Quiz not found" });
    }
});

// Delete a quiz
app.delete('/api/quizzes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quizIndex = quizzes.findIndex(q => q.id === id);
    if (quizIndex !== -1) {
        quizzes.splice(quizIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Quiz not found" });
    }
});

app.listen(port, () => {
    console.log(`Quiz server listening at http://localhost:${port}`);
});

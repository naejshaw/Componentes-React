const express = require('express');
const cors = require('cors');
const app = express();
const port = 4006;

app.use(cors());
app.use(express.json());

let rankings = [
    { id: 1, username: "user1", score: 100 },
    { id: 2, username: "user2", score: 90 },
    { id: 3, username: "user3", score: 80 }
];

// Get all rankings
app.get('/api/rankings', (req, res) => {
    res.json(rankings);
});

// Get a ranking by id
app.get('/api/rankings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const ranking = rankings.find(r => r.id === id);
    if (ranking) {
        res.json(ranking);
    } else {
        res.status(404).json({ message: "Ranking not found" });
    }
});

// Create a new ranking
app.post('/api/rankings', (req, res) => {
    const { username, score } = req.body;
    const newRanking = {
        id: rankings.length ? rankings[rankings.length - 1].id + 1 : 1,
        username,
        score
    };
    rankings.push(newRanking);
    res.status(201).json(newRanking);
});

// Update a ranking
app.put('/api/rankings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { username, score } = req.body;
    const rankingIndex = rankings.findIndex(r => r.id === id);
    if (rankingIndex !== -1) {
        rankings[rankingIndex] = { id, username, score };
        res.json(rankings[rankingIndex]);
    } else {
        res.status(404).json({ message: "Ranking not found" });
    }
});

// Delete a ranking
app.delete('/api/rankings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const rankingIndex = rankings.findIndex(r => r.id === id);
    if (rankingIndex !== -1) {
        rankings.splice(rankingIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Ranking not found" });
    }
});

app.listen(port, () => {
    console.log(`Ranking server listening at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4013;

app.use(cors());
app.use(express.json());

let clones = [
    {
        id: 1,
        name: "HBO Max Clone",
        description: "A clone of HBO Max streaming service",
        features: ["Video streaming", "User authentication", "Subscription management"]
    },
    {
        id: 2,
        name: "YouTube Clone",
        description: "A clone of YouTube video platform",
        features: ["Video upload", "Comments", "Likes"]
    }
];

// Get all clones
app.get('/api/clones', (req, res) => {
    res.json(clones);
});

// Get a clone by id
app.get('/api/clones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const clone = clones.find(c => c.id === id);
    if (clone) {
        res.json(clone);
    } else {
        res.status(404).json({ message: "Clone not found" });
    }
});

// Create a new clone
app.post('/api/clones', (req, res) => {
    const { name, description, features } = req.body;
    const newClone = {
        id: clones.length ? clones[clones.length - 1].id + 1 : 1,
        name,
        description,
        features
    };
    clones.push(newClone);
    res.status(201).json(newClone);
});

// Update a clone
app.put('/api/clones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, features } = req.body;
    const cloneIndex = clones.findIndex(c => c.id === id);
    if (cloneIndex !== -1) {
        clones[cloneIndex] = { id, name, description, features };
        res.json(clones[cloneIndex]);
    } else {
        res.status(404).json({ message: "Clone not found" });
    }
});

// Delete a clone
app.delete('/api/clones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cloneIndex = clones.findIndex(c => c.id === id);
    if (cloneIndex !== -1) {
        clones.splice(cloneIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Clone not found" });
    }
});

app.listen(port, () => {
    console.log(`Clone server listening at http://localhost:${port}`);
});

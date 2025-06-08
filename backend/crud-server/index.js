const express = require('express');
const cors = require('cors');
const app = express();
const port = 4002;

app.use(cors());
app.use(express.json());

let tasks = [
    {
        id: 1,
        name: "Sample Task 1",
        description: "This is a sample task",
        completed: false
    },
    {
        id: 2,
        name: "Sample Task 2",
        description: "This is another sample task",
        completed: true
    }
];

// Get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Get a task by id
app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

// Create a new task
app.post('/api/tasks', (req, res) => {
    const { name, description, completed } = req.body;
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        name,
        description,
        completed: completed || false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, completed } = req.body;
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { id, name, description, completed };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

app.listen(port, () => {
    console.log(`CRUD server listening at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4009;

app.use(cors());
app.use(express.json());

let templates = [
    {
        id: 1,
        name: "Basic Template",
        description: "A simple static template",
        components: ["Header", "Footer", "Content"]
    }
];

// Get all templates
app.get('/api/templates', (req, res) => {
    res.json(templates);
});

// Get a template by id
app.get('/api/templates/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const template = templates.find(t => t.id === id);
    if (template) {
        res.json(template);
    } else {
        res.status(404).json({ message: "Template not found" });
    }
});

// Create a new template
app.post('/api/templates', (req, res) => {
    const { name, description, components } = req.body;
    const newTemplate = {
        id: templates.length ? templates[templates.length - 1].id + 1 : 1,
        name,
        description,
        components
    };
    templates.push(newTemplate);
    res.status(201).json(newTemplate);
});

// Update a template
app.put('/api/templates/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, components } = req.body;
    const templateIndex = templates.findIndex(t => t.id === id);
    if (templateIndex !== -1) {
        templates[templateIndex] = { id, name, description, components };
        res.json(templates[templateIndex]);
    } else {
        res.status(404).json({ message: "Template not found" });
    }
});

// Delete a template
app.delete('/api/templates/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const templateIndex = templates.findIndex(t => t.id === id);
    if (templateIndex !== -1) {
        templates.splice(templateIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Template not found" });
    }
});

app.listen(port, () => {
    console.log(`Template server listening at http://localhost:${port}`);
});

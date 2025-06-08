const express = require('express');
const cors = require('cors');
const app = express();
const port = 4019;

app.use(cors());
app.use(express.json());

let pages = [
    {
        id: 1,
        title: "Home",
        content: "Welcome to the CMS Home page."
    },
    {
        id: 2,
        title: "About",
        content: "This is the About page content."
    }
];

// Get all pages
app.get('/api/pages', (req, res) => {
    res.json(pages);
});

// Get a page by id
app.get('/api/pages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const page = pages.find(p => p.id === id);
    if (page) {
        res.json(page);
    } else {
        res.status(404).json({ message: "Page not found" });
    }
});

// Create a new page
app.post('/api/pages', (req, res) => {
    const { title, content } = req.body;
    const newPage = {
        id: pages.length ? pages[pages.length - 1].id + 1 : 1,
        title,
        content
    };
    pages.push(newPage);
    res.status(201).json(newPage);
});

// Update a page
app.put('/api/pages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;
    const pageIndex = pages.findIndex(p => p.id === id);
    if (pageIndex !== -1) {
        pages[pageIndex] = { id, title, content };
        res.json(pages[pageIndex]);
    } else {
        res.status(404).json({ message: "Page not found" });
    }
});

// Delete a page
app.delete('/api/pages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pageIndex = pages.findIndex(p => p.id === id);
    if (pageIndex !== -1) {
        pages.splice(pageIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Page not found" });
    }
});

app.listen(port, () => {
    console.log(`CMS server listening at http://localhost:${port}`);
});

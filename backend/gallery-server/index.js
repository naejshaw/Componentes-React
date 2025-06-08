const express = require('express');
const cors = require('cors');
const app = express();
const port = 4017;

app.use(cors());
app.use(express.json());

let galleryItems = [
    { id: 1, title: "Image 1", url: "https://example.com/image1.jpg" },
    { id: 2, title: "Image 2", url: "https://example.com/image2.jpg" },
    { id: 3, title: "Image 3", url: "https://example.com/image3.jpg" }
];

app.get('/api/gallery', (req, res) => {
    res.json(galleryItems);
});

app.post('/api/gallery', (req, res) => {
    const { title, url } = req.body;
    const newItem = {
        id: galleryItems.length ? galleryItems[galleryItems.length - 1].id + 1 : 1,
        title,
        url
    };
    galleryItems.push(newItem);
    res.status(201).json(newItem);
});

app.delete('/api/gallery/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = galleryItems.findIndex(item => item.id === id);
    if (index !== -1) {
        galleryItems.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.listen(port, () => {
    console.log(`Gallery server listening at http://localhost:${port}`);
});

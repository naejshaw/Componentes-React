const express = require('express');
const cors = require('cors');
const app = express();
const port = 4003;

app.use(cors());
app.use(express.json());

let posts = [
    {
        id: 1,
        author: "Alice",
        content: "Hello world!",
        likes: 0
    },
    {
        id: 2,
        author: "Bob",
        content: "This is a sample post.",
        likes: 0
    }
];

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Get a post by id
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Create a new post
app.post('/api/posts', (req, res) => {
    const { author, content } = req.body;
    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        author,
        content,
        likes: 0
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Like a post
app.post('/api/posts/:id/like', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) {
        post.likes += 1;
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

app.listen(port, () => {
    console.log(`SocialMedia server listening at http://localhost:${port}`);
});

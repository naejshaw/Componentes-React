const express = require('express');
const cors = require('cors');
const { authenticate, verifyToken } = require('./auth');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let blogPosts = [
    {
        id: 1,
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
        author: "Author 1",
        date: "2024-06-01"
    },
    {
        id: 2,
        title: "Second Blog Post",
        content: "This is the content of the second blog post.",
        author: "Author 2",
        date: "2024-06-02"
    }
];

let comments = [
    {
        id: 1,
        postId: 1,
        author: "Commenter 1",
        content: "Great post!",
        date: "2024-06-03"
    }
];

// Authentication endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const token = authenticate(username, password);
    if (token) {
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware to protect routes
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const user = verifyToken(token);
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    req.user = user;
    next();
}

// Get all blog posts
app.get('/api/posts', (req, res) => {
    res.json(blogPosts);
});

// Get a single blog post by id
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Create a new blog post (protected)
app.post('/api/posts', authMiddleware, (req, res) => {
    const { title, content, author, date } = req.body;
    const newPost = {
        id: blogPosts.length ? blogPosts[blogPosts.length - 1].id + 1 : 1,
        title,
        content,
        author,
        date
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

// Update a blog post (protected)
app.put('/api/posts/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, author, date } = req.body;
    const postIndex = blogPosts.findIndex(p => p.id === id);
    if (postIndex !== -1) {
        blogPosts[postIndex] = { id, title, content, author, date };
        res.json(blogPosts[postIndex]);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Delete a blog post (protected)
app.delete('/api/posts/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = blogPosts.findIndex(p => p.id === id);
    if (postIndex !== -1) {
        blogPosts.splice(postIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Get comments for a post
app.get('/api/posts/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const postComments = comments.filter(c => c.postId === postId);
    res.json(postComments);
});

// Add a comment to a post (protected)
app.post('/api/posts/:id/comments', authMiddleware, (req, res) => {
    const postId = parseInt(req.params.id);
    const { author, content, date } = req.body;
    const newComment = {
        id: comments.length ? comments[comments.length - 1].id + 1 : 1,
        postId,
        author,
        content,
        date
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});

app.listen(port, () => {
    console.log(`Blog server listening at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 4008;

app.use(cors());
app.use(express.json());

// Example endpoint to fetch GitHub user info
app.get('/api/github/user/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            return res.status(response.status).json({ message: 'User not found' });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data' });
    }
});

// Example endpoint to fetch GitHub repo info
app.get('/api/github/repos/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            return res.status(response.status).json({ message: 'Repos not found' });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching repos data' });
    }
});

app.listen(port, () => {
    console.log(`SiteApi server listening at http://localhost:${port}`);
});

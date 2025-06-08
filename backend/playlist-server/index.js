const express = require('express');
const cors = require('cors');
const app = express();
const port = 4018;

app.use(cors());
app.use(express.json());

let playlists = [
    {
        id: 1,
        name: "Chill Vibes",
        songs: [
            { id: 1, title: "Song A", artist: "Artist 1" },
            { id: 2, title: "Song B", artist: "Artist 2" }
        ]
    },
    {
        id: 2,
        name: "Workout Mix",
        songs: [
            { id: 3, title: "Song C", artist: "Artist 3" },
            { id: 4, title: "Song D", artist: "Artist 4" }
        ]
    }
];

// Get all playlists
app.get('/api/playlists', (req, res) => {
    res.json(playlists);
});

// Get a playlist by id
app.get('/api/playlists/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const playlist = playlists.find(p => p.id === id);
    if (playlist) {
        res.json(playlist);
    } else {
        res.status(404).json({ message: "Playlist not found" });
    }
});

// Create a new playlist
app.post('/api/playlists', (req, res) => {
    const { name, songs } = req.body;
    const newPlaylist = {
        id: playlists.length ? playlists[playlists.length - 1].id + 1 : 1,
        name,
        songs: songs || []
    };
    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
});

// Update a playlist
app.put('/api/playlists/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, songs } = req.body;
    const playlistIndex = playlists.findIndex(p => p.id === id);
    if (playlistIndex !== -1) {
        playlists[playlistIndex] = { id, name, songs };
        res.json(playlists[playlistIndex]);
    } else {
        res.status(404).json({ message: "Playlist not found" });
    }
});

// Delete a playlist
app.delete('/api/playlists/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const playlistIndex = playlists.findIndex(p => p.id === id);
    if (playlistIndex !== -1) {
        playlists.splice(playlistIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Playlist not found" });
    }
});

app.listen(port, () => {
    console.log(`Playlist server listening at http://localhost:${port}`);
});

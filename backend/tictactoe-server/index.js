const express = require('express');
const cors = require('cors');
const app = express();
const port = 4010;

app.use(cors());
app.use(express.json());

// Simple TicTacToe game state
let gameState = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isDraw: false
};

// Get current game state
app.get('/api/game', (req, res) => {
    res.json(gameState);
});

// Make a move
app.post('/api/game/move', (req, res) => {
    const { index } = req.body;
    if (gameState.winner || gameState.isDraw) {
        return res.status(400).json({ message: 'Game over. Please reset.' });
    }
    if (index < 0 || index > 8 || gameState.board[index]) {
        return res.status(400).json({ message: 'Invalid move' });
    }
    gameState.board[index] = gameState.currentPlayer;
    // Check for winner
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (const combo of winningCombos) {
        const [a,b,c] = combo;
        if (gameState.board[a] && gameState.board[a] === gameState.board[b] && gameState.board[a] === gameState.board[c]) {
            gameState.winner = gameState.currentPlayer;
            return res.json(gameState);
        }
    }
    // Check for draw
    if (!gameState.board.includes(null)) {
        gameState.isDraw = true;
        return res.json(gameState);
    }
    // Switch player
    gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
    res.json(gameState);
});

// Reset game
app.post('/api/game/reset', (req, res) => {
    gameState = {
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        isDraw: false
    };
    res.json(gameState);
});

app.listen(port, () => {
    console.log(`TicTacToe server listening at http://localhost:${port}`);
});

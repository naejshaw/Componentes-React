const express = require('express');
const cors = require('cors');
const app = express();
const port = 4014;

app.use(cors());
app.use(express.json());

let dashboardData = {
    users: 100,
    sales: 5000,
    revenue: 120000,
    activeSessions: 25
};

app.get('/api/dashboard', (req, res) => {
    res.json(dashboardData);
});

app.listen(port, () => {
    console.log(`Dashboard server listening at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4012;

app.use(cors());
app.use(express.json());

// Simple calculator API supporting basic operations
app.post('/api/calculate', (req, res) => {
    const { operation, operands } = req.body;
    if (!operation || !Array.isArray(operands)) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = operands.reduce((a, b) => a + b, 0);
            break;
        case 'subtract':
            result = operands.reduce((a, b) => a - b);
            break;
        case 'multiply':
            result = operands.reduce((a, b) => a * b, 1);
            break;
        case 'divide':
            if (operands.slice(1).includes(0)) {
                return res.status(400).json({ message: 'Division by zero' });
            }
            result = operands.reduce((a, b) => a / b);
            break;
        default:
            return res.status(400).json({ message: 'Unsupported operation' });
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator server listening at http://localhost:${port}`);
});

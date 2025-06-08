const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 4011;

app.use(cors());
app.use(express.json());

const apiKey = "c0b197ed1de5f5db2a3c1241745a50b9";

// Endpoint to get weather data for a city
app.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`);
        if (!response.ok) {
            return res.status(response.status).json({ message: 'City not found' });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data' });
    }
});

app.listen(port, () => {
    console.log(`Weather server listening at http://localhost:${port}`);
});

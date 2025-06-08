const express = require('express');
const cors = require('cors');
const app = express();
const port = 4015;

app.use(cors());
app.use(express.json());

let products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    { id: 3, name: "Product 3", price: 30.0 }
];

let orders = [];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/orders', (req, res) => {
    const order = req.body;
    order.id = orders.length ? orders[orders.length - 1].id + 1 : 1;
    orders.push(order);
    res.status(201).json(order);
});

app.listen(port, () => {
    console.log(`Delivery server listening at http://localhost:${port}`);
});

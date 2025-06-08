const express = require('express');
const cors = require('cors');
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

let bookings = [
    {
        id: 1,
        customerName: "John Doe",
        service: "Haircut",
        date: "2024-06-10",
        time: "10:00"
    },
    {
        id: 2,
        customerName: "Jane Smith",
        service: "Massage",
        date: "2024-06-11",
        time: "14:00"
    }
];

// Get all bookings
app.get('/api/bookings', (req, res) => {
    res.json(bookings);
});

// Get a booking by id
app.get('/api/bookings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const booking = bookings.find(b => b.id === id);
    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ message: "Booking not found" });
    }
});

// Create a new booking
app.post('/api/bookings', (req, res) => {
    const { customerName, service, date, time } = req.body;
    const newBooking = {
        id: bookings.length ? bookings[bookings.length - 1].id + 1 : 1,
        customerName,
        service,
        date,
        time
    };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// Update a booking
app.put('/api/bookings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { customerName, service, date, time } = req.body;
    const bookingIndex = bookings.findIndex(b => b.id === id);
    if (bookingIndex !== -1) {
        bookings[bookingIndex] = { id, customerName, service, date, time };
        res.json(bookings[bookingIndex]);
    } else {
        res.status(404).json({ message: "Booking not found" });
    }
});

// Delete a booking
app.delete('/api/bookings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookingIndex = bookings.findIndex(b => b.id === id);
    if (bookingIndex !== -1) {
        bookings.splice(bookingIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Booking not found" });
    }
});

app.listen(port, () => {
    console.log(`Booking server listening at http://localhost:${port}`);
});

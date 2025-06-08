const express = require('express');
const cors = require('cors');
const app = express();
const port = 4007;

app.use(cors());
app.use(express.json());

let appointments = [
    {
        id: 1,
        clientName: "Alice",
        service: "Consultation",
        date: "2024-06-15",
        time: "10:00"
    },
    {
        id: 2,
        clientName: "Bob",
        service: "Therapy",
        date: "2024-06-16",
        time: "14:00"
    }
];

// Get all appointments
app.get('/api/appointments', (req, res) => {
    res.json(appointments);
});

// Get an appointment by id
app.get('/api/appointments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const appointment = appointments.find(a => a.id === id);
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404).json({ message: "Appointment not found" });
    }
});

// Create a new appointment
app.post('/api/appointments', (req, res) => {
    const { clientName, service, date, time } = req.body;
    const newAppointment = {
        id: appointments.length ? appointments[appointments.length - 1].id + 1 : 1,
        clientName,
        service,
        date,
        time
    };
    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
});

// Update an appointment
app.put('/api/appointments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { clientName, service, date, time } = req.body;
    const appointmentIndex = appointments.findIndex(a => a.id === id);
    if (appointmentIndex !== -1) {
        appointments[appointmentIndex] = { id, clientName, service, date, time };
        res.json(appointments[appointmentIndex]);
    } else {
        res.status(404).json({ message: "Appointment not found" });
    }
});

// Delete an appointment
app.delete('/api/appointments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const appointmentIndex = appointments.findIndex(a => a.id === id);
    if (appointmentIndex !== -1) {
        appointments.splice(appointmentIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Appointment not found" });
    }
});

app.listen(port, () => {
    console.log(`Schedule server listening at http://localhost:${port}`);
});

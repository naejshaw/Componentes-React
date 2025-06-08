const express = require('express');
const cors = require('cors');
const app = express();
const port = 4004;

app.use(cors());
app.use(express.json());

let profile = {
    name: "John Doe",
    photo: "https://example.com/photo.jpg",
    job: "Software Developer",
    location: "New York, USA",
    phone: "1234567890",
    email: "john.doe@example.com",
    skills: {
        softSkills: ["Communication", "Teamwork", "Problem Solving"],
        hardSkills: [
            { name: "JavaScript", logo: "https://example.com/js-logo.png" },
            { name: "React", logo: "https://example.com/react-logo.png" }
        ]
    },
    languages: ["English", "Spanish"],
    portfolio: [
        { name: "Project One", url: "https://projectone.example.com", github: true },
        { name: "Project Two", url: "https://projecttwo.example.com", github: false }
    ],
    professionalExperience: [
        { name: "Company A", period: "2018-2020", description: "Worked as a developer." },
        { name: "Company B", period: "2020-2023", description: "Senior developer role." }
    ],
    educationalExperience: [
        { name: "University X", period: "2014-2018", description: "Bachelor's degree in Computer Science." }
    ]
};

app.get('/api/profile', (req, res) => {
    res.json(profile);
});

app.listen(port, () => {
    console.log(`Portfolio server listening at http://localhost:${port}`);
});

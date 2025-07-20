const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/websites/edu/teachers', (req, res) => {
    res.sendFile(__dirname + '/views/edu_teachers.html');
});

module.exports = app; // ✅ Export instead of starting server

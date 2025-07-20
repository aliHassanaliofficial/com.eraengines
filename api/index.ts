const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/websites/edu/teachers', (req, res) => {
    res.sendFile(__dirname + '/views/edu_teachers.html');
});

module.exports = app;
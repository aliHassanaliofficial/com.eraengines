const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const rootPath = path.resolve(__dirname, '..'); // 🔑 Fix path for Vercel

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(rootPath, 'public')));
app.use(express.static(path.join(rootPath, 'app')));

app.get('/', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'index.html'));
});

app.get('/websites/edu/teachers', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'edu_teachers.html'));
});

module.exports = app;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

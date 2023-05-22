require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    return res.status(200).json({ message: 'OK' });
});

app.get('/api/chat', (req, res) => {
    return res.status(200).json({ message: 'OK' });
});


app.get('/api/chat/:id', (req, res) => {
    return res.status(200).json({ message: 'OK' });
});


app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});



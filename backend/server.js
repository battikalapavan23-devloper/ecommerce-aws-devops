const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/joke', async (req, res) => {
    try {
        const response = await axios.get('https://api.jokes.one/jod');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

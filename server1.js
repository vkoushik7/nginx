const express = require('express');
const app = express();

app.get('/server1', (req, res) => {
    res.send('Hello from server 1');
});

app.listen(3001, () => {
    console.log('Server 1 listening on port 3001');
});
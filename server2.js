const express = require('express');
const app = express();

app.get('/server2', (req, res) => {
    res.send('Hello from server 2');
});

app.listen(3002, () => {
    console.log('Server 1 listening on port 3002');
});
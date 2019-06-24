const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello");
    console.log(req, res);
});

app.listen(3001);
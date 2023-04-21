var express = require('express');

var app = express();







app.get('/', (req, res) => {
    res.send('t')
})

app.listen(Process.env.PORT);

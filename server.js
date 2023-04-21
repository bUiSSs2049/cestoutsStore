var express = require('express');
var app = express();

app.get('/', (req, res) => {
        res.send('rr')


    });


  app.listen(process.env.PORT || 3000)
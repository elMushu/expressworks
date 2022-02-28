const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }))

app.post('/form', function (req, res) {
    const string = req.body.str.split('').reverse().join('');
    res.send(string);
})

app.listen(process.argv[2]);
const e = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const { send } = require('process');

app.get('/books', function (req, res) {
    const file = process.argv[3];
    fs.readFile(file, function (err, data) {
        if (err) {
            return res.sendStatus(500);
        }
        try {
            books = JSON.parse(data);
        } catch {
            return res.sendStatus(500);
        }
        res.send(books);
    })
})

app.listen(process.argv[2]);
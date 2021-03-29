const express = require('express');
const cors = require('cors');

const getImagesData = require('./images');


var app = express();
app.use(cors());


app.get('/images', function (req, res) {
    getImagesData(req, res);
});

app.listen(8080, function () {
    console.log('app listening on port 8080')
})


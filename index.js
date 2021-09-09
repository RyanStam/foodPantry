var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './webpages');

app.use(express.static('images'));

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(3000);
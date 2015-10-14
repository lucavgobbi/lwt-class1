/**
 * Created by lucavgobbi on 2015-10-13.
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var middleWare = function (req, res, next) {
    "use strict";
    res.andre = 3;
    next();
};

app.use(function (req, res, next) {
    "use strict";
    var a = 1;
    next();
});

app.use(bodyParser.json());

app.get('/test/:id', function (req, res) {
    "use strict";
    res.status(404).json({ id: req.params.id });
});

app.get('/', function (req, res) {
    "use strict";
    res.status(200).json({ "ack" : 1 });
});

app.post('/', middleWare, function (req, res) {
    "use strict";
    res.status(200).json({ body: req.body, andre: res.andre });
});

var server = app.listen(3000, function (){
    "use strict";
    console.log('Rodando');
})
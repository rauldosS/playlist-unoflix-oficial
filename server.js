var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
app.listen(port);
app.get('/', function (req, res) { res.json({ hello: 'world' }); })
console.log('Message RESTful API server started on: ' + port);

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Playlist = require('./api/models/playlistModel'),
    bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/playlistdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/playlistRoutes');
routes(app);
app.listen(port);
console.log('Playlist RESTful API server started on: ' + port)
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Playlist = require('./api/models/playlistModel'),
    bodyParser = require('body-parser');

    var cors = require('cors')
    app.use(cors())
    var corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      }


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/playlistdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/playlistRoutes');
routes(app);
app.listen(port);
console.log('Playlist RESTful API server started on: ' + port)
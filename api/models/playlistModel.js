'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playlistSchema = new Schema({
    user: {
        type: String
    },
    slug: {
        type: String
    },
    watched: {
        type: Boolean
    }
});
module.exports = mongoose.model('Playlist', playlistSchema);
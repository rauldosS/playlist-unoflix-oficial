'use strict'

module.exports = function (app) {
    var playlists = require('../controller/playlistController');
    // messages Routes
    app.route('/playlists')
        .get(playlists.list_all_playlists)
        .post(playlists.create_a_playlist);
    app.route('/playlists/:playlistId')
        .get(playlists.read_a_playlist)
        .put(playlists.update_a_playlist)
        .delete(playlists.delete_a_playlist);
}
'use strict'
module.exports = function (app) {
    var playlists = require('../controller/playlistController');
    // messages Routes
    app.route('/playlist')
        .get(playlists.list_all_messages)
        .post(playlists.create_a_message);
    app.route('/playlist/:playlistId')
        .get(playlists.read_a_message)
        .put(playlists.update_a_message)
        .delete(playlists.delete_a_message);
}
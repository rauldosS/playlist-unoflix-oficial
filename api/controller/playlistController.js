'use strict';

// var request = require('request');
// var url = 'https://unoflix-video.herokuapp.com/videos';

// var auth = 'Basic ' + Buffer.from('test:outroteste').toString('base64');

// var headers = {
//     'Authorization': auth
// }

var mongoose = require('mongoose'),
    Playlist = mongoose.model('Playlist');

exports.list_all_playlists = function (req, res) {
    Playlist.find({}, function (err, playlist) {
        if (err)
            res.send(err);
        res.json(playlist);
    });
};
exports.create_a_playlist = function (req, res) {
    var new_playlist = new Playlist(req.body);
    console.log('playlist: ' + new_playlist)
    new_playlist.save(function (err, playlist) {
        if (err)
            res.send(err);
        res.json(playlist);
    });
};
exports.read_a_playlist = function (req, res) {
    Playlist.findById(req.params.playlistId, function (err, playlist) {
        if (err)
            res.send(err);
        res.json(playlist);
    });
};
exports.update_a_playlist = function (req, res) {
    Playlist.findOneAndUpdate({ _id: req.params.playlistId }, req.body, { new: true }, function (err, playlist) {
        if (err)
            res.send(err);
        res.json(playlist);
    });
};
exports.delete_a_playlist = function (req, res) {
    Playlist.remove({
        _id: req.params.playlistId
    }, function (err, playlist) {
        if (err)
            res.send(err);
        res.json({ playlist: "Playlist successfully deleted" });
    });
};
exports.teste = function (req, res) {
    alert(res + 'teste')
}
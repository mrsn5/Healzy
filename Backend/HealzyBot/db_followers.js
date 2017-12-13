/**
 * Created by sannguyen on 13.12.17.
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoURI_followers = "mongodb://mr.sn5:HelloWorld5@ds135916.mlab.com:35916/followersdb";
var db_followers;


var Followers;

function init() {
    db_followers = mongoose.createConnection(mongoURI_followers);
    db_followers.on('error', function (err) {
        console.log('connection error:', err.message); });
    db_followers.once('open', function callback () {
        console.log("Connected to DB Followers!"); });
    var FollowerSchema = mongoose.Schema({
        first_name: { type: String, default: 'Anonym' },
        last_name: { type: String, default: 'Anonym' },
        id: { type: Number, unique: true}
    });
    Followers = db_followers.model('Followers', FollowerSchema);
    return db_followers;
}


function getModel() {
    return Followers;
}



exports.init = init;
exports.getModel = getModel;
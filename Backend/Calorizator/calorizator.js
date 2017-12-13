/**
 * Created by sannguyen on 12.12.17.
 */
/*var products_info = [

];*/
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoURI_calorizator = "mongodb://mr.sn5:HelloWorld5@ds139436.mlab.com:39436/calorizatordb";
var db_calorizator;

function init() {
    db_calorizator = mongoose.createConnection(mongoURI_calorizator);
    db_calorizator.on('error', function (err) {
        console.log('connection error:', err.message); });
    db_calorizator.once('open', function callback () {
        console.log("Connected to DB Calorizator!"); });

    return db_calorizator;
}

function getModel() {
    var ProductSchema = mongoose.Schema({
        title: { type: String, unique: true },
        proteins: { type: Number },
        fats: { type: Number },
        carbohydrates: { type: Number },
        calories: { type: Number },
        category: { type: String }
    });

    var Product = db_calorizator.model('Product', ProductSchema);
    return Product;
}

/*
products_info.forEach(function (product) {
    new Product(product).save();
    //console.log(product);
});*/



exports.init = init;
exports.getModel = getModel;



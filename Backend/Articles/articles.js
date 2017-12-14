/**
 * Created by sannguyen on 14.12.17.
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoURI_calorizator = "mongodb://mr.sn5:HelloWorld5@ds135946.mlab.com:35946/articlesdb";

db_article = mongoose.createConnection(mongoURI_calorizator);

var Article;

db_article.on('error', function (err) {
    console.log('connection error:', err.message); });
db_article.once('open', function callback () {
    console.log("Connected to DB Articles!");

    var ArticleSchema = mongoose.Schema({
        image: { type: String },
        title: { type: String, unique: true },
        category: { type: String },
        content: { type: String },
        type: { type: String },
        date: {type: Date}
    });

    Article = db_article.model('Article', ArticleSchema);
});



function getModel() {
    return Article;
}

exports.getModel = getModel;

/*

var article_info = [
    {
        image: "assets/images/salade.jpg",
        title: "Healthy diet 6",
        category: "Diets",
        content: "В основе меню многих диет — салаты для похудения. Если они овощные или с добавлениемнежирного мяса, то содержат небольшое количество калорий. Из-за этого их можноесть...",
        type: "Articles",
        date: new Date("2007-08-01"),
    },
    {
        image: "assets/images/food1.jpg",
        title: "Cocktails 6",
        category: "Cocktails",
        content: "Жиросжигающие коктейли для похудения, как и питательные, а также очищающие – прекраснодополнят любую диету. Они ускоряют метаболизм, чем способствуют быстрому сбрасыванию...",
        type: "Recipes",
        date: new Date("2010-08-01"),
    }
];







var ArticleSchema = mongoose.Schema({
    image: { type: String },
    title: { type: String, unique: true },
    category: { type: String },
    content: { type: String },
    type: { type: String },
    date: {type: Date}
});


db_article = mongoose.createConnection(mongoURI_calorizator);

db_article.on('error', function (err) {
    console.log('connection error:', err.message); });
db_article.once('open', function callback () {
    console.log("Connected to DB Blog!"); });


var Article = db_article.model('Article', ArticleSchema);


article_info.forEach(function (a) {
    new Article(a).save();
    //console.log(product);
});
*/


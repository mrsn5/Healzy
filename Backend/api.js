/**
 * Created by sannguyen on 14.12.17.
 */



var DBArticle = require("./Articles/articles");

exports.getArticleList = function(req, res) {
    console.log("api --> ");

    var Articles = DBArticle.getModel();
    Articles.find(function (err, articles) {
        console.log(articles);
        if (!err) {
            res.send(articles);
        }
    });
};
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

var DBProducts = require("./Calorizator/calorizator");

exports.findProduct = function(req, res) {
    console.log("api --> ");
    var product_info = req.body;

    var Product = DBProducts.getModel();
    Product.find(
        {
            title: new RegExp('[\s\S]*(' + product_info.title + '){1}[\s\S]*', 'i')
        }, function (err, products) {
            products.sort(function (p1, p2) {
                if (p1.title < p2.title)
                    return -1;
                else if (p1.title > p2.title)
                    return 1;
                else return 0;
            });
            res.send(products);
        });
};
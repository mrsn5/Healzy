
/**
 * Created by sannguyen on 13.12.17.
 */
var fs = require('fs');
var ejs = require('ejs');


exports.ArticleReview_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/article_review_one.ejs', "utf8"));
exports.Product_Normal_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/product_calculator_normal_one.ejs', "utf8"));
exports.Product_Small_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/product_calculator_small_one.ejs', "utf8"));
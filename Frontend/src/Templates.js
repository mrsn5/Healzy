
/**
 * Created by sannguyen on 13.12.17.
 */
var fs = require('fs');
var ejs = require('ejs');


exports.ArticleReview_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/article_review_one.ejs', "utf8"));

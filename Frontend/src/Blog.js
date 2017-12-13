/**
 * Created by sannguyen on 13.12.17.
 */


var Templates = require('./Templates');
var Articles_List = require('./Blog_List');

function showOneArticle(article) {
    var html_code = Templates.ArticleReview_OneItem({article: article});
    var $node = $(html_code);

    $('#articles-list').append($node);
}

function init() {
    showOneArticle(Articles_List[0]);
    showOneArticle(Articles_List[0]);
}

exports.init = init;


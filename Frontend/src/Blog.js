/**
 * Created by sannguyen on 13.12.17.
 */


var Templates = require('./Templates');
var API = require('./API');

var Articles_List;

function showOneArticle(article) {
    var html_code = Templates.ArticleReview_OneItem({article: article});
    var $node = $(html_code);

    $('#articles-list').append($node);
}

function init() {
    console.log("++++++++++++++++++++INIT");
    API.getArticleList(function(err, list) {
        if(err) {
            alert("Can't load article list ");
        } else {
            Articles_List = list;
            showOneArticle(Articles_List[0]);
            showOneArticle(Articles_List[1]);
        }
    });
}



exports.init = init;


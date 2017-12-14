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

function showArticles() {
    Articles_List.forEach(function (a) {
        showOneArticle(a);
    })
}

function lastRecent (p1, p2) {
    if (p1.date > p2.date) return 1;
    else if(p1.date < p2.date) return -1;
    else return 0;
}

function mostRecent (p1, p2) {
    if (p1.date > p2.date) return -1;
    else if(p1.date < p2.date) return 1;
    else return 0;
}

function init() {
    console.log("++++++++++++++++++++INIT");
    API.getArticleList(function(err, list) {
        if(err) {
            alert("Can't load article list ");
        } else {
            Articles_List = list;
            Articles_List.sort(mostRecent);
            showArticles();
        }
    });
}



exports.init = init;


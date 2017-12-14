/**
 * Created by sannguyen on 13.12.17.
 */


var Templates = require('./Templates');
var API = require('./API');

var All_Articles;
var Articles_List;

var $article_list = $('#articles-list');

$("#Least1").click(function () {

    $article_list.html("");
    Articles_List.sort(leastRecent);
    showArticles();
});

$("#Most1").click(function () {
    $article_list.html("");
    Articles_List.sort(mostRecent);
    showArticles();
});

$("#articlesf").click(function () {
    $article_list.html("");
    Articles_List = All_Articles.filter(function (p1) {
        console.log(p1.type);
        if (p1.type === "Articles") return true;
        else return false;
    });
    showArticles();
});


$("#recipesf").click(function () {
    $article_list.html("");

    Articles_List = All_Articles.filter(function(p1) {
        console.log(p1.type);
        if (p1.type === "Recipes") return true;
        else return false;
    });
    showArticles();
});

$("#cocktailsf").click(function () {
    $article_list.html("");
    Articles_List = All_Articles.filter(function (p1) {
        if (p1.category === "Cocktails") return true;
        else return false;
    });
    showArticles();
});

$("#dietsf").click(function () {
    $article_list.html("");
    Articles_List = All_Articles;

    console.log(Articles_List);

    Articles_List = All_Articles.filter(function (p1) {
        console.log(p1.category);
        if (p1.category === "Diets") return true;
        else return false;
    });
    showArticles();
});

function showOneArticle(article) {
    var html_code = Templates.ArticleReview_OneItem({article: article});
    var $node = $(html_code);
    $article_list.append($node);
}

function showArticles() {
    Articles_List.forEach(function (a) {
        showOneArticle(a);
    })
}

function leastRecent (p1, p2) {
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
            All_Articles = list;
            Articles_List.sort(mostRecent);
            showArticles();
        }
    });
}



exports.init = init;


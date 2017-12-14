/**
 * Created by sannguyen on 13.12.17.
 */


var Templates = require('./Templates');
var API = require('./API');

var All_Articles;
var Articles_List;

var currPage;
var maxPage;

var $article_list = $('#articles-list');

$("#Least1").click(function () {
    paginationInit();
    Articles_List.sort(leastRecent);
    showArticles();
});

$("#Most1").click(function () {
    paginationInit();
    Articles_List.sort(mostRecent);
    showArticles();
});

$("#articlesf").click(function () {
    paginationInit();
    Articles_List = All_Articles.filter(function (p1) {
        console.log(p1.type);
        if (p1.type === "Articles") return true;
        else return false;
    });
    showArticles();
});

$("#recipesf").click(function () {
    paginationInit();
    Articles_List = All_Articles.filter(function(p1) {
        console.log(p1.type);
        if (p1.type === "Recipes") return true;
        else return false;
    });
    showArticles();
});

$("#cocktailsf").click(function () {
    paginationInit();
    Articles_List = All_Articles.filter(function (p1) {
        if (p1.category === "Cocktails") return true;
        else return false;
    });
    showArticles();
});

$("#dietsf").click(function () {
    paginationInit();
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
    maxPage = Math.floor(Articles_List.length / 5);
    $article_list.html("");
    for (var i = 0; i < 5; i++){
        if (5*currPage+i<Articles_List.length)
            showOneArticle(Articles_List[5*currPage+i]);
    }
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
            currPage = 0;
            maxPage = Math.floor(Articles_List.length / 5);
            showArticles();
        }
    });
}

$("#prev").click(function () {
    if (currPage !== 0) {
        location.href = "#";
        if (currPage === maxPage)
            $("#next").removeClass("disabled");
        if (currPage === 1)
            $("#prev").addClass("disabled");
        currPage--;
        showArticles();
    }
});

$("#next").click(function () {
    console.log("Next");
    if (currPage !== maxPage) {
        location.href = "#";
        console.log(currPage +" != "+maxPage);
        if (currPage === 0)
            $("#prev").removeClass("disabled");
        if (currPage === maxPage - 1)
            $("#next").addClass("disabled");
        currPage++;
        showArticles();
    }
});

function paginationInit() {
    currPage = 0;
    $("#prev").addClass("disabled");
    $("#next").removeClass("disabled");
    if (maxPage === currPage) $("#next").addClass("disabled");
}

exports.init = init;


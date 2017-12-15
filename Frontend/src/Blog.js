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
    $node.find("a").click(function () {
        //alert(article);
        $('#blackout').show();
        var boxWidth = $(window).width()*0.90;
        var winHeight = ($(window).height() - 80)*0.90;
        var left = $(window).width()*0.1 / 2;
        var top = 80 + $(window).height()*0.1 / 2;

        $('#title-a').text(article.title);
        $('#text-a').text(article.content);


        $('#popup-box').css({'width' : boxWidth+'px','height' : winHeight+'px', 'left' : left+'px', 'top' : top+'px'});
        $('#popup-box').show();
        $('#img-a').attr('src', article.image);
        $('.bottom').css({'height' : (winHeight-top/2)+'px'});
    });
    $article_list.append($node);
}



$('#close').click(function () {
    $('#popup-box').hide();
    $('#blackout').hide();

});

function centerBox() {

    /* определяем нужные данные */
    var winWidth = $(window).width();
    var winHeight = $(document).height();
    var scrollPos = $(window).scrollTop();

    /* Вычисляем позицию */

    var disWidth = (winWidth - boxWidth) / 2
    var disHeight = scrollPos + 150;

    /* Добавляем стили к блокам */
    $('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
    $('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});

    return false;
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
            //alert("Can't load article list ");
            console.log(err);

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


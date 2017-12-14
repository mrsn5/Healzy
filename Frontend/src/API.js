
var API_URL = "http://localhost:5051";

function backendGet(url, callback) {

    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

exports.getArticleList = function(callback) {
    console.log("API --> ");
    backendGet("/api/get-article-list/", callback);
};

exports.findProduct = function(product_info, callback) {
    backendPost("/api/find-product/", product_info, callback);
};

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var API_URL = 'http://' + server_ip_address + ':' + server_port;

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

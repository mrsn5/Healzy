exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'HEALZY'
    });
};

exports.gymPage = function(req, res) {
    res.render('gymPage', {
        pageTitle: 'Map'
    });
};
exports.blogPage = function(req, res) {
    res.render('blogPage', {
        pageTitle: 'Blog'
    });
};
exports.get = function(req, res){
    var chaptername = req.params[0];
    var pagename = req.params[1];
    rendercomic(res, chaptername, pagename);
};

exports.newest = function(req, res){
    rendercomic(res, "1", "02");
};

var rendercomic = function(res, chaptername, pagename) {
    var data = {
        title: chaptername + '-' + pagename,
        ch: chaptername,
        pg: pagename
    };
    res.render('comic', data);
}

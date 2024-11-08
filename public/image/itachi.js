exports.name = '/itachi';
exports.index = async(req, res, next) => {
    try {
      
        const girl = require('./data/json/itachi.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
          url: image,
            data: image,
            count: girl.length,
            author: 'Văn Tân'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
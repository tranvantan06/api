const soundcloudDownloader = require("soundcloud-downloader").default;

exports.name = '/soundcloud/search';
exports.index = async (req, res, next) => {
 
  const keyWord = req.query.keyword;
  if (!keyWord)
    return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
  soundcloudDownloader.search({
    query: keyWord,
  })
    .then((info) => {
      res.type('json').send(JSON.stringify(info, null, 2));
    })
    .catch((err) => {
      res.status(500).send({
        error: err
      });
    });
};

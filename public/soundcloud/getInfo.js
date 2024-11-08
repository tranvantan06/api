const soundcloudDownloader = require("soundcloud-downloader").default;

exports.name = '/soundcloud/info';
exports.index = async (req, res, next) => {

  const link = req.query.link;
  if (!link)
    return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
  soundcloudDownloader.getInfo(link)
    .then((info) => {
      res.type('json').send(JSON.stringify(info, null, 2));
    })
    .catch((err) => {
      res.status(500).send({
        error: err
      });
    });
};

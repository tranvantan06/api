const soundcloudDownloader = require("soundcloud-downloader").default;

exports.name = '/soundcloud/download';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (!link)
    return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
  soundcloudDownloader.download(link)
    .then((stream) => {
      res.set('Content-Type', 'audio/mpeg');
      stream.pipe(res);
    })
    .catch((err) => {
      res.status(500).send({
        error: err
      });
    });
};

exports.name = '/rong';
exports.index = async(req, res, next) => {
	const data = require('./data/data_rong.json');
  if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
	var id = req.query.id;
	if(!id) return res.json({ error: 'thiếu "id" truyện cần tìm' })
	var info = data.find(i => i.ID == id);
	if(info == undefined) return res.json({ error: 'không tìm thấy ID này!' });
	var ID = info.ID
	var name = info.name;
	var data1 = info.data1;
  var money = info.money;
  var danger = info.danger;
  var color = info.color;
  var asia = info.asia;
  var des = info.des;
	return res.json({
		ID,
		name,
		data1,
    money,
    danger,
    color,
    asia,
    des
	})
}
const fs = require('fs');
module.exports = function (req, res) {
    let flag = true;
    let data = JSON.parse(fs.readFileSync('./json_store/add_shopList.json', 'utf-8'));
    data.list.forEach(item => {
        if (item.id === req.body.id) {
            flag = false;
            item.count++;
        }
        return item;
    });
    if (flag) {
        data.list.push(req.body);
    }
    fs.writeFileSync('./json_store/add_shopList.json', JSON.stringify(data));
    res.end('success');
} 
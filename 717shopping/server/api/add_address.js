const fs = require('fs');
module.exports = function (req, res) {
    let data = req.body;
    let addressFile = JSON.parse(fs.readFileSync('./json_store/add_address.json', 'utf-8'));
    data.id = addressFile.list.length;
    if (data.id === 0) {
        data.id = 0;
    } else {
        data.id = (addressFile.list.length - 1) + 1;
    }
    console.log(data);
    addressFile.list.unshift(data);
    fs.writeFileSync('./json_store/add_address.json', JSON.stringify(addressFile));
    res.end('success');
}
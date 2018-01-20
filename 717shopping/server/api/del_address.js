const fs = require('fs');
module.exports = function (req, res) {
    let addressList = JSON.parse(fs.readFileSync('./json_store/add_address.json', 'utf-8'));
    addressList.list.forEach((v, i) => {
        // console.log(v.id);
        if (v.id === req.body.id) {
            addressList.list.splice(i, 1);
        }
    });
    fs.writeFileSync('./json_store/add_address.json', JSON.stringify(addressList));
    let datas = fs.readFileSync('./json_store/add_address.json', 'utf-8');
    res.end(JSON.stringify(datas));
}
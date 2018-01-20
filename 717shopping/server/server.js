const fs = require('fs');
const jwt = require('jsonwebtoken');
let express = require('express');
let bodyParser = require('body-parser');
let queryApi = require('./queryApi.js');
let url = require('url');
let queryString = require('querystring');
let body_parser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next();
});
app.post('/mall/index/getGoodsChannel', (req, res) => {
    console.log(req.headers);
    queryApi('/mall/index/getGoodsChannel', req.body, 'POST').then((data) => {
        res.end(data);
    })
});
// 注册
app.post('/admin/user/register', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    let admin_list = fs.readFileSync('./json_store/register_data.json', {encoding: 'utf-8'});
    admin_list = JSON.parse(admin_list);
    admin_list.list.push(req.body);
    fs.writeFileSync('./json_store/register_data.json', JSON.stringify(admin_list));
    let obj = {
        "code": 1,
        "msg": "SUCCESS"
    };
    res.end(JSON.stringify(obj));
});
// 登录
app.post('/admin/user/login', (req, res) => {
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    var admin_list = JSON.parse(fs.readFileSync('./json_store/register_data.json','utf-8'));
    //flag 为true说明用户存在，为false说明用户不存在
    var token, response, flag = false;
    admin_list.list.forEach((item) => {
        if (item.name === req.body.name) {
            flag = true;
            if (item.pwd === req.body.pwd) {
                token = jwt.sign(req.body, 'ssw', { expiresIn: 30 });
                response = {
                    "code": 1,
                    "token": token,
                    "msg": "SUCCESS"
                };
            } else {
                response = {
                    "code": 2,
                    "error":"error",
                    "msg": "密码错误"
                };
            }
        }
    });
    if (!flag) {
        response = {
            "code": 3,
            "error":"error",
            "msg": "此用户不存在"
        };
    }
    res.end(JSON.stringify(response));
})
// 添加购物车
let addCartCallback = require('./api/add_shop.js');
app.post('/add/cartList', addCartCallback);
// 请求分类页数据
// app.get('/mobile/Category/categorySon', (req, res) => {
//     var obj = url.parse(req.url,true).query;
//     console.log(obj.sonid);
//     queryApi('/mobile/Category/categorySon?sonid=4', 'GET').then((data) => {
//         res.end(data);
//     })
//     res.end('success');
// });
let classifyDataCallback = require('./api/get_classifyData.js');
app.post('/get/classifyData', classifyDataCallback);
// 选择收货地址数据
app.post('/select/address', (req, res) => {
    let addressList = fs.readFileSync('./json_store/address.json', 'utf-8');
    res.end(addressList);
});
// 删除收货地址
let delAddressCallback = require('./api/del_address.js');
app.post('/user/delect/address', delAddressCallback);
// 添加收货地址
let addAddressCallback = require('./api/add_address.js');
app.post('/user/address', addAddressCallback);
app.post('/user/getAddress', (req, res) => {
    let datas = fs.readFileSync('./json_store/add_address.json', 'utf-8');
    res.end(datas);
});
app.listen('3000', function () {
    console.log('server listen 3000');
})

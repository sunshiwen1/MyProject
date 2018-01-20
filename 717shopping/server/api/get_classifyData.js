let Mock = require('mockjs');
module.exports = function (req, res) {
    let data = Mock.mock({
        'array|1-5': [
            {
                'img|1': [
                    '../../src/assets/classifyImg/jia1@2x.png',
                    '../../src/assets/classifyImg/jia2@2x.png',
                    '../../src/assets/classifyImg/jia3@2x.png',
                    '../../src/assets/classifyImg/jia4@2x.png',
                    '../../src/assets/classifyImg/jia5@2x.png'
                ],
                'name|1': [
                    '东南',
                    '西北',
                    '东北',
                    '西南',
                    '中原'
                ]
            }
        ]
    });
    res.end(JSON.stringify(data));
}
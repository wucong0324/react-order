const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let homeAdData = require('./home/ad.js');
let homeListData = require('./home/list.js');
let searchListData = require('./search/list.js');
let detailInfo = require('./detail/info.js');
let detailComment = require('./detail/comment.js');
let orderList = require('./orderlist/orderList.js')

//首页 —— 广告（超值特惠）
app.get('/api/homead', (req, res, next) => {
     res.send(homeAdData);
     next()
});

//首页 —— 推荐列表（猜你喜欢）
app.get('/api/homelist/:city/:page', (req, res, next) => {
    let city = req.params.city;
    let page = req.params.page;
    console.log(city, page);
    res.send(homeListData);
    next();
});

//搜索页数据 不带keyword
app.get('/api/search/:page/:city/:category', (req, res, next) => {
    let city = req.params.city;
    let page = req.params.page;
    let category = req.params.category;
    console.log(city, page, category);
    res.send(searchListData);
    next();
});

//搜索页数据 带keyword
app.get('/api/search/:page/:city/:category/:keyword', (req, res, next) => {
    let city = req.params.city;
    let page = req.params.page;
    let keyword = req.params.keyword;
    let category = req.params.category;
    console.log(city, page, keyword, category);
    res.send(searchListData);
    next();
});

//详情页 - 商户信息
app.get('/api/detail/info/:id', (req, res, next) => {
    let id = req.params.id;
    console.log('商户信息', id);
    res.send(detailInfo);
    next()
});

//详情页 - 评价
app.get('/api/detail/comment/:page/:id', (req, res, next) => {
    let id = req.params.id;
    let page = req.params.page;
    console.log('商户评价', id, page);
    res.send(detailComment);
    next()
});

//获取订单
app.get('/api/orderlist/:username', (req, res, next) => {
    let username = req.params.username;
    console.log(`用户名：${username}`);
    res.send(orderList);
    next()
});

app.post('/api/submitComment', (req, res, next) => {
    console.log('提交评论');
    console.log(req.body);
    res.send({
        errno: 0,
        msg: 'ok'
    });
    next()
})


app.listen(3030);
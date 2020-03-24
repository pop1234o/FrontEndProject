const mongoose = require('mongoose');
//如果没有，在操作的时候会自动创建这个数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
    .then(() => {
        console.log('connect success');

    }).catch(err => {
        console.log('connect fail');
    });
//指定每条数据的字段的格式
const schema = new mongoose.Schema({
    name: String,
});
//创建表，实际名称都是加个s
const Test = mongoose.model('runoob', schema);

Test.create({ name: "pop" }).then(doc => {
    console.log('insert:' + doc);
}).catch(err => {
    console.log('insert=' + err);
});


Test.find().then(doc => {
    console.log('find:' + doc);
}).catch(err => {
    console.log('find=' + err);
});


# Express
https://www.expressjs.com/
（中文网）
https://www.expressjs.com.cn/

也是node的第三方模块
专门创建网站应用
比如路由功能，静态资源访问，接收post参数都很繁琐
我们要的是专注业务逻辑，而不是这些重复代码
所以我们需要框架！

npm install express

## express特性



### 使用
https://www.expressjs.com.cn/starter/hello-world.html

const express = require('express');
const app = express();
//创建路由
app.get('/',(req,res)=>{
    //检测响应内容类型，设置响应头content-type
    //自动生成状态码
    // 自动设置编码
    res.send('xxx');
});
//json
app.get('/list',(req,res)=>{
    //自动返回json类型数据
    res.send({name:'xxx'});
});

//访问不存在的路由

//启动成功
app.listen(8080);

### 路由中间件-middleware
https://www.expressjs.com.cn/guide/routing.html
就是一个拦截器，专门用来处理请求和响应的
可以有多个中间件
比如先做验证，再把真正请求发给服务端
减轻服务端压力

app.get
app.post 
都是express中间件

//这就是express内置的中间件
app.get('/request',(req,res,next)=>{
    
    if(req.token){
        next();//给到下一个中间件
    }else{
        res.send('token is empty');
    }
});

//这其实也是一个中间件
app.get('/request',(req,res)=>{

});
* 路由有多种匹配规则，具体可以看文档


### app.use 中间件

//对所有请求进行拦截
app.use((req,res,next)={
    next();
})

//对指定路由进行拦截，不管是post还是get
app.use('/admin',(req,res,next)={

})

要写到所有中间件前面

### 中间件实际应用
1.路由保护，如果有些页面需要登录，就可以在中间件中
判断，没有登录就统一返回登录页面

2.网站维护公告，中间件对所有请求进行拦截

3.定义404页面
把app.use写到最后面，表示上面没有匹配到路由，请求就到这了
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
### 错误处理中间件

比如代码崩溃，文件读取失败，数据库连接失败
这里是4个参数
//只能捕获到同步的错误
app.use(function (err, req, res, next) {
  console.error(err.stack)
  //err.msg
  res.status(500).send('Something broke!')
})
//如果是异步的，比如读取文件失败，回调中返回err
next(err);//这样就会调用错误处理了

* 手动抛出错误 throw new Error('xxx');

### 捕获错误

try{

}catch(ex){
    next(ex);
}

### 构建模块化路由
https://www.expressjs.com.cn/guide/routing.html 最下面
不同类型的路由分别管理
比如有用户，管理员
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router


//匹配路径，一级路由
var birds = require('./birds')
app.use('/birds', birds)

### get post 参数获取
get
req.query
post
用express第三方模块-body-parser
cosnt bodyParser = require('body-parser');
//其实就是一个中间件，extended是否对请求参数用自己的插件进行处理，否则用queryString处理
app.use(bodyParser.urlencoded({extended:false}));

req.body

### express路由参数
//一个占位符
app.get('/user/:userId',(req,res)=>{
    req.params 是路由参数
})

* 两种参数方式都行，这种是参数定义比较明确


### 静态资源处理
https://www.expressjs.com.cn/starter/static-files.html
其实也是一个中间件（拦截器）
app.use(express.static('public'))

//设置别名
app.use('/static', express.static(path.join(__dirname, 'public')))

### 模板引擎 express-art-template
express-art-template
express对 art-template 的封装
先要下载这两个第三方模块

//后缀 ,指定使用模板
app.engine('art',require('express-art-template'))
//设置模板目录 'views'是固定的
app.set('views',path.join(__dirname,'views'))
//设置默认模板后缀
app.set('view engine', 'art')

app.get('/', function (req, res) {
    //index模板名称，index.art
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

### app.locals对象
不同页面中有可能有相同的数据

app.locals对象设置公共数据
app.locals.user={
    name:'xxx'
}
这个在所有模板中都能拿到

这样我们就能直接使用 user这个对象了
{{user.name}}


### middleware目录
专门放中间件，比如登录拦截，404，路由的callback函数都能单独放到一个js中
每个js都是一个模块，都无法相互引用，必须导出



====================
========other=======
====================


### ejs使用
npm install ejs

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



res.render('index', { title: 'Express' });

index.ejs里
<h1><%= title %></h1>

先从public/index.html来找，然后再去views/index.ejs找












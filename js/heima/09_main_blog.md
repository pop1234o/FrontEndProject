## 创建工程模板目录

## 初始化信息文件npm init -y
下次在别的电脑上下载工程直接
根目录npm install就行，自动下载依赖库
如果没看到node_modules点击一下刷新目录就行

## 下载第三方模块

### 可以先切换代理
安装nrm ： npm install nrm -g
（-global 需要管理员权限 sudo npm install nrm -g）
查询可用下载地址 ：nrm ls
切换： nrm use taobao
切换到了registry.npm.taobao.org

### 下载第三方模块
npm install express mongoose art-template express-art-template path
(这样就创建了node_modules目录，是第三方模块)
path - 路径处理 ，自动join
body-parser - 请求body解析中间件
bcrypt - 明文密码加密

## 创建服务器
用express，在app.js中
node 默认找 package.json中main指定的文件执行

用nodemon执行，这样文件变了会自动帮我们重新执行

### express最佳实践
https://expressjs.com/zh-cn/advanced/best-practice-security.html （生产环境最佳实践：安全）

### 创建各个模块路由
使用use 来设置各个url目录的中间件

## 创建静态资源访问
把对应的放到

### 模板文件和静态资源路径问题
模板里面的css js路径是相对的
那么请求也是相对url来请求的
xx.com/admin/login 访问xx.css

xx.com/admin/xx.css

解决方案：css js使用绝对路径
aa/bb/cc.css - 相对路径
/aa/bb/cc.css - 绝对路径
绝对路径是服务器根目录 

### 编写html css 抽取模板
把公共地方抽取出来
把骨架抽取出来

### 编写服务器连接 路由

### 编写model 数据库连接

### 处理请求

#### 处理登录逻辑

#### 密码加密
不可逆加密，加盐
第三方模块-bcrypt
需要python
sudo npm install -g node-gyp 
（需要写入 usr/local/lib/node_module中）

切换到root 模式 npm install bcrypt
（需要访问 usr/local/lib/node_module）
mac创建root权限
sudo passwd root
切换 ：su root
退出：exit

### 登录成功，处理cookie和session
cookie存在浏览器中，有过期时间，超过自动被浏览器删除
js能访问写入，服务端也可以
cookie以域名进行区分，可以用chrome看
随着请求再次发送给服务端，可以用chrome看

session
存在服务端内存中

#### 登录过程
client->用户名密码 ->server
server->cookie:sessionId:xxx->client
下次请求的时候 带上服务端给下发的sessionid就能证明是你登录的了
client->cookie:sessionId:xxx->server

#### 第三方模块-express-session
https://www.npmjs.com/package/express-session
https://juejin.im/post/5ca7c191f265da30ac21adae (翻译)
npm install express-session
//session处理器
const session = require("express-session");
//配置session中间件
app.use(session({secret:'secret_pop1234o'}));

 //登录成功，给这个sessionid设置username
 //没有username 的肯定这个 sessionid是没登录过的
req.session.username = user.username;

以后再所以请求中我们直接
req.session.username 就能用了
（其实这个中间件自动为这个client设置了一个 connect.sid 
然后每次客户端请求都带上这个id，如果登录成功我们就往这个id的session对象里存入东西
每次服务端接收到请求，都会根据id查找出对应的session对象给我们，就省得我们自己存，自己查找了

）
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

* 网站服务器重启，session消失


### session窃取
https://cloud.tencent.com/developer/article/1043362 （基于Session的身份窃取）

### token

https://juejin.im/entry/592e286d44d9040064592a7b (干掉状态：从 session 到 token)

### 重定向
res.redirect('/pop/user')

### 保存登录数据
  //把用户信息保存到app这个对象里面，就能在模板中用 userInfo访问了
  locals是app （Express对象）自带的属性
 req.app.locals.userInfo = user;

{{userInfo.name}}

### 登录拦截
模板报错就会停止解析，输出错误信息



### 客户端参数校验 第三方模块-joi
https://www.npmjs.com/package/joi
比如邮箱验证，用户名验证

const Joi = require('joi');
 
const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('username', 'birthyear').without('password', 'access_token');
 
// Return result.
const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);
// result.error === null -> valid
 
// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) { });  // err === null -> valid

### async await
async 函数返回 Promise对象 
可以用 await来等里面的返回值

如果一个函数返回promise对象，那么我们在外面可以用await来修饰
默认的async 函数返回的就是promise对象

### 错误处理中间件

(req,res,next)=>{
    next(errStr);
}

有个中间件

### @ 原文输出

### 数据分页
总页数 Math.ceil(总条数/每页多少条)
查询：skip((currentPage-1)*每页多少条)  limit(每页多少条)
把当前页数和total传到html中展示
用的原始模板语法  <%语句%> <%=表达式%>


### 用户信息修改

### 删除逻辑
删除按钮需要绑定用户id
就是在表单添加隐藏域
<input type='hiden' name='id' value="动态设置">

### 文章管理
req.app.locals.xxx 这样art中能直接访问xxx
req.app就是express对象

### 图片上传
需要制定form上传编码格式
enctype="multipart/form-data"
这种指定的part名称

默认是 application/x-www-from-urlencoded 
key=value&&key=value

### 解析图片上传参数
bodyparser不支持文件上传 enctype="multipart/form-data"
得用第三方模块-formidable


{"cover":{"size":6222583,"path":"/Users/liyafeng/Documents/xx/public/uploads/upload_8f9099dc70de575d5674e18e3b570291.pptx","name":"xx.pptx","type":"application/vnd.openxmlformats-officedocument.presentationml.presentation","mtime":"2020-03-30T15:42:35.506Z"}}


### 让所有art中访问登录用户自己的session
https://segmentfault.com/q/1010000003993234（如何在Express.js 4.* 的大量模板中访问req.session？）
在所有路由之前加拦截器
res.app.locals.session = req.session;
req.session//就是请求带过来cookie中sessionId对应的session对象，每个用户都不一样

{{session.userInfo}}




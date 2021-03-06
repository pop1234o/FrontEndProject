# 数据库
mongodb api采用js语法，所以用它

https://www.runoob.com/mongodb/mongodb-tutorial.html （菜鸟教程）
http://www.mongoosejs.net/docs/guide.html (中文文档)
### 安装
（奇数是开发版本，偶数是稳定版本）
https://www.mongodb.com/
下载
https://www.mongodb.com/download-center/community

https://www.mongodb.com/zh (中文)

下载compass-是MongoDB gui界面
也可以在安装mongodb的时候联网下载

node.js通过api操作数据库
compass通过图形界面操作数据库

MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统
### 镜像
https://developer.aliyun.com/mirror/ （阿里云的软件镜像）

### 用命令行安装mongodb
https://www.runoob.com/mongodb/mongodb-linux-install.html

（下载不同版本链接可以从这里查到https://www.mongodb.com/download-center/community ，选中就会出现）
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz    # 下载
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz                                   # 解压

mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb                         # 将解压包拷贝到指定目录

#添加环境变量  /usr/local/mongodb 
export PATH=<mongodb-install-directory>/bin:$PATH

### mac安装教程
https://www.runoob.com/mongodb/mongodb-osx-install.html （Mac OSX 平台安装 MongoDB）
开vpn 下载 ，2分钟 ，80M
cd usr/local
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz
解压
sudo tar -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz
重命名
sudo mv mongodb-osx-x86_64-4.0.9/ mongodb
添加环境变量
export PATH=/usr/local/mongodb/bin:$PATH

或者在.bash_profile里加入这一行，然后source一下这个文件
source ~/.bash_profile

(https://www.jianshu.com/p/55e3b3d6ca6b )
### 通过yum安装
https://www.cnblogs.com/LongJiangXie/p/6080791.html （CentOS7使用阿里云镜像安装Mongodb）
https://mirror.tuna.tsinghua.edu.cn/help/mongodb/ （清华-MongoDB 镜像使用帮助）
https://developer.aliyun.com/mirror/mongodb?spm=a2c6h.13651102.0.0.3e221b11saxh58 （阿里云-MongoDB 镜像）


brew - The missing package manager for macOS

好像mac上没有yum 和apt-get 只有brew 

### 安装后添加数据目录
这是默认目录
sudo mkdir -p /data/db

也可以指定
sudo mongod --dbpath=/data/db 

man mkdir可以查看文档
如果不加 -p   /data: No such file or directory
可以自动创建中间的文档

### 然后需要给db添加用户
否则你现有的工程链接不上

### mac 启动mongodb
sudo mongod //必须加sudo用管理员权限，否则mongod无权访问 /data/db
在控制台能看到 mongod进程说明启动成功

按ctrl+c结束 mongod进程

### 基本概念
database collection document field

直接点击连接，连接到数据库
里面有 admin config local默认仓库

仓库里有 collection （相当于表）

collection里有 document （n条数据的集合）
一条数据就是一个json

document里有field ，就相当于列名（属性）

### 启动MongoDB
当安装完，默认是启动的
如果重启电脑，那么可以通过命令行启动MongoDB服务
windows: 
net start mongodb
net stop mongodb

### mongoose-node连接 MongoDB
https://mongoosejs.com/
https://mongoosejs.com/docs/index.html （官方文档）
需要通过 mongoose 这个第三方模块
npm install mongoose
确保数据库服务启动

const mongoose = require('mongoose');
//如果没有，在操作的时候会自动创建这个数据库
mongoose.connect('mongodb://localhost/数据库名',[options])
    .then(()=>{//连接成功})
    .catch(err=>{//连接失败})
//默认端口号
mongodb://localhost:27017/数据库名

### 创建数据库
直接连接操作就行，mongo会自动帮你创建

### 创建集合 collection
相当于建表
先要连接上数据库
1.规定规则
const schema = new mongoose.Schema({
    name:String,
    isMan :Boolean
});
//创建集合,返回集合的构造函数(指定对哪张表操作)
const Course = mongoose.model('Course',schema);
//Course规定首字母大写，那么里面就会创建集合名称 courses
//约定好的

* 如果没有插入数据，那么数据库就不会给你创建

* 数据库操作都是异步操作
Course.create({name:'aa',isMan:true}) //返回promise对象
    .then(doc=>{})
    .catch(erro=>{})


* 到此数据库被创建，里面有表，有数据
多了 _id是数据库帮我们生成的
#### field数据类型
http://www.mongoosejs.net/docs/schematypes.html

就是json中规定的类型，可以是 String Number Date
{
    name:String,
    isMan :Boolean,
    age :Number,
    addr:[String]//字符串数组
    addrL:{ //对象
        street:String
    },
     birthday:Date //日期类型，在cmd看不见，在gui中能看见
    //类型声明另一种写法
    name:{
        type:String
    }
}

const Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});

Schema Types内置类型如下：

String
Number
Boolean | Bool
Array
Buffer
Date
ObjectId | Oid
Mixed

#### 另一种插入方式
//创建集合实例（一条数据）
const course = new Course({
     name:"xxx",
     isMan :true
});

//插入
course.save();


### create另一个写法
通过构造函数插入数据
Course.create({name:"xx"},(err,doc)=>{
    //doc当前插入的文档(就是那条数据)
});




### 导入数据从json文件中
mongoimport 在mdb 的bin中
把json文件 导入到数据库中

### 查询数据（文档）
https://mongoosejs.com/docs/queries.html

如果找到返回数据不为null，如果没找到或者报错，err不为null
//找出所有文档 （数据）
Course.find() //返回promise
    .then(doc=>{
        //返回一个json数组,里面都是一条条(文档)数据
    })
    .catch(erro=>{})

#### 注意 Queries are Not Promises
正确写法
// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
  if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host".
  console.log('%s %s is a %s.', person.name.first, person.name.last,
    person.occupation);
});



//条件查询
Course.find({_id:'123'})

//默认返回集合的第一条数据
Course.findOne({_id:'123'})

//匹配大于小于
Course.find({age:{$gt:20,$lt:50}});
//匹配包含
{$in:['a','b']}

//返回指定字段
Course.find({_id:'123'}).select('name age')

//不返回指定字段
Course.find({_id:'123'}).select('-_id')

//排序 默认升序
Course.find().sort('age')
//降序
Course.find().sort('-age')

//跳过前多少条数据
Course.find().skip(2)

//只返回前多少条数据
Course.find().limit(2)
* 分页的时候用到

### 删除文档 （数据）
//删除一个
Course.findOneAndDelete({})
    .then(result=>{
        删除的那个json数据
    })
{} 条件和上面的写法一致

//删除多个
Course.deleteMany({})
.then(result=>{
        {ok:1,n:4}//删除成功，删除了4条文档
    })

### 更新文档
Course.updateOne({查询条件},{要修改的值})
    .then(result=>{
        //找到了4条，修改了1条，另外几个肯定和修改的值一样，所以就没修改
        {ok:1,n:4,nModified:1}
    })

Course.updateMany({查询条件},{要修改的值})
* 查询条件没有可以写空对象{}

### mongoose验证规则
数据类型验证。（插入和更新验证）
比如只能是字符串，而且长度有限制；或者传值不能为空

在我们创建查询的时候就要规定了

const schema = new mongoose.Schema({
    name:{
        type:String,//这里声明字段类型
        //下面写约束
        require:true //代表必须传name这个值,否则node报错
    }

  
    require:[true,'请传入名称'], //自定义报错信息

    minlength:2,//最小长度，针对字符串类型
    maxlength:3,
    max:100, //针对数字
    min:1,
    trim:true, //插入数据的时候去除两端空格

    //默认值
    birth:{
        type:Date,
        default:Date.now 
    },
    

   //规定值
    enum:['man','woman'],

    //自定义验证规则
    validate:{
        validator:v=>{
            //v就是传过来的值
            if(v=='true'){
                retrun true;//验证通过
            }else{
                return false;
            }
        },
        message:"自定义错误信息"
    }    
   
});
* 默认都是可以传空的

### 获得报错信息
返回一个json ，里面有报错信息
{errors:{属性名:{错误信息}}}

## 关联操作

### 集合关联
比如文章表和作者表

const schema = new mongoose.Schema({
    name:String,
    author :{
        //关联到另一个表的键
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});
//然后创建构造函数 Post
//插入的关联直接发User表中的id字符串给 author就行

//然后关联查询,这样就把 User表中的数据 给author了
Post.find().popluate('author'//要关联的字段名称)
    .then

### 案例：用户信息增删改查
通过http模块创建http服务
然后里面通过path判断实现路由功能（根据path返回不同内容）
数据动态化：
创建模板字符串，然后里面写html
从数据库中查出user信息，拼接到html中
返回数据给client

### http模块
创建http监听服务
const http = require('http');
处理请求，返回响应
可以实现301跳转
### 路由功能
根据url的path不同返回不同的页面(内容)
解析url，可以用node自带的url模块
const url = require('url')
//对象解构
const {pathname} = url.parse(req.url);

if(pathname=='/list'){
    //呈现用户列表页面
    let list = `模板字符串${user.name}`//这里就是html模板
    response.end(list);//返回内容
}else if(pathname=='/add'){
    response.end(content);
}

### queryString模块
//把 name=xx&age=12 转换为json
const queryString = require('queryString');
queryString.parse(formdata);

## 模块化开发

### 代码都写到一起的问题
project 目录
model 目录 数据库操作
-index.js 创建连接数据库
-user.js 操作user表的函数
导出User的构造函数

### 字符串拼接问题
(数据和html拼接)
以前我们返回html都是在js中
用字符串把查询出来的数据拼接好
这样代码就很乱，可以用模板引擎

### 模板引擎 art-template
https://aui.github.io/art-template/zh-cn/index.html （官网）

art-template(腾讯出品) 高性能 JavaScript 模板引擎
第三方模块，不是node自带的模块
npm install art-template
const template = require('art-template');

const html = template('xxx/xx.art',data)
art文件里是html代码
data是json对象（就是数据）

<span>{{data.name}}</span>

* 新建views 目录，代表模板目录，
* art文件就是一种动态的html，解析引擎会把art转换成html

#### 两种模板语法
https://aui.github.io/art-template/zh-cn/docs/ （语法文档）
原始语法就是 <%%>中写js代码

1.输出
标准语法:{{数据}}
原始语法：<%=数据%>
里面可以是表达式

输出html，原始字符串，不会转义
{{@数据}}
<%-数据%>

2.条件判断
根据数据条件展示数据
{{if 条件}}  {{/if 条件}}

{{if v1}}  {{else if 条件}}  {{/if 条件}}

原始语法
<%if(条件){%> ... <%}%>


3.循环
展示一组数据
{{each 数据}}  
    {{$index}} 
    {{$value}}
{{/each}}

原始语法
<%for(var i = 0;target.length<10;i++>){%> 
    <%=target[i]%>
<%}%>


### 子模板
把相同的布局抽取出来
{{include '模板路径.art'}}
原始语法
<%include('模板路径.art')%>

### 模板继承
把html骨架抽离到单独文件中
html骨架：每个页面都有的代码，类似BaseActivity
每个页面都继承html骨架

骨架.art
{{block 'name'}} {{/block}}

index.art继承
{{extend './骨架.art'}}
{{block 'name'}}填充的内容{{/block}}

* 常用的预留位置有 link  content

### 模板配置
#### 调用第三方模块的方法
在模板中调用第三方模块的方法

比如对时间格式格式化
#### 第三方模块-dateformat
npm install dateformat
const dateFormat  =require('dataformat');
let date = new Date();
dateFormat()

模板中引入，需要在外面用
template.defaults.imports.dateFormat = dateFormat
template('xxx.art',{});
这样就能在 xxx.art 中使用了

### 设置模板根目录

template.defaults.root = 'views'
这样就不用拼接目录了

配置默认后缀，这样就只写文件名就行
template.defaults.extname = 'art'


### 案例：学生档案管理
熟悉模板使用，进行数据展示
1.建立项目文件夹，生成描述文件 npm init -y
2.创建网站服务器
3.链接数据库
4.创建路由，实现模板呈递
5.服务器 实现静态资源访问，比如css js img
6.学生信息添加
7.学生信息展示

student
 model -> 数据库操作
  connect.js 链接数据库
  user.js user表的操作
 app.js 引入数据库操作的js文件，引入就执行了

### 第三方模块-router
以前都是用if else判断，多了就很乱

npm install router
const getRouter = require('router');
const router  = getRouter();
//监听 get请求的 /add
router.get('/add',(req,resp)=>{
    resp.end('ok');
});
//请求分发
server.on('request',(req,resp)=>{
    router(req,resp,()=>{
        请求响应结束回调
    });
})

* 以上写法逻辑清晰，有多少个页面就写多少个路由

### 创建模板文件
public放静态资源
views放模板文件

### 第三方模块-serve-static
实现静态资源访问服务
npm install serve-static;
const serveStatic = require('serve-static');
//写入目录，写绝对路径 
path.join(__dirname,'public');

const serve = serveStatic('public')
server.on('request',(req,res)=>{
    //实现，写到router下面
    serve(req,res,()=>{});

})
server.listen(8080);

### 接收post参数
要监听data事件，用到queryString第三方模块
路由在app.js写，接收到请求的处理也是在app.js中


### 学生列表展示页
1.查询
2.拼到模板上
3.返回

### 逻辑拆分
新建route文件夹，index.js
把app.js 的router的代码，放到index.js中

在app.js中require index.js
就能执行index.js中的代码了，如果要用到可以
module.export

project
 model-数据库
 public-静态资源
 route-路由处理
 views-模板页面
 app.js node执行的总入口，创建服务器，等操作

===============
=====命令行====
===============
## 命令行使用mongodb
https://www.runoob.com/mongodb/mongodb-databases-documents-collections.html

### 连接数据库
管理员方式运行  sudo 
mongo

### 创建管理员账号
管理员方式运行  sudo 
mongo 连接
show dbs
use admin
//针对这个数据库创建的用户
db.createUser({user:'xxx',pwd:'xxx',roles:['root','readWrite']})

处理用命令行，用代码也可以实现
https://docs.mongodb.com/manual/reference/method/db.createUser/ 

然后停止服务
重启  
sudo mongo --auth

mongodb://user:pwd@localhost:27017/datebase

* 管理员和子账号重名了，链接某个数据库，密码得用那个数据库的账户


//为这个数据库创建用户
https://docs.mongodb.com/manual/tutorial/enable-authentication/ （创建管理员）
https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/ (官方文档)
默认mongod启动的数据库不需要权限就能用 mongo链接上

1.创建超级管理员
use admin
db.createUser({user: "p",pwd: "a",roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]})
//权限详见 res/mongodb_roles.jpg

2.重启服务
db.adminCommand( { shutdown: 1 } )



//如果没有 dbpath 要创建对应目录 默认是 /data/db
netstat -natp | grep 27017


mongod --auth --port 27017 --dbpath /var/lib/mongodb 
./bin/mongod -f mongodb.conf  
但是这两种方式都是在前台启动Mongodb进程，如果Session窗口关闭，Mongodb进程也随之停止。不过Mongodb同时还提供了一种后台Daemon方式启动，只需要加上一个"--fork"参数即可，值得注意的是，用到了"--fork"参数就必须启用"--logpath"参数

====后台启动mongodb
后台启动必须指定 logpath ，以前是在控制台输出log，现在就必须指定log输出
mongod --auth --port 27017 --dbpath /var/lib/mongodb --fork --logpath /var/lib/mongodb/mongodb.log

mac上
sudo mongod --auth --port 27017 --fork --logpath /Users/xx/Documents/mongodb.log
没有sudo会报错
Attempted to create a lock file on a read-only directory: /data/db


--fork  必须有logpath ，代替控制台的输出
--logpath arg                         Log file to send write to instead of
                                        stdout - has to be a file, not
                                        directory

 --auth                                Run with security

这样就能异步启动 mongodb服务了
* mongod -help 还是得看文档啊！！！

连接数据库（Authenticate after Connection）
mongo --port 27017
但是这时你没有权限，什么都干不了 show dbs什么都没有
use admin //必须得有
db.auth("myUserAdmin", passwordPrompt()) // or cleartext password


### 创建对应数据库的用户
use test  //!!注意，这里必须切换到 对应的数据库，才能创建对应数据库的用户，否则在admin中执行无效
db.createUser({user: "pop",pwd:  passwordPrompt(),roles: [ { role: "readWrite", db: "test" }]})

重新连接
mongo --port 27017
db.auth("myTester", passwordPrompt())  // or cleartext password

或者
mongo --port 27017 -u "myTester" --authenticationDatabase "test" -p

这样他只能对 test这个数据库进行操作



### 忘记管理员密码
https://blog.csdn.net/asdfsadfasdfsa/article/details/65437422 (mongodb忘记admin密码操作)
关闭服务
mongod  --shutdown --dbpath /var/lib/mongodb //必须指定dbpath

mongod  --port 27017 --dbpath /var/lib/mongodb --fork --logpath /var/lib/mongodb/mongodb.log

use admin //需要切换到admin数据库才能看到，这个是用户管理的数据库
db.system.users.find()//
db.system.users.remove({})
或者
db.system.users.remove({_id:"blog.p"})
创建新的管理员帐号


4.关闭mongo
use admin
db.shutdownServer()

5.以auth方式启动mongo
mongod --auth --dbpath /usr/local/mongodb/data/ --logpath /usr/local/mongodb/logs/mongod.log -logappend --fork


 
### 查看所有数据库账号
sudo mongo 链接数据库
use admin
db.auth('admin','123456') 输入root的管理员账号和密码
db.system.users.find().pretty()


### 查看/创建 删除 数据库 
show dbs //显示当前所有数据库

db  //显示当前数据库

运行"use"命令，可以连接到一个指定的数据库。
use test
果数据库不存在，则创建数据库，否则切换到指定数据库。
use DATABASE_NAME
* 必须数据库里有数据用 show才能展示
删除-选中数据库
db.dropDatabase()


### 创建 查询 表/集合
查询
show collections
创建
db.createCollection("runoob")
删除
db.collection.drop()

### 查询 插入数据
插入数据
db.COLLECTION_NAME.insert(documentJson)
查询数据
db.COLLECTION_NAME.find()

### 更新文档
https://docs.mongodb.com/manual/tutorial/update-documents/
db.inventory.updateOne(
   { item: "paper" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
)

db.article.updateOne({'_id':ObjectId("5e99bf411ac98f49a4bc6a6e")},{$set:{'cover':null}});

=====================
=====可视化管理后台===
=====================
mongodb可视化管理后台
### mongo-express
https://github.com/mongo-express/mongo-express
使用NodeJS、Express、Bootstrap3编写而成。

### adminMongo
这个看上去简单点
https://github.com/mrvautin/adminMongo

按照步骤clone 下来
npm install 下载包，等待完成
然后 npm start 执行预置脚本
然后 访问 http://localhost:1234/
创建连接
mongodb://localhost/




### 创建用户
启动服务器，use admin 创建admin用户，然后退出
然后mongo 链接，use admin ，db.auth('p','a') 登录，然后use test ，创建这个数据库的用户
两个数据的用户名密码可以相同






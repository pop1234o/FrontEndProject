# 数据库
mongodb api采用js语法，所以用它

### 安装
https://www.mongodb.com/
下载
https://www.mongodb.com/download-center/community

下载compass-是MongoDB gui界面
也可以在安装mongodb的时候联网下载

node.js通过api操作数据库
compass通过图形界面操作数据库

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

### node连接 MongoDB
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
就是json中规定的类型，可以是 String Number
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
//找出所有文档 （数据）
Course.find() //返回promise
    .then(doc=>{
        //返回一个json数组,里面都是一条条(文档)数据
    })
    .catch(erro=>{})


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
art-template(腾讯出品)
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

 










